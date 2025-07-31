'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import React from 'react';

const Newsletter = () => {
  return (
    <section
      className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-black overflow-hidden"
      style={{
        backgroundImage: "url('/images/ui/texture-bg-dark.png')",
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg border border-slate-800 shadow-xl rounded-2xl p-10 sm:p-12"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-indigo-600/90 text-white p-3 rounded-full shadow-md">
              <Mail size={28} />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow">
            Stay Updated with <span className="text-indigo-400">BharatCart</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mb-8">
            Join our newsletter to get early access to special deals, seasonal sales, and top trends.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('This is a placeholder. Connect this form to your backend or email API.');
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:w-80 px-4 py-3 rounded-lg bg-slate-800/80 text-white border border-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white font-semibold shadow"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Decorative Blur Element */}
      <div className="absolute -top-20 -left-10 w-60 h-60 bg-indigo-600 opacity-20 rounded-full filter blur-3xl" />
    </section>
  );
};

export default Newsletter;
