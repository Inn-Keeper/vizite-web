'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const t = useTranslations();
  const router = useRouter();

  const buttons = [
    { label: t('navigation.myClients'), onClick: () => router.push(`/${t('routes.myClients')}`) },
    { label: t('navigation.myAccount'), onClick: () => router.push(`/${t('routes.myAccount')}`) },
    { label: t('navigation.settings'), onClick: () => router.push(`/${t('routes.settings')}`) },
    { label: t('navigation.logout'), onClick: () => alert('Logged out!') },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-[-100px] px-4">
      <div className="flex flex-col w-full max-w-2xl gap-8">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-400 dark:to-blue-300 mb-2">
            Vizite
          </h1>
          <p className="text-lg sm:text-2xl font-medium text-gray-700 dark:text-gray-200 mb-2">
            <span className="font-semibold text-purple-700 dark:text-purple-300">Bem vindo,</span> <span className="font-bold text-gray-900 dark:text-white">Dalton Castro</span>
          </p>
          <p className="text-sm sm:text-lg font-medium text-gray-100/40 dark:text-gray-100/40">
            Acesse todos os seus clientes, conta e configurações.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          {buttons.map(({ label, onClick }) => (
            <button
              key={label}
              onClick={onClick}
              className={`
                flex items-center justify-center cursor-pointer
                w-full h-40 rounded-lg
                bg-purple-600/40 hover:bg-purple-600/60
                dark:bg-purple-500/30 dark:hover:bg-purple-500/60
                text-white/80 text-3xl font-extrabold
                text-purple-300/90 hover:text-purple-200
                shadow-2xl backdrop-blur-md
                transition-all duration-300
                hover:shadow-purple-900/40 dark:shadow-purple-900/40 dark:hover:shadow-purple-900/40
                hover:scale-105 
                hover:translate-y-[-3px]
                hover:bg-gradient-to-r hover:from-purple-600/60 hover:to-purple-500/40
                bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900
              `}
              style={{ WebkitBackdropFilter: 'blur(8px)' }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
