import { ACCOUNT_PAGE_PATH } from "@pages/account/constants";
import { joinPaths } from "@remix-run/router";

export const DASHBOARD_PAGE = "";
export const DASHBOARD_PAGE_PATH = joinPaths([ACCOUNT_PAGE_PATH, DASHBOARD_PAGE]);
