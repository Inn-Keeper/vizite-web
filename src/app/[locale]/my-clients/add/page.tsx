"use client";

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function AddClientPage() {
  const t = useTranslations('clients');
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const handleCancel = () => router.back();
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save logic here
    alert('Cliente salvo!');
    router.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full h-[60vh] max-w-md bg-gray-800/90 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-6 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Back Button */}
      <button
          onClick={() => router.back()}
          className="absolute left-6 top-6 text-gray-400 hover:text-purple-400 transition"
          aria-label="Voltar"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>

      <form
        onSubmit={handleSave}
        className="w-full rounded-2xl pt-2 flex flex-col gap-6"
      >
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white text-center mb-2">
          {t('add', { defaultValue: 'Novo Cliente' })}
        </h2>
        <div className="flex flex-col gap-4">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {t('name', { defaultValue: 'Nome' })}
            <input
              type="text"
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </label>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {t('email', { defaultValue: 'Email' })}
            <input
              type="email"
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {t('phone', { defaultValue: 'Telefone' })}
            <input
              type="tel"
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
            />
          </label>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {t('notes', { defaultValue: 'Observações' })}
            <textarea
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={notes}
              onChange={e => setNotes(e.target.value)}
              rows={3}
            />
          </label>
        </div>
        <div className="flex gap-4 mt-4">
          <button
            type="button"
            onClick={handleCancel}
            className="w-1/2 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-bold hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            {t('cancel', { defaultValue: 'Cancelar' })}
          </button>
          <button
            type="submit"
            className="w-1/2 py-3 rounded-lg bg-purple-600 text-white font-bold hover:bg-purple-700 transition"
          >
            {t('save', { defaultValue: 'Salvar' })}
          </button>
        </div>
      </form>
      </div>
      </div>
  );
} 