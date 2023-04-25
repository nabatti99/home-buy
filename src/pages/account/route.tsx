import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { ACCOUNT_PAGE } from "./constants";
import { dashboardRoute } from "./pages/dashboard";
import { ordersRoute } from "./pages/orders";
import { deliveriesRoute } from "./pages/deliveries";
import { paymentsRoute } from "./pages/payments";

const AccountPage = lazy(() => import("./AccountPage"));

export const accountRoute: RouteObject = {
	path: ACCOUNT_PAGE,
	element: <AccountPage />,
	children: [dashboardRoute, ordersRoute, deliveriesRoute, paymentsRoute],
};
