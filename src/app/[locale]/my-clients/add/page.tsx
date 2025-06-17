"use client";

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BackButton from '@/components/BackButton';
import Input from '@/components/Input';
import Button from '@/components/Button';
import HeaderTitle from '@/components/Header';

export default function AddClientPage() {
  const t = useTranslations();
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
      <div className={`w-full h-[60vh] bg-gray-800/90 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-6 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:bg-gray-800/90`}>
      {/* Back Button */}
      <BackButton url={`/${ t('routes.my-clients')}`} />
      {/* Form */}
        <form
        onSubmit={handleSave}
        className="w-full rounded-2xl pt-2 flex flex-col gap-6"
      >

        <HeaderTitle title={t('clients.add')} className="text-center" />

        <div className="flex flex-col gap-4">
          <Input
            label={t('clients.name')}
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            label={t('clients.email')}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            label={t('clients.phone')}
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <Input
            label={t('clients.notes')}
            value={notes}
            onChange={e => setNotes(e.target.value)}
          />
        </div>
        <div className="flex gap-4 mt-4">
          <Button
            type="button"
            onClick={handleCancel}
            className="w-1/2 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-purple-800 dark:text-gray-100 font-bold hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            {t('actions.buttons.cancel')}
          </Button>
          <Button
            type="submit"
            className="w-1/2 py-3 rounded-lg bg-purple-600 text-white font-bold hover:bg-purple-700 transition"
          >
            {t('actions.buttons.save')}
          </Button>
        </div>
      </form>
      </div>
    </div>
  );  
} 
    