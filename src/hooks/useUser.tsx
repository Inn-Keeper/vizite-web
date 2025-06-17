import { useQuery } from "@tanstack/react-query";
import { User } from "@/types/appTypes";
import { UsersApi, Configuration } from "@/api/vizite";

// Create a function to get the token from localStorage
const getToken = () => typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

const config = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_BASE_URL,
  accessToken: getToken,
});
const usersApi = new UsersApi(config);

export function useUser() {
  return useQuery<User | null>({
    queryKey: ['user'],
    enabled: !!getToken(), // Only run if token exists
    queryFn: async () => {
      const token = getToken();
      if (!token) return null; // Not authenticated

      // Replace with your actual endpoint to get the current user
      try {
        const response = await usersApi.apiV1UsersIdGet({
          id: 2,
        });
        // Map response to your User type as needed
        return {
          id: response.data?.id,
          email: response.data?.attributes?.email,
          name: response.data?.attributes?.name,
          isAuthenticated: true,
        };
      } catch (error) {
        console.error(error);
        // If the token is invalid/expired, remove it and return null
        localStorage.removeItem("access_token");
        return null;
      }
    },
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
}