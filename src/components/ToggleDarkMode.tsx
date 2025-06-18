'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/context/ThemeContext';

export default function ToggleDarkMode() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={() => toggleDarkMode()}
      className="px-2 py-1 rounded text-xl ml-2
        bg-purple-900/50 text-purple-700
        dark:bg-purple-700/50 dark:text-purple-600
        hover:bg-purple-900/70 hover:text-purple-600
        dark:hover:bg-purple-700/70 dark:hover:text-purple-600
        transition-all duration-300
        hover:scale-105"
        aria-label="Toggle Dark Mode"
    >
      {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
    </button>
  );
} 