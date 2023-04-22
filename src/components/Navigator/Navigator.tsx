import { forwardRef } from "react";
import { Title } from "./Title";
import { joinCls } from "@utilities";

export const Navigator = forwardRef<HTMLDivElement, NavigatorProps>(({ className, ...props }, ref) => {
	return (
		<>
			<Title />

			<nav ref={ref} className={joinCls("fixed top-0", className)} {...props}>
				TODO: Navbar
			</nav>
		</>
	);
});
