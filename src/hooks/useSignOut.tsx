import { useMutation } from "@tanstack/react-query";
import { AuthenticationApi } from "@/api/vizite";
import { apiConfig } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export function useSignOut() {  
  const router = useRouter();
  const t = useTranslations();

  const api = new AuthenticationApi(apiConfig);

  return useMutation({
    mutationFn: () => api.apiV1SignOutPost(),
    onSuccess: () => {
      localStorage.removeItem('access_token');
    }
  });
}