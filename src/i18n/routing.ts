import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['en', 'pt-br'],
  defaultLocale: 'pt-br',
  localeCookie: false,
  localePrefix: 'as-needed'
});