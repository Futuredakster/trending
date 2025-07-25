"use client";
import Link from 'next/link';
import React from 'react';
import { login } from '@/lib/auth';
import { logout } from '@/lib/auth';
import { useSession } from 'next-auth/react';

interface MenuProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ show, setShow }) => {
  const { data: session, status} = useSession();
  

const handleLogout = async () => {
  await logout();
 window.location.reload()
};

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          show ? "opacity-25 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShow(false)}
        style={{ zIndex: 40 }}
      />

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-[30%] p-6 shadow-lg transform transition-transform duration-300 ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mb-4">
          <button
            className="text-xl font-bold border border-black px-2 py-1"
            onClick={() => setShow(false)}
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-4">
            {(session) &&(
            <div>
                  {session?.user?.image && (
            <img
                src={session.user.image}
                alt="User avatar"
                width={100}
                height={100}
                style={{ borderRadius: "50%" }}
                onError={(e) => {
                (e.target as HTMLImageElement).src = "/globe.svg"; // optional fallback image
                }}
            />
            )}
      <p className="border-b-2">{session?.user?.name}</p>
    </div>
      )}
          <Link href="/" onClick={() => setShow(false)}>Home</Link>
          <Link href="/hackernews" onClick={() => setShow(false)}>Hacker News</Link>
          <Link href="/reddit" onClick={() => setShow(false)}>Reddit</Link>

          {status === "loading" ? (
            <p>Loading...</p>
          ) : session ? (
            <button className='bt' onClick={() => { setShow(false); handleLogout(); }}>Logout</button>
          ) : (
            <button className='bt' onClick={() => { setShow(false); login(); }}>Login</button>
          )}
        </nav>
      </div>
    </>
  );
};

export default Menu;
