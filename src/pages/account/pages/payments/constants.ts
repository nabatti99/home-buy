import { ACCOUNT_PAGE_PATH } from "@pages/account/constants";
import { joinPaths } from "@remix-run/router";

export const PAYMENTS_PAGE = "payments";
export const PAYMENTS_PAGE_PATH = joinPaths([ACCOUNT_PAGE_PATH, PAYMENTS_PAGE]);
