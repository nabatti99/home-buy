import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ className, children, ...props }, ref) => {
	return (
		<select ref={ref} className={joinCls("form-select py-2", className)} {...props}>
			{children}
		</select>
	);
});
