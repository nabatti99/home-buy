import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const Tab = forwardRef<HTMLDivElement, TabProps>(({ className, children, ...props }, ref) => {
	return (
		<div ref={ref} className={joinCls(className)} {...props}>
			TODO: Tab
		</div>
	);
});
