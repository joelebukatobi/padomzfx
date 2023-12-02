"use client";
// React
// Next
import Image from "next/image";
// Components
import HeroImage from "@/_assets/images/hero-image.png";
import HeroWaves from "@/_assets/images/hero-waves.png";
import { Button } from "@/_components/atoms/Button";
import { Navbar } from "@/_components/organisms/Navbar";

export const LandingHeader = () => {
  return (
    <header className="landing-header">
      <Navbar />
      <div className="landing-header-content container">
        <div className="landing-header-content--text">
          <h1>Learn Forex Trading and make money with us.</h1>
          <h5>
            Padomz Forex will teach you, fund your trading account, assuming the
            risk for you, allowing you to retain almost all of your generated
            profits.
          </h5>
          <Button>Learn How To Trade With PadomzFx</Button>
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
