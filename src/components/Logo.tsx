import Image from 'next/image';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image src="/logo.svg" alt="Logo" width={130} height={175} priority 
      className="hover:scale-105 hover:animate-pulse speed-600 transition-transform duration-300" />
    </div>
  );
} 