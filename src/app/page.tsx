import { trackSignup } from './actions/track';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Synapse Next.js Example</h1>
      <form action={trackSignup}>
        <input name="email" type="email" placeholder="Email" required style={{ padding: '0.5rem', marginRight: '0.5rem' }} />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Track Signup</button>
      </form>
    </main>
  );
}
