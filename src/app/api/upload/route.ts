// route.ts
import { NextRequest, NextResponse } from 'next/server';
import { uploadImageToCloudinary } from '@/lib/uploads/imageUpload';
import { validateFile } from '@/lib/uploads/validateFile';

export async function POST(req: NextRequest) {
  const { error } = validateFile(req);
  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('image') as Blob | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const imageUrl = await uploadImageToCloudinary(file);

    return NextResponse.json({ url: imageUrl }, { status: 200 });
  } catch (err: unknown) {
    console.error('Upload Error:', err);
    return NextResponse.json({ error: 'Image upload failed' }, { status: 500 });
  }
}
