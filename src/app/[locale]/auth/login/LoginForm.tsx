'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Logo from '@/components/Logo';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import useLoader from '@/hooks/useLoader';
import { useSignIn } from '@/hooks/useSignIn';
import { useQueryClient } from '@tanstack/react-query';
import { PENDING_STATUS } from '@/lib/contants';

export default function LoginForm() {
  const t = useTranslations();
  const Loader = useLoader();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const signIn = useSignIn();
  const queryClient = useQueryClient();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn.mutate({ email, password }, {
      onSuccess: (response) => {
        // Store access_token in localStorage
        const accessToken = response?.data?.meta?.accessToken;
        if (accessToken) {
          localStorage.setItem('access_token', accessToken);
        }
        // If user info is in the response, set it in the cache
        const data = response?.data;
        const userData = data?.attributes;
        if (data && userData) {
          queryClient.setQueryData(['user'], {
            id: data.id ? Number(data.id) : undefined,
            email: userData.email || '',
            name: userData.name || '',
            isAuthenticated: !!accessToken,
          });
        } else {
          // If not, just invalidate/refetch the user query
          queryClient.invalidateQueries({ queryKey: ['user'] });
        }
        router.push('/home');
      },
      onError: (error) => {
        console.log('Login error', error);
      },
    });
  };

  return (
    <>  
      {signIn.status === PENDING_STATUS && <Loader />}
      <div className="flex flex-col items-center w-full">
        <Logo className="mb-8" />
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Input
              name="email"
              type="email"
              autoComplete="email"
              label={t('auth.email')}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <div className="relative">
              <Input
                name="password" 
                type={showPassword ? 'text' : 'password'}
                autoComplete="off"
                label={t('auth.password')}
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button
                className="absolute right-3 top-10 text-gray-400 hover:text-purple-600 text-sm"
                type="button"
                onClick={() => setShowPassword(v => !v)}
                tabIndex={-1}
                aria-label={showPassword ? t('auth.hidePassword') : t('auth.showPassword')}
              >
                {showPassword ? <EyeIcon className="w-4 h-4" /> : <EyeSlashIcon className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <Link href={`/${t('routes.auth.forgotPassword')}`} className="text-[#D97706] text-[14px] font-medium leading-[1.2] lowercase hover:underline">{t('auth.forgotPassword')}</Link>
          </div>
          
          <Button type="submit" disabled={signIn.status === PENDING_STATUS} className="mt-2">
            {signIn.status === PENDING_STATUS ? t('auth.loading') : t('auth.submit')}
          </Button>
        </form>
        <div className="flex flex-col items-center mt-4">
          <Link href={`/${t('routes.auth.register')}`} className="text-[#1F2937] text-[16px] font-medium leading-[1.2] lowercase hover:underline">{t('auth.createAccount')}</Link>
        </div>
        <div className="w-full text-center mt-6">
          <p className="text-[14px] font-medium text-[#4B5563] leading-[1.2]">
            {t('terms.description')}
          </p>
        </div>
        {signIn.isError && <div className="text-red-500 text-center mt-2">{t('auth.error')}</div>}
        {signIn.isSuccess && <div className="text-green-500 text-center mt-2">{t('auth.success')}</div>}
      </div>
    </>
  );  
} 