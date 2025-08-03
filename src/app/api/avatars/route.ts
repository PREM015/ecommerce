import { NextResponse } from 'next/server';
import cloudinary from '@/config/cloudinary';

export async function GET() {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'ecommerce/images/avatars/', // update if needed
      max_results: 500,
    });

    const avatarUrls = result.resources.map((file: CloudinaryResource) => file.secure_url);

    return NextResponse.json({ avatars: avatarUrls });
  } catch (error) {
    console.error('Cloudinary error:', error);
    return NextResponse.json({ error: 'Failed to fetch avatars' }, { status: 500 });
  }
}

// Define a proper type instead of using `any`
interface CloudinaryResource {
  secure_url: string;
}
