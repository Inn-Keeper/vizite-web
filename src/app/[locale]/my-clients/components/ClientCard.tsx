import { useTheme } from '@/context/ThemeContext';
import { useTranslations } from 'next-intl';
import React from 'react';
import { motion } from 'framer-motion';

interface ClientCardProps {
  name: string;
  email: string;
  phone: string;
  onView: () => void;
}

export default function ClientCard({ name, email, phone, onView }: ClientCardProps) {
  const { darkMode } = useTheme();

  const t = useTranslations('clients');

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        backgroundColor: darkMode ? 'rgba(88, 28, 135, 0.25)' : 'rgba(139, 92, 246, 0.08)',
        boxShadow: '0 8px 32px 0 rgba(80, 0, 120, 0.18)',
      }}
      transition={{ type: 'scale', stiffness: 350, damping: 18, duration: 0.2 }}
      key={name}
      className={`rounded-sm 
        shadow-lg p-6 sm:p-8 md:p-12 flex flex-col sm:flex-row flex-wrap
        items-center gap-4 transition ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="flex-shrink-0">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${darkMode ? 'bg-purple-900' : 'bg-purple-100'} flex items-center justify-center text-xl sm:text-2xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
          {name.split(' ').map(n => n[0]).join('')}
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2 text-center sm:text-left">
        <div className={`text-base sm:text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{name}</div>
        <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{email}</div>
        <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{phone}</div>
        <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Last Contacted: 10/10/2090</div>
      </div>
      <button
        onClick={onView}
        className="sm:flex sm:mt-4 sm:mt-0 ml-0 sm:ml-2 px-4 py-2 text-xs sm:text-sm w-full sm:w-24 
        rounded bg-purple-500 font-semibold hover:bg-purple-600 transition">
        {t('view', { defaultValue: 'Detalhes' })}
      </button>
    </motion.div>
  );
} 