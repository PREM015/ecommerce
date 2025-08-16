'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    password: '',
    avatar: '',
  });

  const [avatars, setAvatars] = useState<
    { title: string; avatars: { name: string; url: string }[] }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const res = await fetch('/api/avatars');
        const data = await res.json();
        setAvatars(data.avatars || []);
      } catch (error) {
        console.error('Failed to load avatars', error);
      }
    };

    fetchAvatars();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/login');
      } else {
        const err = await res.json();
        alert(err.message || 'Registration failed.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 p-6">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10 relative">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Create Your Account
        </h2>

        {/* Avatar Preview Button */}
        <div className="flex justify-center mb-6">
          <button
            type="button"
            onClick={() => setShowAvatarModal(true)}
            className="relative w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            {formData.avatar ? (
              <Image
                src={formData.avatar}
                alt="Selected Avatar"
                fill
                className="object-cover rounded-full"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm">
                Choose
              </div>
            )}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="emailOrPhone"
            placeholder="Email or Phone"
            value={formData.emailOrPhone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-xl hover:bg-blue-700 transition-all shadow-md"
          >
            {loading ? 'Creating Account...' : 'Register'}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => router.push('/login')}
          >
            Login
          </span>
        </p>
      </div>

      {/* Avatar Selection Modal */}
      <AnimatePresence>
        {showAvatarModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Select Your Avatar
                </h3>
                <button
                  onClick={() => setShowAvatarModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {avatars.length === 0 && (
                <p className="text-gray-500 text-sm">Loading avatars...</p>
              )}

              <div className="space-y-6">
                {avatars.map((category) => (
                  <div key={category.title}>
                    <p className="text-sm font-medium text-gray-600 mb-2">
                      {category.title}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {category.avatars.map((avatar) => (
                        <div
                          key={avatar.url}
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              avatar: avatar.url,
                            }));
                            setShowAvatarModal(false);
                          }}
                          className={`relative w-16 h-16 rounded-full overflow-hidden border-2 cursor-pointer hover:scale-105 transition-transform ${
                            formData.avatar === avatar.url
                              ? 'border-blue-600 ring-2 ring-blue-300'
                              : 'border-gray-200'
                          }`}
                        >
                          <Image
                            src={avatar.url}
                            alt={avatar.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
