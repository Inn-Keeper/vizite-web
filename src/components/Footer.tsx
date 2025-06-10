import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="w-full py-6 min-h-[140px] bg-gray-800 text-gray-200 text-sm border-t border-gray-800 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full px-4 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
        {/* Location Info */}
        <div className="flex flex-col gap-2 md:items-start items-center text-center md:text-left w-full md:w-auto">
          <div>&copy; {new Date().getFullYear()} Paws & Relax. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">📍</span>
            <span>Rua das Flores, 123, Petville, CA 90210</span>
          </div>
        </div>  
        {/* Links */}
        <div className="flex flex-col md:items-end items-center text-center md:text-right gap-2 w-full md:w-auto">
          <div className="flex flex-row gap-4">
            <Link href={`${t('routes.home')}`} className="hover:underline">{t('navigation.home')}</Link>
            <Link href={`${t('routes.myClients')}`} className="hover:underline">{t('navigation.myClients')}</Link>
            <Link href={`${t('routes.about')}`} className="hover:underline">{t('navigation.about')}</Link>
            <Link href={`${t('routes.myAccount')}`} className="hover:underline">{t('navigation.myAccount')}</Link>
            <Link href="mailto:oi@vizite.com.br" className="hover:underline">Contato</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}