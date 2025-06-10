import RegisterForm from './RegisterForm';

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-[#1F2937]">
      <div className="w-full max-w-md p-4 sm:p-8">
        <RegisterForm />
      </div>
    </main>
  );
} 