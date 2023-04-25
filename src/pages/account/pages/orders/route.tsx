import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { ORDERS_PAGE } from "./constants";

const OrdersPage = lazy(() => import("./OrdersPage"));

export const ordersRoute: RouteObject = {
	path: ORDERS_PAGE,
	element: <OrdersPage />,
};
