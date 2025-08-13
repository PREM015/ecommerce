import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  try {
    const { identifier, password, mode } = await req.json();

    if (mode !== 'login') {
      return NextResponse.json({ error: 'Invalid mode' }, { status: 400 });
    }

    if (!identifier || !password) {
      return NextResponse.json({ error: 'Missing credentials' }, { status: 400 });
    }

    // Try to find user by email or phone
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

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, phone: user.phone, isAdmin: user.isAdmin },
      process.env.JWT_SECRET as string,
      { expiresIn: '7d' }
    );

    return NextResponse.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        avatar: user.avatar,
        isAdmin: user.isAdmin
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
