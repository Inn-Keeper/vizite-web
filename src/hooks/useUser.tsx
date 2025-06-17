import { useQuery } from "@tanstack/react-query";
import { UsersApi, Configuration } from "@/api/vizite";

// Create a function to get the token from localStorage
const getToken = async (): Promise<string> => localStorage.getItem("access_token") || '';

const config = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_BASE_URL,
  accessToken: getToken,
});
const usersApi = new UsersApi(config);

export function useUser() {
  return useQuery<any | null>({
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
          id: response.data?.id ? parseInt(response.data.id) : undefined,
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