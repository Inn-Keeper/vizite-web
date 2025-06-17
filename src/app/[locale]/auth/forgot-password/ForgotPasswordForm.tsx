'use client';

import React, { useState } from 'react';
import AuthLogo from '../../../../components/Logo';
import AuthInput from '../../../../components/Input';
import AuthButton from '../../../../components/Button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import useLoader from '@/hooks/useLoader';

export default function ForgotPasswordForm() {
  const t = useTranslations();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const Loader = useLoader();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: handle forgot password logic
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      {loading && <Loader />}
      <div className="flex flex-col items-center w-full"> 
        <AuthLogo className="mb-8" />
        <h2 className="text-2xl font-semibold text-[#1F2937] dark:text-gray-100 mb-2">{t('auth.forgotPassword')}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-4">
          {t('auth.forgotPasswordDescription')}
        </p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <AuthInput
            label={t('auth.email')}
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={t('auth.email')}
            showLabel={false}
          />
          <div className="flex flex-col items-center w-full">
            <AuthButton type="submit" disabled={loading} className="mt-2">
              {t('auth.forgotPassword')}
            </AuthButton>
          </div>
        </form>
        <div className="flex flex-col items-center mt-4 w-full">
          <Link href={`/${t('routes.home')}`} className="text-purple-600/40 dark:text-gray-700 text-[16px] font-medium leading-[1.2] lowercase hover:underline">{t('auth.backToLogin')}</Link>
        </div>
      </div>
    </>
  );
} 