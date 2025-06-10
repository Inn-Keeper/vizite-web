"use client";

import { useTranslations } from 'next-intl';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const clients = [
  { id: 1, name: 'Pedro Souza', email: 'pedro.s@email.com', phone: '(11) 99999-9999' },
  { id: 2, name: 'Carlos Silva', email: 'carlos@email.com', phone: '(21) 98888-8888' },
  { id: 3, name: 'Maria Oliveira', email: 'maria@email.com', phone: '(31) 97777-7777' },
  { id: 4, name: 'João Pereira', email: 'joao@email.com', phone: '(41) 96666-6666' },
];

export default function ClientsPage() {
  const t = useTranslations('clients');
  const router = useRouter();
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-1">{t('title', { defaultValue: 'Meus Clientes' })}</h1>
            <p className="text-sm sm:text-lg font-medium text-gray-100/40 dark:text-gray-100/40">
              {t('subtitle', { defaultValue: 'clientes cadastrados' })}
            </p>
          </div>
          <button onClick={() => router.push('/my-clients/add')} className="px-6 py-2 rounded-full bg-purple-600 text-white font-bold shadow hover:bg-purple-700 transition text-lg">
            {t('add', { defaultValue: 'Novo Cliente' })}
          </button>
        </div>
        {/* Search Bar */}
        <div className="relative mb-8">
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder={t('search', { defaultValue: 'Buscar cliente...' })}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        {/* Client Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {clients.map(client => (
            <div
              key={client.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-2xl font-bold text-purple-700 dark:text-purple-300">
                  {client.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-lg font-bold text-gray-800 dark:text-white">{client.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">{client.email}</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">{client.phone}</div>
              </div>
              <button 
                onClick={() => router.push(`/my-clients/${client.id}`)} 
                className="ml-2 px-4 py-2 text-sm w-24 text-wrap text-center rounded bg-purple-500 font-semibold hover:bg-purple-600 transition">
                {t('view', { defaultValue: 'Detalhes' })}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 