'use client';
//
import React from 'react';
// Next
import Image from 'next/image';
// Components
import { Button } from '@/_components/atoms/Button';
// Images
import TestimonialImage from '@/_assets/images/testimonial-image.png';
//

export const TestimonialSection = ({ openModal }) => {
  return (
    <section className="testimonial-section">
      <div className=" container">
        <div className="testimonial-section--heading">
          <h2>Accelerate your </h2>
          <h2>
            growth.
            <span>Think it, become it with PandomFx</span>
          </h2>
        </div>
        <div className="testimonial-section--image">
          <Image src={TestimonialImage} width="" height="" alt="" />
          <div className="testimonial-section--link">
            <p onClick={openModal}>
              Read Testimonials
              <svg>
                <use href={`/images/sprite.svg#icon-arrow-right`} />
              </svg>
            </p>
            <p>Over 20 Amazing Stories</p>
          </div>
        </div>
      </div>
    </section>
  );
};
