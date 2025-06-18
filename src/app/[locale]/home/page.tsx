'use client';

import { useTranslations } from 'next-intl';
import { redirect, useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useUser } from '@/hooks/useUser';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export default function HomePage() {
  const t = useTranslations();
  const { signOut, isAuthenticated } = useAuth();
  const router = useRouter();
  const { data: user } = useUser();

  const queryClient = useQueryClient();
  
  console.log('isAuthenticated home page', isAuthenticated);


  const handleLogout = () => {
    queryClient.invalidateQueries({ queryKey: ['user'] });
    signOut.mutate(undefined, {
      onError: (error) => {
        console.error('Logout error:', error);
        localStorage.removeItem('access_token');
        router.push(`/${t('routes.auth.login')}`);
      },
      onSuccess: () => {  
        localStorage.removeItem('access_token');
        router.push(`/${t('routes.auth.login')}`);
      },
    });
  };

  useEffect(() => {
    console.log('user', user);
  }, [user, isAuthenticated]);

  const buttons = [
    { label: t('navigation.myClients'), onClick: () => router.push(`/${t('routes.my-clients')}`) },
    { label: t('navigation.myAccount'), onClick: () => router.push(`/${t('routes.my-account.profile')}`) },
    { label: t('navigation.settings'), onClick: () => router.push(`/${t('routes.my-account.settings')}`) },
    { label: t('navigation.logout'), onClick: () => handleLogout() },
  ];

  if(!isAuthenticated) {
    redirect(`/${t('routes.auth.login')}`);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start mt-[100px] px-4">
      <div className="flex flex-col w-full max-w-2xl gap-8">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-400 dark:to-blue-300 mb-2">
            {t('common.appName')}
          </h1>
          <p className="text-lg sm:text-2xl font-medium mb-2">
            <span className="font-semibold text-purple-700 dark:text-purple-300">{t('home.welcome')}</span> 
            &nbsp;<span className="font-bold text-gray-700 dark:text-gray-300">{user?.name}</span>
          </p>
          <p className="text-sm sm:text-lg font-medium text-gray-600/40 dark:text-gray-100/40">
            { t('home.description')}
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          {buttons.map(({ label, onClick }) => (
            <button
              key={label}
              onClick={onClick}
              className={`
                flex items-center justify-center cursor-pointer
                w-full h-52 rounded-lg
                bg-purple-600/40 hover:bg-purple-600/60
                dark:bg-purple-500/30 dark:hover:bg-purple-500/60
                text-white/80 text-3xl font-extrabold
                text-purple-300/90 hover:text-purple-200
                shadow-2xl backdrop-blur-md
                transition-all duration-300
                hover:shadow-purple-900/40 dark:shadow-purple-900/40 dark:hover:shadow-purple-900/40
                hover:scale-105 
                hover:translate-y-[-3px]
                hover:bg-gradient-to-r hover:from-purple-700 hover:to-purple-800
                bg-gradient-to-br <from-purple-7></from-purple-7>00 via-purple-600 to-purple-700
              `}
              style={{ WebkitBackdropFilter: 'blur(8px)' }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
