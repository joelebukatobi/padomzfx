'use client';
// React
import React from 'react';
import { useState } from 'react';
// Next
import Link from 'next/link';
import Image from 'next/image';
// Components

// Image
import Logo from '@/_assets/images/logo-full.png';
//

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  //
  return (
    <div className="container">
      <nav className="navbar">
        <a href="/">
          <Image width="215" height="52" src={Logo} alt="Logo" />
        </a>
        <div className="navbar-menu lg:hidden">
          <svg onClick={toggle}>
            {/* <use href={`/images/sprite.svg#icon-menu`} /> */}
            <use href={open ? '/images/sprite.svg#icon-close' : '/images/sprite.svg#icon-menu'} />
          </svg>
        </div>
        <ul
          className={
            open
              ? `flex bg-[#ffffff] h-auto absolute top-[9.6rem] left-0 py-[1.6rem] flex-col w-[100%] rounded-[.4rem] z-10`
              : `hidden lg:flex`
          }
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link href="/company">Company</Link>
          </li>
          <li>
            <Link href="/training">Training</Link>
          </li>
          <li>
            <Link href="/contact">Get In Touch</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
