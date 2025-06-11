"use client";

import React from "react";
import { ArrowLeftIcon, CameraIcon, PlusIcon, ListBulletIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { formatDateDDMMYYYY } from '@/utils/utils';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Client } from '@/types/appTypes';
  
export default function ClientDetailsPage({ params }: { params: Promise<{ clientId: string; locale: string }> }) {
  const { clientId } = React.use(params); 
  const t = useTranslations('clients');
  const router = useRouter();

  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    fetch('/clients-mock.json')
      .then(res => res.json())
      .then(data => setClients(data.clients));
  }, []);

  const client = clients.find(c => c.id === parseInt(clientId));
  const initials = client?.name.split(' ').map((n: string) => n[0]).join('');

  const handleEdit = () => alert('Editar  cliente');
  const handleDelete = () => {
    if (confirm(t('deleteConfirm', { defaultValue: 'Tem certeza que deseja excluir este cliente?' }))) {
      alert('Cliente excluído!');
      router.back();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full h-[60vh] max-w-md bg-gray-800/90 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-6 relative  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute left-6 top-6 text-gray-400 hover:text-purple-400 transition"
          aria-label="Voltar"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>

        {/* Avatar */}
        <div className="relative flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-purple-600 flex items-center justify-center text-4xl font-extrabold text-white ring-4 ring-purple-300 dark:ring-purple-700 shadow-lg mb-2">
            {initials}
          </div>
          <button className="absolute bottom-2 right-2 px-2 rounded-full bg-white/40 text-xs font-semibold text-white shadow hover:bg-purple-100 transition">
            <CameraIcon className="w-4 h-4 text-purple-600 hover:text-purple-700 transition" />
          </button>
        </div>

        {/* Name */}
        <h2 className="text-3xl font-extrabold text-white text-center mb-2">{client?.name}</h2>

        {/* Add Note */}
        
        <div className="w-full flex flex-row justify-between gap-2 items-center mb-2">
          <button onClick={() => router.push(`/my-clients/${clientId}/add-notes`)} className="flex items-center gap-2 text-sm font-medium text-purple-300 hover:text-purple-100 transition w-1/2 justify-center">
            <PlusIcon className="w-5 h-5" />
            {t('addNote', { defaultValue: 'Adicionar Nota' })}
          </button>
          <button onClick={() => router.push(`/my-clients/${clientId}/agenda`)} className="flex items-center gap-2 text-sm font-medium text-purple-300 hover:text-purple-100 transition w-1/2 justify-center">
            <CalendarIcon className="w-5 h-5" />
            {t('agenda', { defaultValue: 'Ver Agenda' })}
          </button>
        </div>
        
        <div className="w-full flex justify-center text-sm font-medium text-purple-200 hover:text-purple-100 transition mb-2">
          <Link href={`/my-clients/${clientId}/notes`} className="flex items-center gap-2">
            <ListBulletIcon className="w-5 h-5" />
            { t('showAllNotes', { defaultValue: 'Ver Todas as Notas' })}
          
          </Link>
        </div>

        {/* Last Registration */}
        <div className="w-full flex justify-between items-center">
          <span className="text-xs font-semibold text-gray-400">{t('lastRegistration', { defaultValue: 'Último Registro' })}</span>
          <span className="text-xs text-gray-300">{formatDateDDMMYYYY(client?.lastRegistration ?? null)}</span>
        </div>

        {/* Notes Section */}
        <div className="w-full">
          {client?.notes && client.notes.length > 0 && (
            <div className="bg-purple-900/30 rounded-lg p-4 text-white shadow mb-2">
              <div className="text-sm">{client.notes[client.notes.length - 1].note}</div>
              <div className="text-xs text-gray-300 mt-1">
                {client.notes[client.notes.length - 1].date}
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-700 my-2" />

        {/* Info Section */}
        <div className="w-full flex flex-col gap-3">
          <div className="text-xs font-semibold text-gray-400 mb-1">{t('information', { defaultValue: 'Informações' })}</div>
          <div>
            <div className="text-xs text-gray-500">{t('email', { defaultValue: 'Email' })}</div>
            <div className="text-base text-white">{client?.email}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">{t('phone', { defaultValue: 'Telefone' })}</div>
            <div className="text-base text-white">{client?.phone}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full">
          <button
            onClick={handleEdit}
            className="w-full sm:w-1/2 py-3 rounded-lg bg-purple-900 text-white font-bold hover:bg-purple-700 transition"
          >
            {t('edit', { defaultValue: 'Editar' })}
          </button>
          <button
            onClick={handleDelete}
            className="w-full sm:w-1/2 py-3 rounded-lg bg-purple-500/60 text-white font-bold hover:bg-purple-500 transition"
          >
            {t('delete', { defaultValue: 'Excluir' })}
          </button>
        </div>
      </div>
    </div>
  );
} 