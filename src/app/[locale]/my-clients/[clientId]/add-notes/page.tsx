"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function AddNotesPage() {
  const t = useTranslations();
  const router = useRouter();
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement API call to save histórico

    setTimeout(() => {
      setLoading(false);
      router.back();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full h-[60vh] max-w-md bg-gray-800/90 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-6 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <button
          onClick={() => router.back()}
          className="absolute left-6 top-6 text-gray-400 hover:text-purple-400 transition"
          aria-label="Voltar"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <form className="w-full rounded-2xl pt-2 flex flex-col gap-6" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white text-center mb-2">
          {t('clients.addNote')}
        </h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
              Data
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={data}
              onChange={e => setData(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
              Descrição
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[120px] resize-none"
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
              placeholder="Descreva o histórico..."
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold text-lg shadow-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Salvando..." : "Adicionar"}
          </button>
        </form>
        <button
          onClick={() => router.back()}
          className="w-full py-2 mt-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
} 