'use client';
import React, { useEffect, useRef } from 'react';
// Next
import Image from 'next/image';
// Components

// Utils
import { reviews } from '@/_utils/reviews';

export const Testimonials = ({ open, close }) => {
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
    <section className={`testimonials ${open ? `flex fixed` : ` hidden`}`}>
      <div className="testimonials-close">
        <svg onClick={() => close()}>
          <use href={`/images/sprite.svg#icon-close`} />
        </svg>
      </div>

      <header>
        <p>What Our Students Say</p>
        <h3>Life-Changing Experience!</h3>
      </header>
      <div ref={formRef} className="testimonials-row ">
        {reviews.map(
          ({ id, name, title, review, rating }, index) =>
            index < 6 && (
              <div className="testimonials-card" key={id}>
                <p>{name}</p>
                <p>{title}</p>
                <p>{review}</p>
                <div className="testimonials-rating">
                  <svg>
                    <use href={`/images/sprite.svg#icon-star`} />
                  </svg>
                  <p>{rating} </p>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};
