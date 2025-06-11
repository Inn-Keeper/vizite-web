import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function BackButton({ url }: { url: string }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(url)}
      className="absolute left-6 top-6 text-gray-400 hover:text-purple-400 transition"
      aria-label="Voltar"
    >
      <ArrowLeftIcon className="w-6 h-6" />
    </button>
  );
}