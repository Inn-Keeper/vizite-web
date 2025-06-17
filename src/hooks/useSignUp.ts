import { useMutation } from '@tanstack/react-query';
import { AuthenticationApi, Configuration, ApiV1SignUpPostRequest, ApiV1SignUpPost200Response } from '@/api/vizite';

const config = new Configuration({ basePath: process.env.NEXT_PUBLIC_API_BASE_URL });
const api = new AuthenticationApi(config);

export function useSignUp() {
  return useMutation<ApiV1SignUpPost200Response, unknown, ApiV1SignUpPostRequest>({
    mutationFn: (data: ApiV1SignUpPostRequest) => api.apiV1SignUpPost({ apiV1SignUpPostRequest: data }),
  });
}