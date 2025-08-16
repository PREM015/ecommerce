'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 relative">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Create Your Account
        </h2>

        {/* Avatar Preview */}
        <div className="flex justify-center mb-6">
          <div className="relative w-24 h-24 rounded-full border-4 border-blue-500 shadow-md">
            {formData.avatar ? (
              <Image
                src={formData.avatar}
                alt="Selected Avatar"
                fill
                className="object-cover rounded-full"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-sm text-gray-400">
                Avatar
              </div>
            )}
          </div>
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

          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">Choose Avatar</p>
            <div className="max-h-48 overflow-y-auto border rounded-lg p-3 bg-gray-50 space-y-4">
              {avatars.map((category) => (
                <div key={category.title}>
                  <p className="text-xs font-semibold text-gray-600 mb-1">{category.title}</p>
                  <div className="flex flex-wrap gap-3">
                    {category.avatars.map((avatar) => (
                      <div
                        key={avatar.url}
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, avatar: avatar.url }))
                        }
                        className={`relative w-12 h-12 rounded-full overflow-hidden border-2 cursor-pointer transition-all duration-200 ${
                          formData.avatar === avatar.url
                            ? 'border-blue-600 ring-2 ring-blue-300'
                            : 'border-transparent'
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
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-xl hover:bg-blue-700 transition-all"
          >
            {loading ? 'Creating Account...' : 'Register'}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{' '}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => router.push('/login')}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
