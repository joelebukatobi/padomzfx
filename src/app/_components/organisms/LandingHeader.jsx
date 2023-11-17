'use client';
// React
import React from 'react';
// Next
import Image from 'next/image';
// Components
import { Navbar } from '@/_components/organisms/Navbar';
import { Button } from '@/_components/atoms/Button';
import HeroImage from '@/_assets/images/hero-image.png';
import HeroWaves from '@/_assets/images/hero-waves.png';

export const LandingHeader = () => {
  return (
    <header className="landing-header">
      <Navbar />
      <div className="landing-header-content container">
        <div className="landing-header-content--text">
          <h1>Learn Forex while you Earn with us</h1>
          <h5>
            At Padomz Forex, we provide you with funding and take care of the risk so you can enjoy up to 90% of the
            profits that you make.
          </h5>
          <Button>View Training</Button>
        </div>
        <div className="landing-header-content--image">
          <Image src={HeroImage} width="" height="" alt="HeroImage" />
        </div>
      </div>
      <div className="landing-header-waves">
        <Image src={HeroWaves} width="" height="" alt="HeroWaves" />
      </div>
    </header>
  );
};
