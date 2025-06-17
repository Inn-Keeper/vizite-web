import AuthLogo from '../../../../components/Logo';

export default function SplashScreen() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-[#1F2937]">
      <div className="flex flex-col items-center justify-center w-full max-w-xs p-8">
        <AuthLogo className="mb-8" />
        {/* Add any splash animation or tagline here if needed */}
      </div>
    </main>
  );
} 