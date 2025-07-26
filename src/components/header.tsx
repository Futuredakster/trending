"use client";
import React from 'react'
import Menu from './menu';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

const header = () => {
    const [show, setShow] = useState(false);
     const { data: session, status} = useSession();

    const showMenu = (show:boolean) => {
        if(show){
            setShow(false);
        }
       else{ 
        setShow(true)
       }
    }
  return (
    <header>
           <>
  <img
    src="/globe.svg"
    width={100}
    height={100}
    alt="User avatar"
    className="hidden lg:block rounded-full"
  />
  <h1 className="label font-bold block lg:hidden">Trend Tracker</h1>
</>

        <button onClick={()=> showMenu(show)}className='hamburger block lg:hidden'>☰</button>
        {show && <Menu show={show} setShow={setShow} />}
        <h1 className="name hidden lg:block">{session?.user?.name}</h1>
         {session?.user?.image && (
        <img
          src={session.user.image}
          alt="User avatar"
          width={100}
          height={100}
          style={{ borderRadius: "50%" }}
           className="hidden lg:block rounded-full"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/globe.svg";
          }}
        />
      )}           
    </header>
  )
}
// Remember to start redux setup tommorow for search functionality
export default header