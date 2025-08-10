"use client"; // this is client component

import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/auth/login/page";

export default function LoginPage() {
  const router = useRouter();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // On success, you can redirect or update UI
      router.push("/"); // redirect to homepage after login
    } catch (err) {
      setError("Something went wrong");
      setLoading(false);
      console.error(err);
    }
  }

  return (
    <LoginForm/>
  );
}
