import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthenticationApi } from "@/api/vizite";
import { apiConfig } from "@/lib/api";

export function useSignOut() {  
  const queryClient = useQueryClient();

  const api = new AuthenticationApi(apiConfig);

  return useMutation({
    mutationFn: () => api.apiV1SignOutPostRaw(),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['user'] });
    }
  });
}