import { useAppSelector } from "@/store/store";

export default function GradientContainer(
  { children, height = '90vh', className = '' }: { children: React.ReactNode, height?: string, className?: string }) {
    const { darkMode } = useAppSelector((state) => state.theme); 
    const isDarkMode: { [key: string]: string } = {
      dark: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
      light: 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50',
    } 
  return (
      <div className={`min-h-screen mx-0 w-full h-full items-start justify-start h-[${height}] relative ${className}
        ${isDarkMode[darkMode ? 'dark' : 'light']} 
        rounded shadow p-4 flex flex-col items-center gap-6`}>
        {children}
      </div>
  );
}