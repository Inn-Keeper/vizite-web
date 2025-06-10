'use client';

import { RootState } from '@/store/store';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useSelector } from 'react-redux';

const LOCALE_FLAGS: Record<string, string> = {
  en: '🇬🇧',
  'pt-br': '🇧🇷',
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const hasMultiLanguages = useSelector((state: RootState) => state.theme.hasMultiLanguages);

  if(!hasMultiLanguages) return null; // TODO: Remove this when we have multi languages

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      // Remove the current locale from the pathname
      const pathWithoutLocale = pathname.replace(/^\/(en|pt-br)(\/|$)/, '/');
      router.push(`/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`);
    });
  };

  return (
    <div className="flex items-center space-x-2">
      {Object.entries(LOCALE_FLAGS).map(([code, flag]) => (
        <button
          key={code}
          onClick={() => handleLocaleChange(code)}
          className={`px-2 py-1 rounded text-xl ${
            locale === code ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'
          }`}
          disabled={isPending}
          aria-label={code}
        >
          {flag}
        </button>
      ))}
    </div>
  );
} 