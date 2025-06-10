import Image from 'next/image';

export default function AuthLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image src="/logo.svg" alt="Logo" width={130} height={175} priority />
    </div>
  );
} 