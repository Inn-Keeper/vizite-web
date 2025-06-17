import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

interface MenuItemProps {
  href?: string;
  label?: string;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconClassName?: string;
}

export default function MenuItem({ href, label, className, onClick, icon, iconClassName }: MenuItemProps) {

  const { darkMode } = useTheme();
  const hoverColor = darkMode ? 'hover:text-purple-300' : 'hover:text-purple-500';
  const hoverBgColor = darkMode ? 'hover:bg-gray-800/50' : 'hover:bg-gray-100/50';
  const hoverBgGradient = darkMode ? 'hover:bg-gradient-to-br from-purple-800/80 via-purple-500/50 to-purple-800/80' : 'hover:bg-gradient-to-br from-purple-100/50 via-purple-200/50 to-purple-100/50';
  const textColor = darkMode ? 'text-gray-300' : 'text-gray-700';
  const navBarHoverBg = darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'; 
  const itemHeight  = 'min-h-16';
  const hoverRotate = 'hover:transition-transform duration-800';

  return (
    <Link
      onClick={onClick}
      href={href || ''}
      className={`${textColor} flex items-center gap-2 h-full ${itemHeight}
        px-2 sm:px-3 lg:px-4 py-2 text-sm font-medium
        ${className} ${hoverColor} ${textColor} ${hoverBgColor} ${navBarHoverBg} ${hoverBgGradient} ${hoverRotate}`}>
        {icon && <div className={`w-6 h-6 ${iconClassName}`}>{icon}</div>}
        {label && label}
    </Link>
  );
}