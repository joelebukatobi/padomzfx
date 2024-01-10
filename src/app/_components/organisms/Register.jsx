"use client";
import { format } from "date-fns";
import { useEffect, useRef } from "react";
// Next
import Image from "next/image";

import { useRouter } from "next/navigation";
// Components
import { InputGroup } from "@/_components/molecules/InputGroup";
// import { SelectGroup } from "@/_components/molecules/SelectGroup";
import { Button } from "../atoms/Button";

// Images
import Logo from "@/_assets/images/logo-white.png";

export const Register = ({ open, path, data }) => {
  const formRef = useRef(null);
  const navigate = useRouter();

  const close = () => {
    navigate.push(`/training/${path}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        navigate.push(`/training/${path}`);
      }
    };

    if (open) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open, path, navigate]);

  //
  return (
    <section className={`register ${open ? `flex fixed` : ` hidden`}`}>
      <Image src={Logo} width="" height="" alt="" />
      <form ref={formRef} className="register-form">
        {/* <svg onClick={() => close()}>
          <use href={`/images/sprite.svg#icon-close`} />
        </svg> */}
        <div className="form-group">
          <InputGroup
            type="text"
            label="Training Amount"
            placeholder={`🇳🇬 ${`₦`}${data?.amount}`}
            value={data?.amount}
            disabled
          />
          <InputGroup
            label="Training Date"
            placeholder="12 December 2023"
            value={format(new Date(data?.startDate ?? null), "dd LLLL, yyyy.")}
            disabled
          />
        </div>
        <div className="form-group">
          <InputGroup
            type="text"
            label="First Name"
            placeholder="Input first name"
          />
          <InputGroup label="First Name" placeholder="Input last name" />
        </div>

        <InputGroup type="email" label="Email" placeholder="name@mail.com" />

        <InputGroup
          type="phone"
          label="Mobile Number"
          placeholder="Input phone number"
        />
        {/* <SelectGroup name="expertise" label="Expertise Level">
          <option value="">Option One</option>
          <option value="">Option One</option>
          <option value="">Option One</option>
        </SelectGroup> */}

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
