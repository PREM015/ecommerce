// D:\code\projects\ecommerce\src\app\(auth)\forgot-password\page.tsx
"use client";

import ForgotPasswordPage from "@/components/auth/forgot-password/ForgotPasswordPage";
import { Suspense } from "react";

export default function ForgotPassword() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ForgotPasswordPage />
    </Suspense>
  );
}
