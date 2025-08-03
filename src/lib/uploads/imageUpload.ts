// imageUpload.ts
import cloudinary from '@/config/cloudinary';
import { v4 as uuidv4 } from 'uuid';
import { Readable } from 'stream';

export async function uploadImageToCloudinary(file: Blob): Promise<string | null> {
  const buffer = Buffer.from(await file.arrayBuffer());

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: 'ecommerce_uploads',
        public_id: uuidv4(),
        resource_type: 'image',
      },
      (error, result) => {
        if (error || !result) {
          reject(error);
        } else {
          resolve(result.secure_url);
        }
      }
    );

    const readable = Readable.from(buffer);
    readable.pipe(stream);
  });
}
