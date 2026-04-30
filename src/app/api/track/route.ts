import { NextResponse } from 'next/server';
import { synapse } from '@/lib/synapse';

export async function POST(req: Request) {
  const { userId, event, attributes } = await req.json();
  const r = await synapse.track({ externalId: userId, eventName: event, attributes });
  return NextResponse.json(r);
}
