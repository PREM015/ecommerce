import { NextRequest, NextResponse } from 'next/server';
import { verifyJwt } from '@/utils/jwt';

type Handler = (req: NextRequest, context: { user?: unknown }) => Promise<Response>;

export function adminOnly(handler: Handler) {
  return async (req: NextRequest, context: { user?: unknown }) => {
    try {
      const token = req.cookies.get('token')?.value;

      if (!token) {
        return NextResponse.json({ error: 'Unauthorized: No token' }, { status: 401 });
      }

      const user = verifyJwt(token);
      if (!user || !user.isAdmin) {
        return NextResponse.json({ error: 'Forbidden: Admins only' }, { status: 403 });
      }

      context.user = user;

      return handler(req, context);
    } catch (err) {
      return NextResponse.json(
        { error: 'Authorization failed', details: (err as Error).message },
        { status: 403 }
      );
    }
  };
}
