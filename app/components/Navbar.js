'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter(); // ✅ define router

  

  return (
    <div className=' nav w-full flex justify-between p-4 h-15 bg-red-800'>
      <div>
        <h1 className='text-white font-bold text-2xl cursor-pointer' >MyApp</h1>
      </div>
    </div>
  );
};

export default Navbar;
