export default function AuthPage({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-purple dark:bg-[#1F2937]">
      <div className="w-full max-w-md p-4 sm:p-8">
        {children}
      </div>
    </main>
  );
}