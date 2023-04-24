import { RouteObject } from "react-router-dom";
import { myAccountRoute } from "./my-account";
import { resetPasswordRoute } from "./reset-password";

export const accountRoutes: RouteObject[] = [myAccountRoute, resetPasswordRoute];
