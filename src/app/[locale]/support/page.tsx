"use client";

import GradientContainer from '@/components/GradientContainer';
import { EnvelopeIcon, ChatBubbleLeftRightIcon, QuestionMarkCircleIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useState } from 'react';

const FAQS = [
  {
    question: 'Como entro em contato com o suporte?',
    answer: 'Você pode nos contatar por email, WhatsApp ou usando as opções acima.'
  },
  {
    question: 'Qual o horário de atendimento?',
    answer: 'Nosso suporte está disponível de segunda a sexta, das 9h às 18h.'
  },
  {
    question: 'Onde encontro mais informações?',
    answer: 'Consulte nossa central de ajuda ou envie uma mensagem para nossa equipe.'
  }
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('support');

  return (
    <div className="flex-1 px-4 w-full mt-6 min-h-96">
      <div className="flex items-center gap-2 mb-2">
        <QuestionMarkCircleIcon className="w-6 h-6 text-yellow-400" />
        <span className="text-lg font-bold text-white">{t('faq.title', { defaultValue: 'Perguntas Frequentes' })}</span>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {FAQS.map((faq, idx) => (
          <div
            key={idx}
            className="bg-purple-900/30 rounded-lg transition-all duration-300 cursor-pointer 
            hover:text-purple-200 hover:bg-purple-900/50 hover:shadow-lg
            hover:scale-105
            hover:border-purple-200"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left text-white font-medium focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
            >
              <span>{faq.question}</span>
              <ChevronDownIcon className={`w-5 h-5 ml-2 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === idx && (
              <div className="px-4 pt-4 pb-4 text-purple-200 text-lg rounded-lg flex flex-row items-center gap-2">
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-gray-200" />
                <span className="text-gray-200">{faq.answer}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SupportPage() {
  const t = useTranslations('support');

  return (
    <GradientContainer>
      <h1 className="text-3xl mt-12 font-extrabold text-white text-center mb-2">{t('title', { defaultValue: 'Suporte' })}</h1>
      <p className="text-purple-200 text-center mb-4">{t('subtitle', { defaultValue: 'Precisa de ajuda? Fale conosco!' })}</p>

      <div className="w-full px-4 flex flex-col gap-4">
        <a
          href="mailto:support@vizite.com"
          className="flex items-center gap-3 bg-purple-900/30 rounded-lg p-4 text-white shadow transition-all duration-300 cursor-pointer hover:text-purple-200 hover:bg-purple-900/50 hover:shadow-lg hover:scale-105"
        >
          <EnvelopeIcon className="w-6 h-6 text-purple-400" />
          <span>{t('contact.email', { defaultValue: 'Enviar Email' })}</span>
        </a>
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-purple-900/30 rounded-lg p-4 text-white shadow transition-all duration-300 cursor-pointer hover:text-purple-200 hover:bg-purple-900/50 hover:shadow-lg hover:scale-105"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6 text-green-400" />
          <span>{t('contact.whatsapp', { defaultValue: 'Falar no WhatsApp' })}</span>
        </a>
        <Link
          href="/faq"
          className="flex items-center gap-3 bg-purple-900/30 rounded-lg p-4 text-white shadow transition-all duration-300 cursor-pointer hover:text-purple-200 hover:bg-purple-900/50 hover:shadow-lg hover:scale-105"
        >
          <QuestionMarkCircleIcon className="w-6 h-6 text-yellow-400" />
          <span>{t('faq.title', { defaultValue: 'Perguntas Frequentes' })}</span>
        </Link>
      </div>
      <FaqSection />
    </GradientContainer>
  );
}