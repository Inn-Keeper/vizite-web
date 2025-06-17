'use client';
import { useTheme } from "@/context/ThemeContext";

export default function AuthPage({ children }: { children: React.ReactNode }) {
  const { darkMode } = useTheme();
  return (
    <main className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="w-full max-w-md p-4 sm:p-8">
        {children}
      </div>
    </main>
  );
}