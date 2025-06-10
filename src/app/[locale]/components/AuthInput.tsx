import React from 'react';

interface AuthInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  name?: string;
  autoComplete?: string;
  className?: string;
}

export default function AuthInput({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  name,
  autoComplete,
  className = '',
}: AuthInputProps) {
  return (
    <div className={`w-full flex flex-col gap-2 ${className}`}>
      <label className="text-gray-200 text-[16px] font-normal leading-[1.2] dark:text-gray-400" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="h-12 px-4 rounded-lg text-[16px] font-normal leading-[1.2] border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2A3647] text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#5938B9] transition shadow-sm"
      />
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
} 