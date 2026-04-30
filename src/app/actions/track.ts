'use server';

import { synapse } from '@/lib/synapse';

export async function trackSignup(formData: FormData) {
  const email = formData.get('email') as string;

  await synapse.track({
    externalId: email,
    eventName: 'user_signed_up',
    attributes: { source: 'nextjs_form' },
  });

  await synapse.identify({
    externalId: email,
    email,
  });
}
