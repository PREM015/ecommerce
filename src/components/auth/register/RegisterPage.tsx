// D:\code\projects\ecommerce\src\components\auth\register\RegisterPage.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
    avatar: "",
  });

  const [avatars, setAvatars] = useState<
    { title: string; avatars: { name: string; url: string }[] }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const res = await fetch("/api/avatars");
        const data = await res.json();
        setAvatars(data.avatars || []);
      } catch (error) {
        console.error("Failed to load avatars", error);
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
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/login");
      } else {
        const err = await res.json();
        alert(err.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("An error occurred during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-pink-500 to-orange-400 p-6 relative overflow-hidden">
      {/* Background floating blobs */}
      <motion.div
        className="absolute -top-24 -left-24 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-lg bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-10 relative"
      >
        <h2 className="text-4xl font-extrabold text-center text-white drop-shadow-lg mb-6">
          Create Your Account 
        </h2>

        {/* Avatar Preview */}
        <div className="flex justify-center mb-6">
          <motion.button
            type="button"
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAvatarModal(true)}
            className="relative w-28 h-28 rounded-full border-4 border-white/70 shadow-xl overflow-hidden"
          >
            {formData.avatar ? (
              <Image
                src={formData.avatar}
                alt="Selected Avatar"
                fill
                className="object-cover rounded-full"
              />
            ) : (
              <div className="w-full h-full bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white font-semibold">
                +
              </div>
            )}
          </motion.button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { name: "name", type: "text", label: "Full Name" },
            { name: "emailOrPhone", type: "text", label: "Email or Phone" },
            { name: "password", type: "password", label: "Password" },
          ].map((field) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                required
                className="peer w-full px-4 py-3 bg-white/20 text-white placeholder-transparent border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 backdrop-blur-md"
                placeholder={field.label}
              />
              <label
                htmlFor={field.name}
                className="absolute left-4 top-3 text-white/70 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-300 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-pink-200"
              >
                {field.label}
              </label>
            </motion.div>
          ))}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 font-semibold rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg hover:shadow-2xl transition-all"
          >
            {loading ? "Creating Account..." : "Register"}
          </motion.button>
        </form>

        <p className="text-sm text-center text-white/80 mt-6">
          Already have an account?{" "}
          <span
            className="text-pink-200 font-semibold hover:underline cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Login
          </span>
        </p>
      </motion.div>

      {/* Avatar Selection Modal */}
      <AnimatePresence>
        {showAvatarModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto"
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
                        <motion.div
                          key={avatar.url}
                          whileHover={{ scale: 1.15, rotate: 3 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              avatar: avatar.url,
                            }));
                            setShowAvatarModal(false);
                          }}
                          className={`relative w-16 h-16 rounded-full overflow-hidden border-2 cursor-pointer transition-all ${
                            formData.avatar === avatar.url
                              ? "border-pink-500 ring-2 ring-pink-300"
                              : "border-gray-200"
                          }`}
                        >
                          <Image
                            src={avatar.url}
                            alt={avatar.name}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
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
