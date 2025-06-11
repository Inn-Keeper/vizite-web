"use client";

import { ArrowLeftIcon, ArrowRightIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import ToggleDarkMode from '@/components/ToggleDarkMode';
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();
  const t = useTranslations();

    
    const settingsOptions = [
        { id: 1, label: t('settings.notifications'), description: t('settings.notificationsDescription'), href: '/settings/notifications' },
        { id: 2, label: t('settings.privacy'), description: t('settings.privacyDescription'), href: '/settings/privacy' },
        { id: 3, label: t('settings.language'), description: t('settings.languageDescription'), href: '/settings/language' },
        { id: 4, label: t('settings.theme'), description: t('settings.themeDescription'), href: '/settings/theme' },
    ];

  return (
    <div className="min-h-screen flex w-full justify-center">
      <div className="w-full h-[60vh] 
      bg-gray-00/90 rounded-lg shadow-2xl p-8 flex flex-col items-center gap-6 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
      dark:bg-gray-900 bg-gray-100">
        {/* Back Button */}
        <button
          onClick={() => router.push('/home')}
          className="absolute left-6 top-6 text-gray-400 hover:text-purple-400 transition"
          aria-label="Voltar"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <div className="flex flex-col items-center gap-2 mb-4">
          <Cog6ToothIcon className="w-10 h-10 text-purple-500" />
          <h2 className="text-3xl font-extrabold text-purple-700 dark:text-purple-300 text-center">
            {t('settings.title')}
          </h2>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {settingsOptions.map(option => (
            option.label === t('settings.theme') ? (
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
              <div onClick={() => router.push(option.href)} key={option.id} 
                className="bg-purple-900/30 rounded-lg p-4 text-white shadow flex flex-row items-center justify-between gap-1 
                    hover:text-purple-200 transition-all duration-300 cursor-pointer
                    hover:bg-purple-900/50
                    hover:shadow-lg
                    hover:scale-105">
                <div>
                    <div className="font-bold text-lg text-purple-200">{option.label}</div>
                    <div className="text-sm text-gray-200">{option.description}</div>
                </div>
                <Link
                  href={option.href}
                  className="w-10 h-10 flex items-center justify-center
                  hover:text-purple-200 transition-all duration-300 transform hover:translate-x-2 hover:scale-105"
                  aria-label={option.label}
                  >
                    <ArrowRightIcon className="h-6 text-purple-200" />
                </Link>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
} 