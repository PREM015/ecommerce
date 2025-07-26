// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-6 sm:p-12 flex flex-col items-center justify-between font-sans bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900">
      {/* Hero Section */}
      <main className="flex flex-col items-center gap-8 text-center">
        <Image
          src="/next.svg"
          alt="eCommerce Logo"
          width={160}
          height={40}
          className="dark:invert"
        />
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-800 dark:text-white">
          Discover the Future of Online Shopping
        </h1>
        <p className="max-w-xl text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          Browse top categories, get the best deals, and enjoy a seamless
          checkout experience.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <Link
            href="/(pages)/home"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Shop Now
          </Link>
          <Link
            href="/(pages)/product"
            className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </main>

      {/* Footer Links */}
      <footer className="mt-16 text-sm text-gray-500 dark:text-gray-400 flex flex-wrap justify-center gap-6">
        <a
          href="https://github.com/PREM015/ecommerce"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Next.js Docs
        </a>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Hosted on Vercel
        </a>
      </footer>
    </div>
  );
}
