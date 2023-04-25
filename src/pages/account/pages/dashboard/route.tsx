import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const DashboardPage = lazy(() => import("./DashboardPage"));

export const dashboardRoute: RouteObject = {
	index: true,
	element: <DashboardPage />,
};
