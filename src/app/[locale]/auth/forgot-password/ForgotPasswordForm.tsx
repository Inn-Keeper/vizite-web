'use client';

import React, { useState } from 'react';
import AuthLogo from '../../components/AuthLogo';
import AuthInput from '../../components/AuthInput';
import AuthButton from '../../components/AuthButton';
import Link from 'next/link';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: handle forgot password logic
  };

  return (
    <div className="flex flex-col items-center w-full">
      <AuthLogo className="mb-8" />
      <h2 className="text-2xl font-semibold text-[#1F2937] dark:text-gray-100 mb-2">Recuperar senha</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-4">
        Informe o seu e-mail de cadastro da sua conta para enviarmos um link para que possas alterar a sua senha.
      </p>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <AuthInput
          label="E-mail da conta"
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
        />
        <AuthButton type="submit" disabled={loading} className="mt-2">
          RECUPERAR
        </AuthButton>
      </form>
      <div className="flex flex-col items-center mt-4 w-full">
        <Link href="/auth/login" className="text-[#1F2937] dark:text-gray-200 text-[16px] font-medium leading-[1.2] lowercase hover:underline">Voltar para login</Link>
      </div>
    </div>
  );
} 