// errorHandler.ts
// src/lib/middleware/errorHandler.ts

import { NextResponse } from 'next/server';

export function errorHandler(error: unknown, message = 'Something went wrong') {
  const statusCode = error instanceof Error && error.message.includes('Unauthorized') ? 401 : 500;
  
  return NextResponse.json({
    success: false,
    error: message,
    details: error instanceof Error ? error.message : 'Unknown error'
  }, { status: statusCode });
}
