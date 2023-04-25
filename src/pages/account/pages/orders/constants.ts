import { ACCOUNT_PAGE_PATH } from "@pages/account/constants";
import { joinPaths } from "@remix-run/router";

export const ORDERS_PAGE = "orders";
export const ORDERS_PAGE_PATH = joinPaths([ACCOUNT_PAGE_PATH, ORDERS_PAGE]);
