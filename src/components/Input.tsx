import React from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  name?: string;
  autoComplete?: string;
  className?: string;
  showLabel?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  name,
  autoComplete,
  className = '',
  showLabel = true,
  onBlur
}: InputProps) {

  return (
    <div className={`w-full flex flex-col gap-2 ${className}`}>
      {showLabel && (
        <label 
          className="text-sm font-medium text-gray-700 dark:text-gray-300" 
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onBlur={onBlur}
        className={`
          h-12 px-4 rounded-lg text-base border
          transition-all duration-200 shadow-sm
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-purple-500'}
          bg-white dark:bg-[#2A3647] 
          text-gray-900 dark:text-gray-100 
          focus:outline-none focus:ring-2 focus:border-transparent
        `}
      />
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-xs mt-1"
        >
          {error}
        </motion.div>
      )}
    </div>
  );
} 