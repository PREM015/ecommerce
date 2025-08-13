"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");

      // Redirect to homepage after successful login
      router.push("/");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto bg-white shadow-lg p-8 rounded-xl border border-gray-200">
      <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
        Welcome Back
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Please log in to continue
      </p>

      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label className="block text-sm text-gray-700 mb-1">Email or Phone</label>
          <input
            type="text"
            placeholder="example@gmail.com or +91xxxxxxxxxx"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-6">
        Don’t have an account?{" "}
        <Link href="/register" className="text-blue-600 hover:underline">
          Create one
        </Link>
      </p>
      <p className="text-center text-sm text-gray-600 mt-6">
        
        <Link href="/forgot-password" className="text-blue-600 hover:underline">
          forget Password
        </Link>
      </p>
    </div>
  );
}
