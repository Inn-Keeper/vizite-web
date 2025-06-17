'use client';

import { NextIntlClientProvider } from 'next-intl';
import ClientLayoutContent from '@/components/ClientLayoutContent';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, string>;
};

export default function ClientLayout({ children, locale, messages }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} key={locale}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
            <ClientLayoutContent>{children}</ClientLayoutContent>
      </QueryClientProvider>
    </NextIntlClientProvider>
  );
} 