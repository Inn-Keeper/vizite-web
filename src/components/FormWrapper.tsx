import React from 'react';
import Logo from './Logo';
import useLoader from '@/hooks/useLoader';
import { motion } from 'framer-motion';

interface FormWrapperProps {
  children: React.ReactNode;
  showLogo?: boolean;
  isLoading?: boolean;
  title?: string;
}

export default function FormWrapper({ 
  children, 
  showLogo = true, 
  isLoading = false,
  title
}: FormWrapperProps) {
  const Loader = useLoader();

  return (
    <>
      {isLoading && <Loader />}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center w-full max-w-md mx-auto p-4 md:p-6"
      >
        {showLogo && <Logo className="mb-8" />}
        {title && (
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
            {title}
          </h1>
        )}
        {children}
      </motion.div>
    </>
  );
}
