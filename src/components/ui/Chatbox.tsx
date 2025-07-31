'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import Image from 'next/image';

const Chatbox = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi 👋, how can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage, { sender: 'bot', text: '🤖 Thinking...' }]);
    setInput('');

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      const botMessage = { sender: 'bot', text: data.answer };

      // Replace "Thinking..." with actual answer
      setMessages((prev) => [...prev.slice(0, -1), botMessage]);
    } catch (err) {
      console.error(err); // ✅ Fix: log the error to avoid ESLint warning
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { sender: 'bot', text: '❌ Something went wrong. Try again later.' },
      ]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white p-4 rounded-full shadow-lg transition-all duration-300"
          aria-label="Open Chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      ) : (
        <div className="w-[360px] h-[500px] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col animate-slide-up overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <div className="flex items-center gap-2">
              <Image
                src="/images/ui/avatar-placeholder.png"
                alt="BharatBot"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm md:text-base font-semibold">BharatBot</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="hover:text-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 px-4 py-3 overflow-y-auto bg-gray-50 space-y-3 text-sm scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`px-4 py-2 rounded-xl max-w-[80%] shadow ${
                  msg.sender === 'user'
                    ? 'ml-auto bg-indigo-600 text-white'
                    : 'mr-auto bg-white text-gray-800 border border-gray-200'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 px-3 py-2 border-t bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 text-sm px-3 py-2 rounded-full border bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
