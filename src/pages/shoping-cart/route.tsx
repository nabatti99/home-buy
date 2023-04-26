import { lazy } from "react";
import { SHOPPING_CART_PAGE } from "./constants";
import { RouteObject } from "react-router-dom";

const ShoppingCartPage = lazy(() => import("./ShoppingCartPage"));

export const shoppingCartRoute: RouteObject = {
	path: SHOPPING_CART_PAGE,
	element: <ShoppingCartPage />,
};
