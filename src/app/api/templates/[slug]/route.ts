import { NextResponse } from 'next/server';
import { synapse } from '@/lib/synapse';

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  return NextResponse.json(await synapse.templates.get(params.slug));
}

export async function PUT(req: Request, { params }: { params: { slug: string } }) {
  return NextResponse.json(await synapse.templates.update(params.slug, await req.json()));
}

export async function DELETE(_req: Request, { params }: { params: { slug: string } }) {
  await synapse.templates.delete(params.slug);
  return NextResponse.json({ success: true });
}
