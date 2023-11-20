'use client';
//
import React, { useRef, useEffect } from 'react';
// Next
import Image from 'next/image';
// Components
import { Button } from '@/_components/atoms/Button';
import { Input } from '@/_components/atoms/Input';
import { InputGroup } from '@/_components/molecules/InputGroup';

// Images
import Logo from '@/_assets/images/logo-white.png';

//

export const Register = ({ open, close }) => {
  return (
    <section className={`register ${open ? `flex fixed` : ` hidden`}`}>
      <Image src={Logo} width="" height="" alt="" />
      <form className="register-form">
        <svg onClick={() => close()}>
          <use href={`/images/sprite.svg#icon-close`} />
        </svg>
        <div className="form-group">
          <InputGroup type="text" label="First Name" placeholder="Input first name" />
          <InputGroup label="First Name" placeholder="Input last name" />
        </div>

        <InputGroup type="email" label="Email" placeholder="name@mail.com" />

        <InputGroup type="phone" label="Mobile Number" placeholder="Input phone number" />
        <InputGroup type="" label="Expertise Level" placeholder="Select your expertise level" />
        <Button>Proceed to Payment</Button>
      </form>

      <p>
        If you have any questions, contact <span>academy@padomzfx.com</span>
      </p>
    </section>
  );
};
