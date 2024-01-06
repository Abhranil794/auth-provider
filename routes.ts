/**
 * An array of routes that are accessible to the public
 * these routes do not require authentication
 * @type{string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication
 * these routes will redirect loggedin users to /settings
 * @type{string[]}
 */

export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * Prefix for api authentication route
 * Routes that starts with this prefix are used for API authentication purpose
 * @type{string}
 */

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
