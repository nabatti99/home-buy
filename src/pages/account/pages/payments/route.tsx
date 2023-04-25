import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { PAYMENTS_PAGE } from "./constants";

const PaymentsPage = lazy(() => import("./PaymentsPage"));

export const paymentsRoute: RouteObject = {
	path: PAYMENTS_PAGE,
	element: <PaymentsPage />,
};
