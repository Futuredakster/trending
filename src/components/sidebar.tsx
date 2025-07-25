"use client"
import React from 'react'
import { login } from '@/lib/auth';
import { logout } from '@/lib/auth';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const sidebar = () => {
      const { data: session, status} = useSession();

      const handleLogout = async () => {
        await logout();
       window.location.reload()
      };
  return (
    <div className='sidebar hidden lg:block'>
     <h1 className='text-white tit text-center'>Trend Tracker</h1>
     <h1 className='text-white'> Easy Access</h1>
     <nav className='sidelist'>
        <Link href="/" className='text-white bot'>🏡 Home</Link>
        <Link href="/hackernews" className='text-white bot'>📰 Hacker News</Link>
       <Link href="/reddit" className='text-white bot'>👽 Reddit</Link>
        {status === "loading" ? (
                    <p>Loading...</p>
                  ) : session ? (
                    <button className='bot bt text-white' onClick={() => { handleLogout(); }}>🚪Logout</button>
                  ) : (
                    <button className='bot bt text-white' onClick={() => { login(); }}>🚪Login</button>
                  )}
     </nav>
    </div>
  )
}

export default sidebar