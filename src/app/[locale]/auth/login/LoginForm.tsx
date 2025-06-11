'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import AuthLogo from '../../components/AuthLogo';
import AuthInput from '../../components/AuthInput';
import AuthButton from '../../components/AuthButton';
import { setAuthenticated } from '@/store/slices/userSlice';
import { useAppDispatch } from '@/store/store';
import { useRouter } from 'next/navigation';
import useLoader from '@/hooks/useLoader';

export default function LoginForm() {
  const t = useTranslations();
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const router = useRouter();
  const Loader = useLoader();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      dispatch(setAuthenticated(true));
      router.push('/home');
      setLoading(false);
    }); // add delay to simulate login
  };

  return (
    <>  
      {loading && <Loader />}
      <div className="flex flex-col items-center w-full">
        <AuthLogo className="mb-8" />
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <AuthInput
              name="email"
              type="email"
              autoComplete="email"
              label={t('auth.email')}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <div className="relative">
              <AuthInput
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
          
          <AuthButton type="submit" disabled={loading} className="mt-2">
            {t('auth.submit')}
          </AuthButton>
        </form>
        <div className="flex flex-col items-center mt-4">
          <Link href={`/${t('routes.auth.register')}`} className="text-[#1F2937] text-[16px] font-medium leading-[1.2] lowercase hover:underline">{t('auth.createAccount')}</Link>
        </div>
        <div className="w-full text-center mt-6">
          <p className="text-[14px] font-medium text-[#4B5563] leading-[1.2]">
            {t('terms.description')}
          </p>
        </div>
      </div>
    </>
  );  
} 