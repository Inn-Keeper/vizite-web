import { authenticationApi } from '@/lib/api';
import { useMutation } from '@tanstack/react-query';

interface ForgotPasswordData {
  email: string;
}

export function useForgotPassword() {
  return useMutation({
    mutationFn: async (data: ForgotPasswordData) => {
      const response = await authenticationApi.apiV1RecoverPasswordPost({
        apiV1RecoverPasswordPostRequest: {
          email: data.email
        }
      });  
      console.log('response', response);    
      return response;  
    },
  });
}
