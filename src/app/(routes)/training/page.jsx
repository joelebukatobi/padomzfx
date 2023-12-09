'use client';
import React, { useState } from 'react';
// Next
import Image from 'next/image';
// Components
import { Header } from '@/_components/organisms/Header';
import { TrainingSection } from '@/_components/organisms/TrainingSection';
import { TestimonialSection } from '@/_components/organisms/TestimonialSection';
import { Register } from '@/_components/organisms/Register';
import { Testimonials } from '@/_components/organisms/Testimonials';
//

export default function Training() {
  const [register, setRegister] = useState(false);
  const [testimonials, setTestimonials] = useState(false);
  //
  const openRegister = () => {
    setRegister(true);
  };
  //
  const closeRegister = () => {
    setRegister(false);
  };
  //
  //
  const openTestimonials = () => {
    setTestimonials(true);
  };
  //
  const closeTestimonials = () => {
    setTestimonials(false);
  };
  return (
    <div className="training">
      {' '}
      <Testimonials open={testimonials} close={closeTestimonials} />
      <Register open={register} close={closeRegister} />
      <Header>
        <div className="container">
          <div className="header-training">
            <p>Master The Markets</p>
            <h3>PandomFx Presents a Live Trading Experience</h3>
            <p>
              {`
            Immerse yourself in the world of live trading with PandomFx. Our event is not just about learning; it's
            about mastering the markets in real-time. Join us for an unparalleled experience that goes beyond theory.`}
            </p>
          </div>
        </div>
      </Header>
      <div className="training-available">
        <TrainingSection openModal={openRegister} />
        <TrainingSection openModal={openRegister} />
      </div>
      <TestimonialSection openModal={openTestimonials} />
    </div>
  );
}
