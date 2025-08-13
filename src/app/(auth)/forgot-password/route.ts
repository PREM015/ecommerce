import { NextResponse } from 'next/server';
import {prisma} from '@/lib/db/index';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const { identifier } = await req.json();

    if (!identifier) {
      return NextResponse.json({ error: 'Email or phone is required' }, { status: 400 });
    }

    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: identifier.toLowerCase() },
          { phone: identifier }
        ]
      }
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Generate token
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 mins

    // Save token
    await prisma.passwordResetToken.create({
      data: {
        token,
        userId: user.id,
        expiresAt
      }
    });

    // TODO: Send token via email or SMS
    console.log(`Password reset link: ${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`);

    return NextResponse.json({ message: 'Password reset link sent' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
