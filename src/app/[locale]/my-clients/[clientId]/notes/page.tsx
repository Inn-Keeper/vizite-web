"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import BackButton from "@/components/BackButton";
import { useParams } from "next/navigation";
import HeaderTitle from "@/components/Header";
import Button from "@/components/Button";
import { useState } from "react";

// Mock notes data (replace with API call as needed)
const mockNotes = [
  {
    id: 1,
    date: "2024-06-01",
    description: "Primeira nota do cliente.",
    attachment: null,
  },
  {
    id: 2,
    date: "2024-06-10",
    description: "Segunda nota com anexo.",
    attachment: "exame.pdf",
  },
];

export default function NotesListPage() {
  const { clientId } = useParams();
  const t = useTranslations();
  const router = useRouter();
  const [notes] = useState(mockNotes);

  return (
    <div className="min-h-screen flex justify-center px-4 py-8">
      <div className="w-full min-h-[60vh] bg-gray-800/90 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-6 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <BackButton url={`/${t('routes.my-clients')}/${clientId}`} />
        <HeaderTitle title={t('clients.showAllNotes', { defaultValue: 'Ver Todas as Notas' })} className="text-center" />
        <div className="w-full flex flex-col gap-4">
          {notes.length === 0 ? (
            <div className="text-center text-gray-300 text-lg py-8">{t('clients.noNotes', { defaultValue: 'Nenhuma nota encontrada.' })}</div>
          ) : (
            notes.map(note => (
              <div key={note.id} className="bg-gray-900/70 rounded-xl p-4 flex flex-col gap-2 shadow">
                <div className="flex flex-row justify-between items-center">
                  <span className="text-purple-300 font-semibold">{note.date}</span>
                  {note.attachment && (
                    <a href="#" className="text-blue-400 underline text-sm" download>{note.attachment}</a>
                  )}
                </div>
                <div className="text-gray-200 text-base">{note.description}</div>
              </div>
            ))
          )}
        </div>
        <Button
          className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold text-lg shadow-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
          onClick={() => router.push(`/${t('routes.my-clients')}/${clientId}/add-notes`)}
        >
          {t('clients.addNote', { defaultValue: 'Adicionar Nota' })}
        </Button>
      </div>
    </div>
  );
} 