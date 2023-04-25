import { lazy } from "react";
import { PRODUCT_PAGE } from "./constants";
import { RouteObject } from "react-router-dom";

const ProductPage = lazy(() => import("./ProductPage"));

export const productRoute: RouteObject = {
	path: PRODUCT_PAGE,
	element: <ProductPage />,
};
