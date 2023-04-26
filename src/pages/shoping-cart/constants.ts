import { joinPaths } from "@remix-run/router";

export const SHOPPING_CART_PAGE = "shopping-cart";
export const SHOPPING_CART_PAGE_PATH = joinPaths(["/", SHOPPING_CART_PAGE]);
