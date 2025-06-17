import React, { ReactNode, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useSignOut } from './useSignOut';
import { useSignIn } from './useSignIn';
import { useUser } from '@/hooks/useUser';

interface AuthPrompt {
  showAuthPrompt: boolean;
  content: ReactNode;
}

export function useAuth() {
  const t = useTranslations('auth');
  const router = useRouter();

  const user = useUser(); 
  const isAuthenticated = !!user.data?.isAuthenticated;

  const requireAuth = useCallback((): AuthPrompt => {
    if (!isAuthenticated && !user.isLoading) {
      return {
        showAuthPrompt: true,
        content: (
          <div className="flex mt-12 flex-col items-center justify-center min-h-[60vh]">
            <div className="w-full max-w-md bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-6">
              <h1 className="text-2xl font-bold text-white mb-4">{t('signIn.title')}</h1>
              <p className="text-gray-300 dark:text-gray-400 mb-6 text-center">{t('signIn.message')}</p>
              <button onClick={() => router.push('/auth/login')} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                {t('signIn.button')}
              </button>
            </div>
          </div>
        )
      };
    }
    return { showAuthPrompt: false, content: null };
  }, [isAuthenticated, user.isLoading, router, t]);

  return {
    isAuthenticated,
    requireAuth,
    signOut: useSignOut(),
    signIn: useSignIn(),
    user: useUser()
  };
} 