'use client';
import React, { useEffect, useRef } from 'react';
// Next
import Image from 'next/image';
// Components
import { InputGroup } from '@/_components/molecules/InputGroup';
import { SelectGroup } from '@/_components/molecules/SelectGroup';

// Images
import Logo from '@/_assets/images/logo-white.png';
import { Button } from '../atoms/Button';

//

export const Register = ({ open, close }) => {
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        close();
      }
    };

    if (open) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [open, close]);
  //
  return (
    <section className={`register ${open ? `flex fixed` : ` hidden`}`}>
      <Image src={Logo} width="" height="" alt="" />
      <form ref={formRef} className="register-form">
        {/* <svg onClick={() => close()}>
          <use href={`/images/sprite.svg#icon-close`} />
        </svg> */}
        <div className="form-group">
          <InputGroup type="text" label="Training Amount" placeholder={`🇳🇬 ${`₦`}50,500`} disabled />
          <InputGroup label="Training Date" placeholder="12 December 2023" disabled />
        </div>
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

        <Button>Proceed to Payment</Button>
      </form>

      <div className>
        <p>
          If you have any questions, contact <span>academy@padomzfx.com</span>
        </p>
      </div>
    </section>
  );
};
