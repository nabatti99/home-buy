import { joinPaths } from "@remix-run/router";

export const PRODUCT_PAGE = "product/:id";
export const PRODUCT_PAGE_PATH = joinPaths(["/", PRODUCT_PAGE]);
