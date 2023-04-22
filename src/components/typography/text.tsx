import * as React from "react";
import { joinCls } from "@utilities/text.utils";

type TextProps = {
	children: React.ReactNode;
	isSpan?: boolean;
} & React.HTMLAttributes<HTMLHeadingElement>;

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(({ children, isSpan = false, className, ...props }, ref) => (
	<p ref={ref} className={joinCls("font-body font-bold text-base", className)} {...props}>
		{children}
	</p>
));

export default Text;
