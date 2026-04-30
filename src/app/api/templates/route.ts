import { NextResponse } from 'next/server';
import { synapse } from '@/lib/synapse';

export async function GET() {
  return NextResponse.json(await synapse.templates.list());
}

export async function POST(req: Request) {
  return NextResponse.json(await synapse.templates.create(await req.json()));
}
