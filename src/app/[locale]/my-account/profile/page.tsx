'use client';
import { useTranslations } from 'next-intl';
import { User } from '@/types/appTypes';
import { useAuth } from '@/hooks/useAuth';
import { redirect } from 'next/navigation';
import Input from '@/components/Input';  

export default function ProfilePage() {
  const t = useTranslations('myAccount');

  const { user } = useAuth();
  if(!user) {
    redirect('/auth/login');
  } 

  const { name, email } = user.data || {} as User;
  console.log('user', user.data);
  return (
    <div className={`w-full px-8 py-8 mt-6`}>
      {/* Profile Information Section */}
      <h2 className="text-2xl font-bold mb-8">{t('profileInformation')}</h2>
      <form className="space-y-12">
        {/* User Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Input
              label={t('user.name')}
              type="text"
              value={name || ''}
              onChange={() => {}}
            />
          </div>
          <div>
            <Input
              label={t('user.email')}
              type="email"
              value={email || ''}
              onChange={() => {}}
            />
          </div>
        </div>

        {/* Address Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">{t('address.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Input
                label={t('address.street')}
                type="text"
                value="Main St"
                onChange={() => {}}
              />
            </div>
            <div className="md:col-span-1">
              <Input
                label={t('address.number')}
                type="text"
                value="123"
                onChange={() => {}}
              />
            </div>
            <div className="md:col-span-1">
              <Input
                label={t('address.zipCode')}
                type="text"
                value="12345"
                onChange={() => {}}
              />
            </div>
            <div className="md:col-span-2">
              <Input
                label={t('address.additionalInfo')}
                type="text"
                value="Apt 4B"
                onChange={() => {}}
              />
            </div>
            <div className="md:col-span-1">
              <Input
                label={t('address.city')}
                type="text"
                value="Anytown"
                onChange={() => {}}
              />
            </div>
            <div className="md:col-span-1">
              <Input
                label={t('address.country')}
                type="text"
                value="USA"
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
} 