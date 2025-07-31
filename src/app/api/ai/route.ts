import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const apiKey = process.env.GOOGLE_GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ answer: 'Missing API key' }, { status: 500 });
  }

  const response = await fetch(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + apiKey,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    }
  );

  const data = await response.json();
  const answer =
    data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    '⚠️ Gemini did not return a response.';

  return NextResponse.json({ answer });
}
