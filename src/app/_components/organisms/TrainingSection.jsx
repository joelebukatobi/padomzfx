'use client';
//
import React from 'react';
// Next
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// Components
import { Button } from '@/_components/atoms/Button';
// Images
import TrainingImage from '@/_assets/images/training-image.png';
//

export const TrainingSection = ({ className }) => {
  const navigate = useRouter();
  const handleClick = () => {
    navigate.push('/training/info');
  };
  return (
    <section className={`${className} training-register`}>
      <div className="container">
        <div className="training-register--content">
          <header>
            <p>Upcoming register</p>
            <h4>Mastering Forex Trading - A Comprehensive Guide</h4>
            <p>
              Are you looking to unlock the potential of the Forex market and become a skilled trader? The course is
              designed for beginners and intermediate traders who want to develop a solid understanding of the Forex
              market, trading strategies...
            </p>
          </header>
          <ul>
            <li>
              <svg>
                <use href={`/images/sprite.svg#icon-clock`} />
              </svg>
              <p>4 Weeks</p>
            </li>
            <li>
              <svg>
                <use href={`/images/sprite.svg#icon-calendar`} />
              </svg>
              <p>12 December, 2023</p>
            </li>
          </ul>
          <div>
            <Button>Register</Button>
            <Button onClick={handleClick}>Learn More</Button>
          </div>
        </div>
        <div className="training-register--image">
          <Image src={TrainingImage} width="" height="" alt="Training Image" />
        </div>
      </div>
    </section>
  );
};
