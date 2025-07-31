import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer chatboxkey`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'openchat/openchat-3.5', // or other model
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt }
      ]
    })
  });

  const data = await response.json();
  const answer = data.choices?.[0]?.message?.content || "I'm not sure how to respond.";

  return NextResponse.json({ answer });
}
