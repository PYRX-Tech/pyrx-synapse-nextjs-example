import { NextResponse } from 'next/server';
import { synapse } from '@/lib/synapse';

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  return NextResponse.json(await synapse.contacts.get(params.id));
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  return NextResponse.json(await synapse.contacts.update(params.id, await req.json()));
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  await synapse.contacts.delete(params.id);
  return NextResponse.json({ success: true });
}
