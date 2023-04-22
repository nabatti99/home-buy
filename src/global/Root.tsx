import { useEffect, useState } from "react";
import { shallowEqual } from "react-redux";
import { Outlet } from "react-router-dom";
import { Navigator, Splash } from "@components";
import { useAppSelector } from "@store";
import { joinCls } from "@utilities";
import { AppSuspense } from "@services/loading";

// Global style
import "./style/global.style.css";

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
			<div className={joinCls("mt-5", isPageLoading || !isStartedSplash ? "invisible" : undefined)}>
				{/* Navigation bar */}
				<Navigator />

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
