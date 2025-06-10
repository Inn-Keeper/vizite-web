import React from 'react';

interface AuthButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function AuthButton({
  children,
  type = 'button',
  onClick,
  disabled,
  className = '',
}: AuthButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full h-12 bg-[#5938B9] hover:bg-[#4b2fa1] text-white font-medium rounded-lg shadow transition text-base flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
} 