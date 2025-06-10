"use client";

import { ArrowLeftIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import ToggleDarkMode from '@/components/ToggleDarkMode';

const settingsOptions = [
  { id: 1, label: "Notificações", description: "Gerencie suas preferências de notificação." },
  { id: 2, label: "Privacidade", description: "Controle suas configurações de privacidade." },
  { id: 3, label: "Idioma", description: "Selecione o idioma do aplicativo." },
  { id: 4, label: "Tema", description: "Alterne entre modo claro e escuro." },
];

export default function SettingsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 w-full">
      <div className="w-full h-[60vh] max-w-md bg-gray-800/90 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-6 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute left-6 top-6 text-gray-400 hover:text-purple-400 transition"
          aria-label="Voltar"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <div className="flex flex-col items-center gap-2 mb-4">
          <Cog6ToothIcon className="w-10 h-10 text-purple-500" />
          <h2 className="text-3xl font-extrabold text-purple-700 dark:text-purple-300 text-center">
            Configurações
          </h2>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {settingsOptions.map(option => (
            option.label === "Tema" ? (
              <div key={option.id} className="bg-purple-900/30 rounded-lg p-4 text-white shadow flex flex-row items-center gap-1 justify-between">
                <div>
                  <div className="font-bold text-lg text-purple-200">{option.label}</div>
                  <div className="text-sm text-gray-200">{option.description}</div>
                </div>
                {/* Theme Toggle */}
                <div className="ml-4 flex-shrink-0">
                  <ToggleDarkMode />
                </div>
              </div>
            ) : (
              <div key={option.id} className="bg-purple-900/30 rounded-lg p-4 text-white shadow flex flex-col gap-1">
                <div className="font-bold text-lg text-purple-200">{option.label}</div>
                <div className="text-sm text-gray-200">{option.description}</div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
} 