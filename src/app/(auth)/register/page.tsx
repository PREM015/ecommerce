'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';
import Image from 'next/image';
import { AvatarCategory, AvatarImage } from '@/types/avatar';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    avatar: '',
  });

  const [avatarData, setAvatarData] = useState<AvatarCategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const res = await axios.get<{ categories: AvatarCategory[] }>('/api/avatars');
        setAvatarData(res.data.categories);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch avatar images.');
      }
    };
    fetchAvatars();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarSelect = (url: string) => {
    setFormData((prev) => ({ ...prev, avatar: url }));
    setShowModal(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      await axios.post('/api/auth/register', formData);
      router.push('/login');
    } catch (err) {
      const axiosError = err as AxiosError<{ message?: string }>;
      setError(axiosError.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-3xl p-10 relative">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8 tracking-tight">
          Create Your Account
        </h1>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-3 rounded mb-4 text-center text-sm font-medium shadow">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          {/* Name */}
          <div className="relative">
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              type="text"
              required
              className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 placeholder-transparent focus:outline-none focus:border-blue-500"
              placeholder="Full Name"
            />
            <label
              htmlFor="name"
              className="absolute left-0 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
            >
              Full Name
            </label>
          </div>

          {/* Email & Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                required
                placeholder="Email"
                className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 placeholder-transparent focus:outline-none focus:border-blue-500"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Email
              </label>
            </div>
            <div className="relative">
              <input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                type="tel"
                placeholder="Phone (optional)"
                className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 placeholder-transparent focus:outline-none focus:border-blue-500"
              />
              <label
                htmlFor="phone"
                className="absolute left-0 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Phone (optional)
              </label>
            </div>
          </div>

          {/* Password & Confirm */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                type="password"
                required
                placeholder="Password"
                className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 placeholder-transparent focus:outline-none focus:border-blue-500"
              />
              <label
                htmlFor="password"
                className="absolute left-0 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Password
              </label>
            </div>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                type="password"
                required
                placeholder="Confirm Password"
                className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 placeholder-transparent focus:outline-none focus:border-blue-500"
              />
              <label
                htmlFor="confirmPassword"
                className="absolute left-0 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
              >
                Confirm Password
              </label>
            </div>
          </div>

          {/* Avatar */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Avatar</label>
            {formData.avatar && (
              <Image
                src={formData.avatar}
                alt="Selected Avatar"
                width={64}
                height={64}
                className="rounded-full border-2 mb-2 shadow"
              />
            )}
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="text-blue-600 hover:text-blue-800 font-medium text-sm underline"
            >
              {formData.avatar ? 'Change Avatar' : 'Choose Avatar'}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition duration-200 font-semibold shadow-lg active:scale-95"
          >
            {loading ? 'Creating Account...' : 'Register'}
          </button>

          <p className="text-center text-sm text-gray-500 mt-2">
            Already registered?{' '}
            <a href="/login" className="text-blue-600 hover:underline">
              Login here
            </a>
          </p>
        </form>
      </div>

      {/* Avatar Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-5xl h-[80vh] overflow-y-auto relative animate-fadeIn">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center">Select Your Avatar</h2>
            <div className="space-y-8">
              {avatarData.map((category) => (
                <div key={category.title}>
                  <h3 className="text-lg font-semibold text-gray-600 mb-3">{category.title}</h3>
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
                    {category.avatars.map((avatar: AvatarImage) => (
                      <div
                        key={avatar.url}
                        onClick={() => handleAvatarSelect(avatar.url)}
                        className={`cursor-pointer p-1 rounded-full border-2 transition-all duration-300 transform hover:scale-105 ${
                          formData.avatar === avatar.url
                            ? 'border-blue-500 ring-2 ring-blue-300'
                            : 'border-transparent hover:border-gray-300'
                        }`}
                      >
                        <Image
                          src={avatar.url}
                          alt={avatar.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
