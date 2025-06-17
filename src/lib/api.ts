import { AuthenticationApi, Configuration, UsersApi } from "@/api/vizite";

/**
 * API Configuration
 * @description API Configuration
 * @see https://api.vizite.com/api/v1/configuration
 */
export const apiConfig = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_BASE_URL,
  // fetchApi: (url, options) => fetch(url, { ...options, credentials: 'include' }),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('access_token')} || ''`
  }
});

/**
 * Users API
 * @description Users API
 * @see https://api.vizite.com/api/v1/users
 */
export const usersApi = new UsersApi(apiConfig);

/**
 * Authentication API
 * @description Authentication API
 * @see https://api.vizite.com/api/v1/authentication
 */
export const authenticationApi = new AuthenticationApi(apiConfig);