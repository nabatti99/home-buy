import { createBrowserRouter } from "react-router-dom";
import { Root } from "@global";
import { ErrorPage } from "@pages/Error";
import { homeRoute } from "@pages/Home";
import { shopRoute } from "@pages/Shop";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [homeRoute, shopRoute],
	},
]);
