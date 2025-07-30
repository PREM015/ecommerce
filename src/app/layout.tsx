import React from 'react';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BhaaratCart',
  description: 'Awesome ecommerce app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/bhaaratcart-logo.ico" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
