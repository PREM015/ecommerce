// src/app/layout.tsx

import './globals.css'
import { Metadata } from 'next';
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
export const metadata: Metadata = {
  title: "BhaaratCart",
  description: "best shooping website ",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children} {/* Yaha pe current page load hota hai */}
        <Footer />
      </body>
    </html>
  )
}
