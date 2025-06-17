import React from 'react';
import { useLocale } from 'next-intl';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
} 