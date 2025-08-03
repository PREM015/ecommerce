// validateFile.ts
import { NextRequest } from 'next/server';

export function validateFile(req: NextRequest): { error?: string } {
  const contentType = req.headers.get('content-type') || '';
  if (!contentType.includes('multipart/form-data')) {
    return { error: 'Invalid content type. Expected multipart/form-data.' };
  }
  return {};
}
