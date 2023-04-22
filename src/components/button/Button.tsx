import { joinCls } from "@utilities/text.utils";
import { MouseEvent, forwardRef } from "react";
import { H5, Row } from "@components";

const buttonClass: Record<ButtonVariant, string> = {
	fill: "bg-primary text-background fill-background hover:bg-blue-400 active:bg-blue-500",
	outline: "text-dark border-dark border-2 fill-dark hover:bg-gray-100 active:bg-gray-200",
	ghost: "text-primary fill-primary hover:bg-gray-100 active:bg-gray-200",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ title, disabled = false, variant = "fill", type, LeftItem, RightItem, children, className, onClick = () => {}, ...props }, ref) => {
		const handleClicked = (event: MouseEvent<HTMLButtonElement>) => {
			if (disabled) return;
			onClick!(event);
		};

		return (
			<button
				ref={ref}
				className={joinCls("button-container px-6 py-3", buttonClass[variant], className, disabled ? "opacity-50" : "")}
				disabled={disabled}
				type={type}
				onClick={handleClicked}
				{...props}
			>
				<Row className="button-layout items-center justify-center gap-2">
					{LeftItem && <LeftItem className="w-6 h-6" />}
					<H5 className="button-text">{children}</H5>
					{RightItem && <RightItem className="w-6 h-6" />}
				</Row>
			</button>
		);
	}
);
