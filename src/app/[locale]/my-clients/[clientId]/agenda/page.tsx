"use client";

import { ArrowLeftIcon, CalendarDaysIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {Calendar} from "@heroui/calendar";
// import { extendVariants } from "@heroui/system";

const mockAgenda = [
  { id: 1, title: "Consulta de Retorno", date: "2024-06-10", time: "14:00" },
  { id: 2, title: "Sessão de Avaliação", date: "2024-06-15", time: "09:30" },
  { id: 3, title: "Reunião Familiar", date: "2024-06-20", time: "16:00" },
];

// const CustomCalendar = extendVariants(Calendar, {
//   defaultVariants: {
//     size: "xl",
//     color: "primary",
//     radius: "2xl",
//     classNames: {
//       base: "h-96",
//     },
//   },
//   // variants: {
//   //   size: {
//   //     md: {
//   //       base: "w-full",
//   //     },
//   //   },
//   // },
// });

export default function AgendaPage() {
  const router = useRouter();
  const [agenda] = useState(mockAgenda);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 w-full">
      <div className="w-full h-[60vh] max-w-md bg-gray-800/90 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-6 relative  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute left-6 top-6 text-gray-400 hover:text-purple-400 transition"
          aria-label="Voltar"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <div className="flex flex-col items-center gap-2 mb-4">
          <CalendarDaysIcon className="w-10 h-10 text-purple-500" />
          <h2 className="text-3xl font-extrabold text-purple-700 dark:text-purple-300 text-center">
            Agenda
          </h2>
          
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <Calendar aria-label="Date (No Selection)"/>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {agenda.length === 0 ? (
            <div className="text-center text-gray-400 dark:text-gray-500 py-8">
              Nenhum compromisso agendado.
            </div>
          ) : (
            agenda.map(item => (
              <div key={item.id} className="bg-purple-900/30 rounded-lg p-4 text-white shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <div className="font-bold text-lg text-purple-200">{item.title}</div>
                  <div className="text-sm text-gray-200">{item.date} às {item.time}</div>
                </div>
                <button className="text-xs text-purple-300 hover:text-purple-100 transition underline">Ver Detalhes</button>
              </div>
            ))
          )}
        </div>
        <button
          onClick={() => alert('Adicionar novo compromisso')}
          className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold text-lg shadow-lg flex items-center justify-center gap-2 hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
        >
          <PlusIcon className="w-6 h-6" />
          Adicionar Compromisso
        </button>
      </div>
    </div>
  );
} 