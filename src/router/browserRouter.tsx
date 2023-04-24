import { createBrowserRouter } from "react-router-dom";
import { Root } from "@global";
import { ErrorPage } from "@pages/error";
import { homeRoute } from "@pages/home";
import { shopRoute } from "@pages/shop";
import { productRoute } from "@pages/product";
import { myAccountRoute } from "@pages/my-account";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [homeRoute, shopRoute, productRoute, myAccountRoute],
	},
]);
