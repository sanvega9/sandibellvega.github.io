"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    title:"Home",
    path:"/",

  },
  {
  title:"About",
  path:"/about",
  },
  {
      title:"Portfolio",
      path: "/portfolio",   
  }
];


export const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
  <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40">        
    <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
            <Link href={"/"} className='text-2xl md:text-5xl text-amber-600 font-semibold'>
            S.V
            </Link>
            <div className="mobile-menu block md:hidden">
                {navbarOpen ? ( 
                  <button onClick={()=> setNavbarOpen(false)} className="flex item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                        <XMarkIcon className="h-5 w-5"/>
                  </button> 
                ):( 
                    <button onClick={()=>setNavbarOpen(true)} className="flex item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                        <Bars4Icon className="h-5 w-5"/>
              </button> 
                )
            }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar"> 
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                { navLinks.map((link, index) =>(
                        <li key={index}>
                            <NavLink href={link.path} title={link.title}   className={pathname === link.path ? "text-amber-600" : ""}/> 
                        </li>
                    ))
                }
                    
            </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks}/> :null}
        
    </nav>
  );
};
export default Navbar;

