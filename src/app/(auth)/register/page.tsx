"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import Image from "next/image";
import { AvatarCategory, AvatarImage } from "@/types/avatar";

interface RegisterForm {
  name: string;
  email: string;
  phone?: string;
  password: string;
  confirmPassword: string;
  avatar: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterForm>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    avatar: "",
  });

  const [avatarData, setAvatarData] = useState<AvatarCategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const res = await axios.get<{ categories: AvatarCategory[] }>("/api/avatars");
        setAvatarData(res.data.categories);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch avatar images.");
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post("/api/auth/register", formData);
      router.push("/login");
    } catch (err) {
      const axiosError = err as AxiosError<{ message?: string }>;
      setError(axiosError.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Create an Account</h1>

      {error && <p className="text-red-600 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          type="text"
          placeholder="Full Name"
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          type="tel"
          placeholder="Phone (optional)"
          className="w-full p-2 border rounded"
        />
        <input
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          type="password"
          placeholder="Confirm Password"
          required
          className="w-full p-2 border rounded"
        />

        <div>
          <p className="font-medium mb-1">Choose an Avatar</p>
          <div className="space-y-4">
            {avatarData.map((category) => (
              <div key={category.name}>
                <h3 className="font-semibold mb-2 capitalize">{category.name}</h3>
                <div className="grid grid-cols-5 gap-2">
                  {category.images.map((avatar: AvatarImage) => (
                    <div
                      key={avatar.url}
                      className={`border-2 rounded cursor-pointer p-1 ${
                        formData.avatar === avatar.url
                          ? "border-blue-500"
                          : "border-transparent"
                      }`}
                      onClick={() => handleAvatarSelect(avatar.url)}
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

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          {loading ? "Creating..." : "Register"}
        </button>
      </form>
    </div>
  );
}
