import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const Option = forwardRef<HTMLOptionElement, OptionProps>(({ className, children, ...props }, ref) => {
	return (
		<option ref={ref} className={joinCls("py-2", className)} {...props}>
			{children}
		</option>
	);
});
