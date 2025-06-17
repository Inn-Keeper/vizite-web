import { useTheme } from "@/context/ThemeContext";

interface HeaderProps {
  title: string;
  className?: string;
}

export default function HeaderTitle({ 
  title,
  className
 }: HeaderProps) {
  const { darkMode } = useTheme();  
  const defaultClassName = 'text-2xl font-extrabold text-gray-100 dark:text-white text-center mb-2';
  const darkModeClass = darkMode ? 'text-gray-100 dark:text-white' : 'text-gray-100 dark:text-gray-100';
  return (
    <h2 className={`${defaultClassName} ${darkModeClass} ${className}`}>
    {title}
  </h2>
  );
}