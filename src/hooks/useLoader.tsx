import { ReactNode } from 'react';

interface LoaderProps {
  message?: string;
  className?: string;
  spinnerClassName?: string;
  textClassName?: string;
}

export default function useLoader(): (props: LoaderProps) => ReactNode {
  const Loader = ({
    message = '',
    className = 'fixed top-0 left-0 w-screen h-screen z-[99999] flex items-center justify-center bg-black bg-opacity-0 pointer-events-auto',
    spinnerClassName = 'animate-spin h-24 w-24 text-blue-500',
    textClassName = 'text-2xl text-white'
  }: LoaderProps) => {
    return (
      <div className={className}>
        <div className={`flex flex-col items-center gap-4 ${textClassName}`} style={{ pointerEvents: 'auto' }}>
          <svg className={spinnerClassName} viewBox="0 0 48 48">
            <circle className="opacity-25" cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="6" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M24 4a20 20 0 0 1 20 20h-6a14 14 0 0 0-14-14V4z" />
          </svg>
          {message}
        </div>
      </div>
    );
  };

  return Loader;
}