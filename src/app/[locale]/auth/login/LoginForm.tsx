'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import { useSignIn } from '@/hooks/useSignIn';
import { useQueryClient } from '@tanstack/react-query';
import FormWrapper from '@/components/FormWrapper';
import { motion } from 'framer-motion';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormValues } from '@/lib/validations/auth';
import FormField from '@/components/FormField';

export default function LoginForm() {
  const t = useTranslations();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const signIn = useSignIn();
  const queryClient = useQueryClient();

  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onBlur'
  });

  const onSubmit = async (values: LoginFormValues) => {
    signIn.mutate({ 
      email: values.email, 
      password: values.password 
    }, {
      onSuccess: async (response) => {
        const accessToken = response?.data?.meta?.accessToken;
  
        if (accessToken) {
          localStorage.setItem('access_token', accessToken);
        }
        const data = response?.data;
        const userData = data?.attributes;
        if (data && userData) {
          await queryClient.setQueryData(['user'], {
            id: data.id ? Number(data.id) : undefined,
            email: userData.email || '',
            name: userData.name || '',
            isAuthenticated: !!accessToken,
          });
        } else {
          await queryClient.invalidateQueries({ queryKey: ['user'] });
        }
        router.push('/home');
      }
    });
  };

  return (
    <FormWrapper
      showLogo
      isLoading={signIn.isPending}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <FormProvider {...methods}>
          <form className="w-full flex flex-col gap-4" onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <FormField<LoginFormValues>
                name="email"
                type="email"
                autoComplete="email"
                label={t('auth.email')}
                placeholder={t('auth.emailPlaceholder')}
              />
              <div className="relative">
                <FormField<LoginFormValues>
                  name="password"
                  autoComplete="current-password"
                  label={t('auth.password')}
                  placeholder={t('auth.passwordPlaceholder')}
                  showPassword={showPassword}
                />
                <button
                  className="absolute right-3 top-10 text-gray-400 hover:text-purple-600 text-sm"
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  tabIndex={-1}
                  aria-label={showPassword ? t('auth.hidePassword') : t('auth.showPassword')}
                >
                  {showPassword ? (
                    <EyeIcon className="w-4 h-4" />
                  ) : (
                    <EyeSlashIcon className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-end mt-2">
              <Link
                href={`/${t('routes.auth.forgotPassword')}`}
                className="text-amber-600 text-sm font-medium hover:underline transition-colors"
              >
                {t('auth.forgotPassword')}
              </Link>
            </div>

            <Button
              type="submit"
              disabled={signIn.isPending || methods.formState.isSubmitting}
              className="mt-4"
            >
              {signIn.isPending ? t('auth.loading') : t('auth.submit')}
            </Button>
          </form>
        </FormProvider>

        <div className="flex flex-col items-center mt-6 gap-4">
          <Link
            href={`/${t('routes.auth.register')}`}
            className="text-gray-900 dark:text-gray-100 text-base font-medium hover:underline transition-colors"
          >
            {t('auth.createAccount')}
          </Link>

          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
            {t('terms.description')}
          </p>
        </div>

        {signIn.isError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-center mt-4"
          >
            {t('auth.error')}
          </motion.div>
        )}

        {signIn.isSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-500 text-center mt-4"
          >
            {t('auth.success')}
          </motion.div>
        )}
      </motion.div>
    </FormWrapper>
  );  
} 