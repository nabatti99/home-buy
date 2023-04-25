import { lazy } from "react";
import { SHOP_PAGE } from "./constants";
import { RouteObject } from "react-router-dom";

const ShopPage = lazy(() => import("./ShopPage"));

export const shopRoute: RouteObject = {
	path: SHOP_PAGE,
	element: <ShopPage />,
};
