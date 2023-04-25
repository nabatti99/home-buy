import { HOME_PAGE, HOME_PAGE_PATH } from "@pages/home";
import { Helmet } from "react-helmet";
import { MY_ACCOUNT_PAGE, MY_ACCOUNT_PAGE_PATH } from "@pages/authentication.group/my-account";
import { PRODUCT_PAGE, PRODUCT_PAGE_PATH } from "@pages/product";
import { SHOP_PAGE, SHOP_PAGE_PATH } from "@pages/shop";
import { matchPath, useLocation } from "react-router-dom";
import { DASHBOARD_PAGE_PATH } from "@pages/account/pages/dashboard";

const routes: RouteItem[] = [
	{
		name: "Home Buy",
		path: HOME_PAGE_PATH,
	},
	{
		name: "Shop",
		path: SHOP_PAGE_PATH,
	},
	{
		name: "Product",
		path: PRODUCT_PAGE_PATH,
	},
	{
		name: "My Account",
		path: MY_ACCOUNT_PAGE_PATH,
	},
	{
		name: "Dash Board",
		path: DASHBOARD_PAGE_PATH,
	},
];

export const Title = () => {
	const location = useLocation();

	const matchedRoute = routes.find((route) => matchPath(route.path, location.pathname));
	const title = matchedRoute?.name || "Home Buy";

	return (
		<Helmet>
			<title>{title}</title>
		</Helmet>
	);
};
