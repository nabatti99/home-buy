import { lazy } from "react";
import { MY_ACCOUNT_PAGE_PATH } from "./constants";
import { RouteObject } from "react-router-dom";

const MyAccountPage = lazy(() => import("./MyAccountPage"));

export const myAccountRoute: RouteObject = {
	path: MY_ACCOUNT_PAGE_PATH,
	element: <MyAccountPage />,
};
