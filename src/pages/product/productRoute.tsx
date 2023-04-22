import { lazy } from "react";
import { PRODUCT_PAGE_PATH } from "./constants";
import { RouteObject } from "react-router-dom";

const ProductPage = lazy(() => import("./ProductPage"));

export const productRoute: RouteObject = {
	path: PRODUCT_PAGE_PATH,
	element: <ProductPage />,
};
