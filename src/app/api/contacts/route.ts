import { NextResponse } from 'next/server';
import { synapse } from '@/lib/synapse';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const r = await synapse.contacts.list({ page: Number(searchParams.get('page')) || 1, limit: Number(searchParams.get('limit')) || 20, tag: searchParams.get('tag') || undefined, search: searchParams.get('search') || undefined });
  return NextResponse.json(r);
}
