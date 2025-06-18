"use client";

import { useTranslations } from 'next-intl';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import GradientContainer from '@/components/GradientContainer';
import useClients from '@/hooks/useClients';
import { useTheme } from '@/context/ThemeContext';
import ClientCard from './components/ClientCard';

export default function ClientsPage() {
  const { darkMode } = useTheme();
  const clients = useClients();

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {clients.map(client => (
              <ClientCard            
                key={client.id}
                name={client.name}
                email={client.email}
                phone={client.phone}
                onView={() => router.push(`/my-clients/${client.id}`)}
              />
          ))}
        </div>
      </div>
    </GradientContainer>
  );
} 