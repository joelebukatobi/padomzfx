'use client';
import React, { useState } from 'react';
// Next
import Image from 'next/image';
// Components
import { Header } from '@/_components/organisms/Header';
import { TrainingSection } from '@/_components/organisms/TrainingSection';
import { TestimonialSection } from '@/_components/organisms/TestimonialSection';
import { Register } from '@/_components/organisms/Register';
//

export default function Training() {
  const [modal, setModal] = useState(false);
  //
  const openModal = () => {
    setModal(true);
  };
  //
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="training">
      <Register open={modal} close={closeModal} />
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
        <TrainingSection openModal={openModal} />
        <TrainingSection openModal={openModal} />
      </div>
      <TestimonialSection />
    </div>
  );
}
