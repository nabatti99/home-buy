import { lazy } from "react";
import { HOME_PAGE_PATH } from "./constants";
import { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("./HomePage"));

export const homeRoute: RouteObject = {
	path: HOME_PAGE_PATH,
	element: <HomePage />,
};
