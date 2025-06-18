import React from 'react';
import { useFormContext, Controller, FieldValues, Path } from 'react-hook-form';
import Input from './Input';
import { motion } from 'framer-motion';

interface FormFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
  showPassword?: boolean;
}

export default function FormField<T extends FieldValues>({
  name,
  label,
  type = 'text',
  placeholder,
  autoComplete,
  className,
  showPassword
}: FormFieldProps<T>) {
  const { control, formState } = useFormContext<T>();
  const { errors } = formState;
  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className={className}>
          <Input
            label={label}
            type={showPassword !== undefined ? (showPassword ? 'text' : 'password') : type}
            value={field.value as string}
            onChange={field.onChange}
            placeholder={placeholder}
            error={errorMessage}
            name={field.name}
            autoComplete={autoComplete}
            onBlur={field.onBlur}
          />
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {errorMessage}
            </motion.div>
          )}
        </div>
      )}
    />
  );
}
