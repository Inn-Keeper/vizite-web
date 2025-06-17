'use client';
import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true); // default to dark

  // Use layout effect to avoid flicker and sync theme immediately after hydration
  useLayoutEffect(() => {
    const stored = localStorage.getItem('darkMode');
    let isDark = true;
    if (stored !== null) {
      isDark = stored === 'true';
    } else {
      // Optionally respect system preference
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    console.log('isDark', isDark);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  console.log('darkMode', darkMode);
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
