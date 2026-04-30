import { NextResponse } from 'next/server';
import { synapse } from '@/lib/synapse';

export async function POST(req: Request, { params }: { params: { slug: string } }) {
  const { attributes } = await req.json();
  return NextResponse.json(await synapse.templates.preview(params.slug, { attributes }));
}
