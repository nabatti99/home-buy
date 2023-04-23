import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ className, children, ...props }, ref) => {
	return (
		<select ref={ref} className={joinCls("border border-light-gray p-4", className)} {...props}>
			{children}
		</select>
	);
});
