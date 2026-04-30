import { NextResponse } from 'next/server';
import { synapse } from '@/lib/synapse';

export async function POST(req: Request) {
  const { templateSlug, to, attributes } = await req.json();
  const r = await synapse.send({ templateSlug, to, attributes });
  return NextResponse.json(r);
}
