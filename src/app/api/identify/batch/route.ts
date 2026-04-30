import { NextResponse } from 'next/server';
import { synapse } from '@/lib/synapse';

export async function POST(req: Request) {
  const { contacts } = await req.json();
  const r = await synapse.identifyBatch({ contacts });
  return NextResponse.json(r);
}
