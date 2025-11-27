'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      router.push('/login');
    } else {
      setEmail(user.email);
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem('user');
    router.push('/logout');
  };
  const handleAll = () =>{
    router.push('/content')
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl">Welcome {email || 'User'} 👋</h1>
      <button onClick={handleAll}>go to page</button>
      <button onClick={logout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
}
