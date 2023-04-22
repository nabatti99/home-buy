import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, children, ...props }, ref) => {
	return <input ref={ref} type="text" className={joinCls("form-input py-2", className)} {...props} />;
});
