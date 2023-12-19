"use client";
import { useState } from "react";
// Next
// Components
import { Header } from "@/_components/organisms/Header";
import { Register } from "@/_components/organisms/Register";
import { TestimonialSection } from "@/_components/organisms/TestimonialSection";
import { Testimonials } from "@/_components/organisms/Testimonials";
import { TrainingSection } from "@/_components/organisms/TrainingSection";
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
      {" "}
      <Testimonials open={testimonials} close={closeTestimonials} />
      <Register open={register} close={closeRegister} />
      <Header>
        <div className="container">
          <div className="header-training">
            <p>Master The Markets</p>
            <h3>PadomzFx Presents a Live Trading Experience</h3>
            <p>
              {`
            Immerse yourself in the world of live trading with PadomzFx. Our event is not just about learning; it's
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
