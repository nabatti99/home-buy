import { ACCOUNT_PAGE_PATH } from "@pages/account/constants";
import { joinPaths } from "@remix-run/router";

export const SETTINGS_PAGE = "settings";
export const SETTINGS_PAGE_PATH = joinPaths([ACCOUNT_PAGE_PATH, SETTINGS_PAGE]);
