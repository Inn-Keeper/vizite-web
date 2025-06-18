'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a client-only component for theme initialization
function ThemeInitializer() {
  const { darkMode } = useTheme();

  // Apply theme on client-side only
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return null;
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Always default to dark mode
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // Use a separate effect for localStorage to avoid hydration mismatch
  useEffect(() => {
    // Check if we have a stored preference
    const stored = localStorage.getItem('darkMode');

    // If nothing stored yet, store the default dark mode
    if (stored === null) {
      localStorage.setItem('darkMode', 'true');
    } else if (stored === 'false') {
      // Only change from default if explicitly set to false
      setDarkMode(false);
    }
  }, []);

  // When theme changes, update localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeInitializer />
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
