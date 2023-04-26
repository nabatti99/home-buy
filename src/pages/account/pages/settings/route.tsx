import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { SETTINGS_PAGE } from "./constants";

const SettingsPage = lazy(() => import("./SettingsPage"));

export const settingsRoute: RouteObject = {
	path: SETTINGS_PAGE,
	element: <SettingsPage />,
};
