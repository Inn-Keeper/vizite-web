'use client';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Footer from './Footer';
import { setAuthenticated } from '@/store/slices/userSlice';
import Image from 'next/image';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import MenuItem from './MenuItem';

export default function ClientLayoutContent({ children }: { children: React.ReactNode }) {
  const t = useTranslations();
  const { darkMode } = useAppSelector((state) => state.theme);
  const [menuOpen, setMenuOpen] = useState(false);
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setAuthenticated(false));
  };

  return (
    <div className={`min-h-screen flex flex-col w-full
      ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}
      overflow-x-hidden
    `}>
      <nav className={`
        border-b w-full
        bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
        ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
        bg-opacity-80
      `}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href={`/${t('routes.home')}`} 
              className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <Image className="hover:scale-105 transition-transform duration-300" src="/logo.svg" alt="Logo" width={30} height={30} />
              </Link>
            </div>

            {/* Hamburger for mobile */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={menuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                </svg>
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {
                isAuthenticated ? (
                  <>
                    <MenuItem
                      href={`/${t('routes.home')}`}
                      label={t('navigation.home')}
                    />
                    <MenuItem
                      href={`/${t('routes.my-account.profile')}`}
                      label={t('navigation.myAccount')}
                    />
                    <MenuItem
                      href={`/${t('routes.my-clients')}`}
                      label={t('navigation.myClients')}
                    />
                    <MenuItem
                      href={`/${t('routes.support')}`}
                      label={t('navigation.support')}
                    />
                    <MenuItem
                      onClick={() => handleLogout()}
                      label={t('navigation.logout')}
                    />
                  </>
                ) : (
                  <MenuItem
                    href={`/${t('routes.auth.login')}`}
                    label={t('navigation.auth.login')}
                  />
                )
              }
              <MenuItem
                href={`/${t('routes.my-account.settings')}`}
                icon={<Cog6ToothIcon />}
                iconClassName="`hover:rotate-90 transition-transform duration-300`"
              />
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menuOpen */}
        <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800">

            
            {
              isAuthenticated ? (
                <>
                  <MenuItem
                    href={`/${t('routes.home')}`}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setMenuOpen(false)}
                    label={t('navigation.home')}
                  />
                  <MenuItem
                    href={`/${t('routes.my-clients')}`}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setMenuOpen(false)}
                    label={t('navigation.myClients')}
                  />
                  <MenuItem
                    href={`/${t('routes.my-account.profile')}`}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setMenuOpen(false)}
                    label={t('navigation.myAccount')}
                  />
                  <MenuItem
                    onClick={() => handleLogout()}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    label={t('navigation.logout')}
                  />
                </>
              ) : (
                <MenuItem
                  href={`/${t('routes.auth.login')}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setMenuOpen(false)}
                  label={t('navigation.auth.login')}
                />
              )
            }
            <MenuItem
              href={`/${t('routes.support')}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setMenuOpen(false)}
              label={t('navigation.support')}
            />
          </div>
        </div>
      </nav>
      <main className="w-full flex-1 min-h-full max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
} 