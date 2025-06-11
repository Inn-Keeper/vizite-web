'use client';
import { useAppSelector } from '@/store/store';
import { useTranslations } from 'next-intl';

export default function ProfilePage() {
  const t = useTranslations('myAccount');
  const { darkMode   } = useAppSelector((state) => state.theme);
  const { name } = useAppSelector((state) => state.user);

  return (
    <div className={`w-full px-8 py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Profile Information Section */}
      <h2 className="text-2xl font-bold mb-8">{t('profileInformation')}</h2>
      <form className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium mb-2">{t('user.name')}</label>
            <input
              type="text"
              value={name}
              className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 bg-gray-100 dark:text-white"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t('user.email')}</label>
            <input
              type="email"
              value="user@example.com"
              className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 bg-gray-100 dark:text-white"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t('user.phone')}</label>
            <input
              type="text"
              value="1234567890"
              className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 bg-gray-100 dark:text-white"
              readOnly
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">{t('address.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">{t('address.street')}</label>
              <input
                type="text"
                value="Main St"
                className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 bg-gray-100 dark:text-white"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t('address.number')}</label>
              <input
                type="text"
                value="123"
                className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 bg-gray-100 dark:text-white"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t('address.zipCode')}</label>
              <input
                type="text"
                value="12345"
                className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 bg-gray-100 dark:text-white"
                readOnly
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">{t('address.additionalInfo')}</label>
              <input
                type="text"
                value="Apt 4B"
                className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 bg-gray-100 dark:text-white"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t('address.city')}</label>
              <input
                type="text"
                value="Anytown"
                className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 bg-gray-100 dark:text-white"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t('address.country')}</label>
              <input
                type="text"
                value="USA"
                className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 dark:bg-gray-700 bg-gray-100 dark:text-white"
                readOnly
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
} 