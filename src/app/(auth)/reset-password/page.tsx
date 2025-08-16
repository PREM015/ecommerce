// src/app/(auth)/reset-password/page.tsx
'use client';

import ResetPasswordForm from '@/components/auth/reset-password/ResetPasswordForm';
import { Suspense } from 'react';


export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ResetPasswordForm />
    </Suspense>
  );
}
