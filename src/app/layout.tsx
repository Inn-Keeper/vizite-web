import React from 'react';
import { useLocale } from 'next-intl';
import ThemeScript from './ThemeScript';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  return (
    <html lang={locale}>
      <head>
        <ThemeScript />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
} 