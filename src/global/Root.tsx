import { useEffect, useState } from "react";
import { shallowEqual } from "react-redux";
import { Outlet } from "react-router-dom";
import { Alert, Navigator, Splash } from "@components";
import { useAppSelector } from "@store";
import { joinCls } from "@utilities";
import { AppSuspense } from "@services/loading";

// Global style
import "./style/global.style.css";

// Remix icon
import "remixicon/fonts/remixicon.css";

// Custom styles
import "./style/animation.style.scss";

export const Root = () => {
	const { isPageLoading } = useAppSelector((state) => state.loading, shallowEqual);
	const [isStartedSplash, setIsStartedSplash] = useState(false);

	useEffect(() => {
		if (isPageLoading) setIsStartedSplash(false);
	}, [isPageLoading, setIsStartedSplash]);

	return (
		<>
			<div className={joinCls("relative mt-16", isPageLoading || !isStartedSplash ? "invisible" : undefined)}>
				{/* Navigation bar */}
				<Navigator className="fixed top-0 left-0 w-full" />

				{/* Notification will show here */}
				<Alert className="fixed top-16 left-0 w-full" />

				<AppSuspense>
					{/* Page will render here */}
					<Outlet />
				</AppSuspense>
			</div>

			{/* Splash */}
			<Splash onStart={() => setIsStartedSplash(true)} />
		</>
	);
};
