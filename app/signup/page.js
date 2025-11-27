// 'use client';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// export default function SignupPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     const user = localStorage.getItem('user');
//     if (user) router.push('/home');
//   }, [router]);

//   const handleSignup = () => {
//     // Fake signup (store user locally)
//     localStorage.setItem('user', JSON.stringify({ email }));
//     router.push('/home');
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold">Sign Up</h1>
//       <input
//         type="email"
//         placeholder="Email"
//         className="border p-2 block my-2"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         className="border p-2 block my-2"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleSignup} className="bg-green-500 text-white px-4 py-2 mt-2">
//         Sign Up
//       </button>
//       <p className="mt-2">
//         Already have an account? <a href="/login" className="text-blue-600">Login</a>
//       </p>
//     </div>
//   );
// }
