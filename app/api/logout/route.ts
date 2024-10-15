import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.json({ message: 'Logged out successfully' });
  response.cookies.set('accessToken', '', {
    path: '/',
    httpOnly: true,
    maxAge: 0,
  });
  return response;
}
