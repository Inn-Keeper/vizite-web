import { useMutation } from "@tanstack/react-query";
import { ApiV1SignUpPost200Response, ApiV1SignInPostRequest } from "@/api/vizite";
import { authenticationApi } from "@/lib/api";

export function useSignIn() {
    return useMutation<ApiV1SignUpPost200Response, unknown, ApiV1SignInPostRequest>({
    mutationFn: (data: ApiV1SignInPostRequest) => authenticationApi.apiV1SignInPost({ apiV1SignInPostRequest: data }),
  });
}