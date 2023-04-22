import { Root } from "@global";
import { ErrorPage } from "@pages/Error";
import { homeRoute } from "@pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [homeRoute],
	},
]);
