import { Row } from "@components";
import { joinCls } from "@utilities";
import { forwardRef } from "react";

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(({ checked, className, onClick, ...props }, ref) => {
	return (
		<div className="relative w-8 h-5 bg-dark-gray rounded-full cursor-pointer hover:bg-accent transition-all duration-300">
			<input ref={ref} type="checkbox" className="!hidden" checked={checked} {...props} />
			<div className={joinCls("toggle-slider absolute top-0 w-3 h-3 m-1 bg-white rounded-full", checked ? "right-0" : "left-0")} {...props} />
		</div>
	);
});
