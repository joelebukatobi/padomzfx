'use client';
//
import React, { useRef, useEffect } from 'react';
// Next
import Image from 'next/image';
// Components
import { InputGroup } from '@/_components/molecules/InputGroup';
import { SelectGroup } from '@/_components/molecules/SelectGroup';

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
        <SelectGroup name="expertise" label="Expertise Level">
          <option value="">Option One</option>
          <option value="">Option One</option>
          <option value="">Option One</option>
        </SelectGroup>
      </form>

      <p>
        If you have any questions, contact <span>academy@padomzfx.com</span>
      </p>
    </section>
  );
};
