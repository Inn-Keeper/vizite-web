import LoginForm from './LoginForm';

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-[#1F2937]">
      <div className="w-full max-w-md p-4 sm:p-8">
        <LoginForm />
      </div>
    </main>
  );
} 