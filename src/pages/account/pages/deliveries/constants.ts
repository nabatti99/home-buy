import { ACCOUNT_PAGE_PATH } from "@pages/account/constants";
import { joinPaths } from "@remix-run/router";

export const DELIVERIES_PAGE = "deliveries";
export const DELIVERIES_PAGE_PATH = joinPaths([ACCOUNT_PAGE_PATH, DELIVERIES_PAGE]);
