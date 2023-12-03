'use client';
//
import React from 'react';
// Next
import Image from 'next/image';
import Link from 'next/link';
// Components
import LogoWhite from '@/_assets/images/logo-white.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top container">
        <div>
          <Image width="" height="" src={LogoWhite} alt="" />
        </div>
        <div>
          <ul>
            <li>
              <h6>Company </h6>
            </li>
            <li>
              <Link href="/about">
                <p>About Us</p>
              </Link>
            </li>
            <li>
              <Link href="/trainings">
                <p>Trainings</p>
              </Link>
            </li>
          </ul>
          <ul>
            <Link href="/">
              <h6>Resources</h6>
            </Link>
            <Link href="/">
              <li>
                <p>Privacy Policy</p>
              </li>
            </Link>
            <Link href="/">
              <li>
                <p>Terms of Service</p>
              </li>
            </Link>
            <Link href="/contact">
              <li>
                <p>FAQs</p>
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h5>+234 (1) 887-0033</h5>
            </li>
            <li>
              <Link href="/">
                <p>Customer Care</p>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <h5>Mon - Fri: 9.00am to 5.00pm</h5>
            </li>
            <li>
              <Link href="/">
                <p>Working Hours</p>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://facebook.com/">
                <svg>
                  <use href={`/images/sprite.svg#icon-facebook`} />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/">
                <svg>
                  <use href={`/images/sprite.svg#icon-instagram`} />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <svg>
                  <use href={`/images/sprite.svg#icon-twitter`} />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://youtube.com/">
                <svg>
                  <use href={`/images/sprite.svg#icon-youtube`} />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">
        <span>Copyright © 2023 &nbsp;</span> Licensed by PadomzFX Academy
      </p>
    </footer>
  );
};
