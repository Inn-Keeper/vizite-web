"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import BackButton from "@/components/BackButton";
import { useParams } from "next/navigation";

import HeaderTitle from "@/components/Header";

import Input from "@/components/Input";
import Button from "@/components/Button";

export default function AddNotesPage() {
  const { clientId } = useParams();
  const t = useTranslations();
  const router = useRouter();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [descricao, setDescricao] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement API call to save histórico, including attachment
    // Example: send { data, descricao, attachment }
    setTimeout(() => {
      setLoading(false);
      router.back();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex justify-center px-4 py-8">
      <div className="w-full h-[60vh] bg-gray-800/90 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-6 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <BackButton url={`/${t('routes.my-clients')}/${clientId}`} />
        <form className="w-full rounded-2xl pt-2 flex flex-col gap-6" onSubmit={handleSubmit}>
          <HeaderTitle title={t('clients.addNote')} className="text-center" />
          <div>
            <Input
              label={t('clients.date')}
              value={data}
              onChange={e => setData(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-white">{t('clients.description')}</label>
            <textarea
              className="w-full min-h-[120px] rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 px-4 py-2 resize-none"
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-white">{t('clients.attachment')}</label>
            <div className="relative flex items-center gap-2">
              <input
                id="attachment-input"
                type="file"
                className="hidden"
                onChange={e => setAttachment(e.target.files ? e.target.files[0] : null)}
              />
              <label htmlFor="attachment-input" className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold cursor-pointer hover:from-purple-700 hover:to-blue-600 transition-all duration-300">
                {t('clients.selectFile')}
              </label>
              <span className="text-gray-200 text-sm truncate max-w-xs">
                {attachment ? attachment.name : t('clients.noFileSelected')}
              </span>
            </div>
          </div>
          <Button
            type="submit"
            className="mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold text-lg shadow-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? t('actions.buttons.saving') : t('actions.buttons.add')}
          </Button>
        </form>
        <button
          onClick={() => router.back()}
          className="w-full py-2 mt-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"
        >
          {t('actions.buttons.cancel')}
        </button>
      </div>
    </div>
  );
} 