import React from 'react';

interface ClientCardProps {
  name: string;
  email: string;
  phone: string;
  onView: () => void;
}

export default function ClientCard({ name, email, phone, onView }: ClientCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col gap-2 hover:shadow-xl transition">
      <div className="text-xl font-bold text-gray-800 dark:text-white">{name}</div>
      <div className="text-sm text-gray-500 dark:text-gray-300">{email}</div>
      <div className="text-sm text-gray-500 dark:text-gray-300">{phone}</div>
      <button
        className="mt-4 px-4 py-2 rounded bg-purple-500 text-white font-semibold hover:bg-purple-600 transition"
        onClick={onView}
      >
        Ver Detalhes
      </button>
    </div>
  );
} 