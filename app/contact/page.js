'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Auto-redirect if already logged in
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) router.push('/home');
  }, [router]);

  const handleLogin = () => {
    // Fake login (replace with API)
    if (email === 'user@example.com' && password === '123456') {
      localStorage.setItem('user', JSON.stringify({ email }));
      router.push('/content');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="p-4 m-50 border-red-950 flex-col text-center justify-center">
      <input
        type="email"
        placeholder="Email"
        className="border p-2 block my-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 block my-2"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 mt-2">
        Login
      </button>
      <p className="mt-2">
        Don’t have an account? <a href="/signup" className="text-blue-600">Sign up</a>
      </p>
    </div>
  );
}
