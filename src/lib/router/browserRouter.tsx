import { createBrowserRouter } from "react-router-dom";
import { ROOT, Root } from "@global";
import { ErrorPage } from "@pages/error";
import { homeRoute } from "@pages/home";
import { shopRoute } from "@pages/shop";
import { productRoute } from "@pages/product";
import { accountRoute } from "@pages/account";
import { myAccountRoute, resetPasswordRoute } from "@pages/authentication.group";

export const router = createBrowserRouter([
	{
		path: ROOT,
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [homeRoute, shopRoute, productRoute, accountRoute, myAccountRoute, resetPasswordRoute],
	},
]);
