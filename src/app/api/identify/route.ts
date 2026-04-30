import { NextResponse } from 'next/server';
import { synapse } from '@/lib/synapse';

export async function POST(req: Request) {
  const { userId, email, properties, tags } = await req.json();
  const r = await synapse.identify({ externalId: userId, email, properties, tags });
  return NextResponse.json(r);
}
