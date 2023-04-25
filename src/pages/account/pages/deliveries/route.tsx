import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { DELIVERIES_PAGE } from "./constants";

const DeliveriesPage = lazy(() => import("./DeliveriesPage"));

export const deliveriesRoute: RouteObject = {
	path: DELIVERIES_PAGE,
	element: <DeliveriesPage />,
};
