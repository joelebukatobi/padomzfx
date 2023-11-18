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
  return (
    <nav className="container navbar">
      <a href="/">
        <Image width="215" height="52" src={Logo} alt="Logo" />
      </a>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/company">Company</Link>
        </li>
        <li>
          <Link href="/training">Training</Link>
        </li>
        <li>
          <Link href="/get-in-touch">Get In Touch</Link>
        </li>
      </ul>
    </nav>
  );
};
