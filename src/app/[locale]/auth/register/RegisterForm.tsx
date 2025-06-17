'use client';

import React, { useState } from 'react';
import AuthLogo from '../../../../components/Logo';
import AuthInput from '../../../../components/Input';
import AuthButton from '../../../../components/Button';
import Link from 'next/link';
import { useSignUp } from '@/hooks/useSignUp';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const signUp = useSignUp();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };
    signUp.mutate(data, {
      onSuccess: (response) => {
        // handle success, e.g., redirect or show message
        console.log('Registration successful', response);
      },
      onError: (error) => {
        // handle error, e.g., show error message
        console.error('Registration error', error);
      },
    });
  };

  return (
    <div className="flex flex-col items-center w-full">
      <AuthLogo className="mb-8" />
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <AuthInput
          label="Nome completo"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Digite seu nome completo"
        />
        <AuthInput
          label="E-mail"
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
        />
        <AuthInput
          label="Senha"
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Digite sua senha"
        />
        <AuthInput
          label="Confirmar senha"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          placeholder="Repita sua senha"
        />
        <AuthButton type="submit" disabled={loading} className="mt-2">
          CRIAR CONTA
        </AuthButton> 
      </form>
      <div className="flex flex-col items-center mt-4 w-full">
        <Link href="/auth/login" className="text-[#1F2937] dark:text-gray-200 text-[16px] font-medium leading-[1.2] lowercase hover:underline">Já tem uma conta? Entrar</Link>
      </div>
      <div className="w-full text-center mt-6">
        <p className="text-[14px] font-medium text-[#4B5563] dark:text-gray-400 leading-[1.2]">
          Ao criar sua conta você concorda com nossos termos e política de uso.
        </p>
      </div>
      {signUp.isError && <div className="text-red-500">Erro ao cadastrar. Tente novamente.</div>}
      {signUp.isSuccess && <div className="text-green-500">Cadastro realizado com sucesso!</div>}
    </div>
  );
} 