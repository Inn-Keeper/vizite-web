"use client";

import { useTranslations } from 'next-intl';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import GradientContainer from '@/components/GradientContainer';
import useClients from '@/hooks/useClients';
import { useTheme } from '@/context/ThemeContext';

export default function ClientsPage() {
  const { darkMode } = useTheme();
  const clients = useClients();
  console.log('darkMode', darkMode);
  const t = useTranslations('clients');
  const router = useRouter();
  return (
    <GradientContainer>
      <div className="flex flex-col gap-4 w-full mt-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className={`text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>{t('title', { defaultValue: 'Meus Clientes' })}</h1>
            <p className={`text-sm sm:text-lg font-medium ${darkMode ? 'text-gray-100/40' : 'text-gray-100/40'}`}>
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
            className={`w-full pl-12 pr-4 py-3 border rounded-lg ${darkMode ? 'border-gray-700' : 'border-gray-300'} ${darkMode ? 'bg-gray-800' : 'bg-white'} ${darkMode ? 'text-gray-100' : 'text-gray-900'} shadow focus:outline-none focus:ring-2 focus:ring-purple-400`}
          />
        </div>
        {/* Client Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {clients.map(client => (
            <div
              key={client.id}
              className={`rounded-sm shadow-lg p-12 flex items-center gap-4 hover:shadow-xl transition ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="flex-shrink-0">
                <div className={`w-14 h-14 rounded-full ${darkMode ? 'bg-purple-900' : 'bg-purple-100'} flex items-center justify-center text-2xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                  {client.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{client.name}</div>
                <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{client.email}</div>
                <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{client.phone}</div>
                <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Last Contacted: 10/10/2090</div>
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
    </GradientContainer>
  );
} 