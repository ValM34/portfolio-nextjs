"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="border-b border-slate-700">
        <div className="hidden md:flex justify-evenly bg-gradient-to-r from-slate-950 to-slate-900 text-slate-300">
          <Link className="hover:scale-110 transition-transform text-center text-2xl font-medium p-4" href="/">Accueil</Link>
          <Link className="hover:scale-110 transition-transform text-center text-2xl font-medium p-4" href="/#projects_list">Mes projets</Link>
          <Link className="hover:scale-110 transition-transform text-center text-2xl font-medium p-4" href="/#contact">Contact</Link>
        </div>
        <div className="block md:hidden h-16 bg-gradient-to-r from-slate-950 to-slate-900 relative">
          <div onClick={() => setIsOpen(!isOpen)} className="absolute right-2 top-2 h-8 flex flex-col justify-between z-10">
            <div className={`${isOpen ? "rotate-[225deg] translate-y-[14px]" : ""} bg-slate-300 inline-block h-1 w-8 transition-transform duration-200`}></div>
            <div className={`${isOpen ? "duration-1000 rotate-180 scale-0" : ""} bg-slate-300 inline-block h-1 w-8 transition-transform duration-200`}></div>
            <div className={`${isOpen ? "rotate-[315deg] -translate-y-[14px]" : ""} bg-slate-300 inline-block h-1 w-8 transition-transform duration-200`}></div>  
          </div>
        </div>
        <div className={`${isOpen ? "flex" : "hidden"} absolute top-0 w-full flex-col bg-gradient-to-r from-slate-950 to-slate-900 text-slate-300 border-b border-slate-700`}>
          <Link className="hover:scale-110 transition-transform text-center text-xl font-medium p-2" href="/">Accueil</Link>
          <Link className="hover:scale-110 transition-transform text-center text-xl font-medium p-2" href="/#projects_list">Mes projets</Link>
          <Link className="hover:scale-110 transition-transform text-center text-xl font-medium p-2" href="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}
