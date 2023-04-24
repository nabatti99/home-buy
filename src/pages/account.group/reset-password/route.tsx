import { lazy } from "react";
import { RESET_PASSWORD_PAGE_PATH } from "./constants";
import { RouteObject } from "react-router-dom";

const ResetPassword = lazy(() => import("./ResetPassword"));

export const resetPasswordRoute: RouteObject = {
	path: RESET_PASSWORD_PAGE_PATH,
	element: <ResetPassword />,
};
