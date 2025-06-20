'use client';
// import { useAppSelector } from '@/store/store';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '@/hooks/useAuth';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import GradientContainer from '@/components/GradientContainer';
import { useUser } from '@/hooks/useUser';
import { useSignOut } from '@/hooks/useSignOut';
import { useTheme } from '@/context/ThemeContext';

export default function MyAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations('myAccount');
  const { darkMode } = useTheme();
  console.log('darkMode', darkMode);
  const { data: user } = useUser();
  const { requireAuth } = useAuth();
  const { showAuthPrompt, content } = requireAuth();
  const pathname = usePathname();
  const signOut = useSignOut();
  
  if (showAuthPrompt) {
    return <>{content}</>;
  }

  const isActive = (path: string) => {
    return pathname === `${path}`;
  };
  
  const hoverBgColor = darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-gray-100/50';
  const hoverBgGradient = darkMode ? 'hover:bg-gradient-to-br from-purple-800/80 via-purple-500/50 to-purple-800/80' : 'hover:bg-gradient-to-br from-purple-100/50 via-purple-200/50 to-purple-100/50';
  const textColor = darkMode ? 'text-gray-300' : 'text-gray-700';

  const handleLogout = () => {
    signOut.mutate(undefined, {
      onError: (error) => {
        console.error('Logout error:', error);
      },
    });
  };

  return (
    <GradientContainer>
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <div className='p-4'>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-500/60 flex items-center justify-center">
                <FaUser className="text-white text-xl" />
              </div>
              <div>
                <h2 className="font-semibold">{user?.name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Member</p>
              </div>
            </div>
            <nav className="space-y-2 gap-4">
              <Link
                href="/my-account/profile"
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                  isActive('/my-account/profile')
                    ? `${textColor} bg-purple-500/60`
                    : `${textColor} ${hoverBgColor} ${hoverBgGradient}`
                }`}
              >
                <FaUser className="text-lg" />
                <span>{t('profile')}</span>
              </Link>
              <Link
                href="/my-account/settings"
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                  isActive('/my-account/settings')
                    ? `${textColor} bg-purple-500/60`
                    : `${textColor} ${hoverBgColor} ${hoverBgGradient}`
                }`}
              >
                <FaCog className="text-lg" />
                <span>{t('settings')}</span>
              </Link>
              <button 
                className="w-full flex items-center space-x-3 px-2 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-red-500"
                onClick={() => {
                  // Add logout functionality here
                  handleLogout();
                }}
              >
                <FaSignOutAlt className="text-lg" />
                <span>{t('logout')}</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:flex-1">
          {children}
        </div>
      </div>
    </GradientContainer>
  );
} 