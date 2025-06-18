'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import FormWrapper from '@/components/FormWrapper';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { useForgotPassword } from '@/hooks/useForgotPassword';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema, ForgotPasswordFormValues } from '@/lib/validations/auth';
import FormField from '@/components/FormField';

export default function ForgotPasswordForm() {
  const t = useTranslations();
  const router = useRouter();
  const forgotPassword = useForgotPassword();

  const methods = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onBlur'
  });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    await forgotPassword.mutateAsync({
      email: values.email,
    }, {
      onSuccess: () => {
        setTimeout(() => {
          router.push('/auth/login');
        }, 3000);
      }
    });
  };

  return (
    <FormWrapper
      showLogo
      isLoading={forgotPassword.isPending}
      title={t('auth.forgotPassword.title')}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 text-center">
            {t('auth.forgotPassword.description')}
          </p>

          <FormField<ForgotPasswordFormValues>
            name="email"
            type="email"
            label={t('auth.email')}
            autoComplete="email"
            placeholder={t('auth.emailPlaceholder')}
          />

          <Button
            type="submit"
            disabled={forgotPassword.isPending || methods.formState.isSubmitting}
            className="mt-4"
          >
            {forgotPassword.isPending 
              ? t('auth.loading') 
              : t('auth.forgotPassword.submit')}
          </Button>

          <div className="flex justify-center mt-6">
            <Link
              href="/auth/login"
              className="text-gray-900 dark:text-gray-100 text-base font-medium hover:underline transition-colors"
            >
              {t('auth.backToLogin')}
            </Link>
          </div>

          {forgotPassword.isError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-center mt-4"
            >
              {t('auth.forgotPassword.error')}
            </motion.div>
          )}

          {forgotPassword.isSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-500 text-center mt-4"
            >
              {t('auth.forgotPassword.success')}
            </motion.div>
          )}
        </form>
      </FormProvider>
    </FormWrapper>
  );
}