import { useMutation } from '@tanstack/react-query';

interface ForgotPasswordData {
  email: string;
}

export function useForgotPassword() {
  return useMutation({
    mutationFn: async (data: ForgotPasswordData) => {
      console.log('data', data);
      // Replace with actual API call when available
      return new Promise<{ success: boolean }>((resolve) => {
        setTimeout(() => {
          resolve({ success: true });
        }, 1000);
      });
    }
  });
}
