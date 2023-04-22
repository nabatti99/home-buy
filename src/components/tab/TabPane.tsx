import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const TabPane = forwardRef<HTMLDivElement, TabPaneProps>(({ className, children, ...props }, ref) => {
	return (
		<div ref={ref} className={joinCls(className)} {...props}>
			TODO: TabPane
		</div>
	);
});
