"use client";

import { ArrowLeftIcon, CalendarDaysIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Calendar } from "@heroui/calendar";
import { parseDate, DateValue } from '@internationalized/date';
// import { extendVariants } from "@heroui/system";

const mockAgenda: { id: number; title: string; date: string; time: string }[] = [
  { id: 1, title: "Consulta de Retorno", date: "2024-06-10", time: "14:00" },
  { id: 2, title: "Sessão de Avaliação", date: "2024-06-15", time: "09:30" },
  { id: 3, title: "Reunião Familiar", date: "2024-06-15", time: "16:00" },
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

function getEventDates(agenda: { date: string }[]): string[] {
  return Array.from(new Set(agenda.map(item => item.date)));
}

export default function AgendaPage() {
  const router = useRouter();
  const [agenda, setAgenda] = useState<typeof mockAgenda>(mockAgenda);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', time: '' });

  const eventDates = getEventDates(agenda);
  const eventsForSelectedDate = selectedDate
    ? agenda.filter(item => item.date === selectedDate)
    : [];

  // Calendar expects DateValue (CalendarDate), not JS Date
  const calendarProps = {
    ariaLabel: "Date (No Selection)",
    value: selectedDate ? parseDate(selectedDate) : undefined,
    onChange: (date: DateValue | null) => setSelectedDate(date ? date.toString() : null),
    highlightedDates: eventDates.map(date => parseDate(date)),
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.time) {
      setAgenda([...agenda, { id: agenda.length + 1, ...newEvent }]);
      setShowModal(false);
      setNewEvent({ title: '', date: '', time: '' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col px-2 py-8 w-full">
      <div className="w-full bg-gray-800/90 rounded-3xl shadow-2xl p-4 sm:p-8 flex flex-col md:flex-row gap-8 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute left-4 top-4 text-gray-400 hover:text-purple-400 transition"
          aria-label="Voltar"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        {/* Calendar Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-2 mb-2">
            <CalendarDaysIcon className="w-10 h-10 text-purple-500" />
            <h2 className="text-2xl font-extrabold text-purple-700 dark:text-purple-300 text-center">
              Agenda
            </h2>
          </div>
          <Calendar {...calendarProps} />
        </div>
        {/* Events Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between mb-2">
            <span className="text-lg font-semibold text-purple-200">
              {selectedDate ?
                new Date(selectedDate).toLocaleDateString() :
                "Selecione uma data"}
            </span>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold shadow hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
            >
              <PlusIcon className="w-5 h-5" />
              Novo
            </button>
          </div>
          {selectedDate && eventsForSelectedDate.length === 0 && (
            <div className="flex flex-col items-center justify-center py-8 text-gray-400 dark:text-gray-500">
              <CalendarDaysIcon className="w-8 h-8 mb-2 text-purple-400" />
              Nenhum compromisso para esta data.
            </div>
          )}
          {selectedDate && eventsForSelectedDate.length > 0 && (
            <div className="flex flex-col gap-4">
              {eventsForSelectedDate.map(item => (
                <div key={item.id} className="bg-purple-900/30 rounded-lg p-4 text-white shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <div className="font-bold text-lg text-purple-200">{item.title}</div>
                    <div className="text-sm text-gray-200">{item.date} às {item.time}</div>
                  </div>
                  <button className="text-xs text-purple-300 hover:text-purple-100 transition underline">Ver Detalhes</button>
                </div>
              ))}
            </div>
          )}
          {!selectedDate && (
            <div className="flex flex-col items-center justify-center py-8 text-gray-400 dark:text-gray-500">
              <CalendarDaysIcon className="w-8 h-8 mb-2 text-purple-400" />
              Selecione uma data para ver os compromissos.
            </div>
          )}
        </div>
        {/* Add Event Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-md shadow-xl flex flex-col gap-4">
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">Adicionar Compromisso</h3>
              <input
                type="text"
                placeholder="Título"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={newEvent.title}
                onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
              />
              <input
                type="date"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={newEvent.date}
                onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
              />
              <input
                type="time"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={newEvent.time}
                onChange={e => setNewEvent({ ...newEvent, time: e.target.value })}
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleAddEvent}
                  className="flex-1 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold shadow hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
                >
                  Salvar
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 