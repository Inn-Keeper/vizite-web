'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useSignUp } from '@/hooks/useSignUp';
import FormWrapper from '@/components/FormWrapper';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterFormValues } from '@/lib/validations/auth';
import FormField from '@/components/FormField';

export default function RegisterForm() {
  const t = useTranslations();
  const router = useRouter();
  const signUp = useSignUp();

  const methods = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    mode: 'onBlur'
  });

  const onSubmit = async (values: RegisterFormValues) => {
    signUp.mutate({
      name: values.name,
      email: values.email,
      password: values.password,
    }, {
      onSuccess: () => {
        router.push('/auth/login');
      }
    });
  };

  return (
    <FormWrapper
      showLogo
      isLoading={signUp.isPending}
      title={t('auth.register.title')}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
            <FormField<RegisterFormValues>
              name="name"
              label={t('auth.name')}
              autoComplete="name"
              placeholder="Digite seu nome completo"
            />
            <FormField<RegisterFormValues>
              name="email"
              type="email"
              label={t('auth.email')}
              autoComplete="email"
              placeholder="Digite seu e-mail"
            />
            <FormField<RegisterFormValues>
              name="password"
              type="password"
              label={t('auth.password')}
              autoComplete="new-password"
              placeholder="Digite sua senha"
            />
            <FormField<RegisterFormValues>
              name="confirmPassword"
              type="password"
              label={t('auth.confirmPassword')}
              autoComplete="new-password"
              placeholder="Repita sua senha"
            />

            <Button
              type="submit"
              disabled={signUp.isPending || methods.formState.isSubmitting}
              className="mt-4"
            >
              {signUp.isPending ? t('auth.loading') : 'CRIAR CONTA'}
            </Button>
          </form>
        </FormProvider>

        <div className="flex flex-col items-center mt-6 gap-4">
          <Link
            href="/auth/login"
            className="text-gray-900 dark:text-gray-100 text-base font-medium hover:underline transition-colors"
          >
            Já tem uma conta? Entrar
          </Link>

          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
            Ao criar sua conta você concorda com nossos termos e política de uso.
          </p>
        </div>

        {signUp.isError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-center mt-4"
          >
            Erro ao cadastrar. Tente novamente.
          </motion.div>
        )}

        {signUp.isSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-500 text-center mt-4"
          >
            Cadastro realizado com sucesso!
          </motion.div>
        )}
      </motion.div>
    </FormWrapper>
  );
} 