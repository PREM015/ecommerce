import { NextResponse } from 'next/server';
import {prisma} from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const { token, newPassword } = await req.json();

    if (!token || !newPassword) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    // Find token in DB
    const resetRecord = await prisma.passwordResetToken.findUnique({
      where: { token },
      include: { user: true }
    });

    if (!resetRecord || resetRecord.expiresAt < new Date()) {
      return NextResponse.json({ error: 'Token expired or invalid' }, { status: 400 });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password
    await prisma.user.update({
      where: { id: resetRecord.userId },
      data: { password: hashedPassword }
    });

    // Delete used token
    await prisma.passwordResetToken.delete({ where: { id: resetRecord.id } });

    return NextResponse.json({ message: 'Password updated successfully' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
