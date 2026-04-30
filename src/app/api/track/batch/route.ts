import { NextResponse } from 'next/server';
import { synapse } from '@/lib/synapse';

export async function POST(req: Request) {
  const { events } = await req.json();
  const r = await synapse.trackBatch({ events });
  return NextResponse.json(r);
}
