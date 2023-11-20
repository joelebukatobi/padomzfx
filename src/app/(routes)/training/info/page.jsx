'use client';
// React
import React, { useState } from 'react';
// Next
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// Components
import { Header } from '@/_components/organisms/Header';
import { Button } from '@/_components/atoms/Button';
import { Register } from '@/_components/organisms/Register';

// Image
import TrainingInfo from '@/_assets/images/training-info.png';
import ReviewImage from '@/_assets/images/review-image.png';

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
          <div className="header-info">
            <div className="header-content">
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
              <header>
                <h4>Mastering Forex Trading - A Comprehensive Guide</h4>
                <p>
                  {`  A transformative course designed for individuals aspiring to navigate the complexities of the Forex
                  market with confidence and skill. Whether you're a beginner seeking a solid foundation or an
                  intermediate trader aiming to refine your strategies, this course is tailored to elevate your
                  understanding and proficiency in Forex trading.`}
                </p>
              </header>
              <div>
                <Button onClick={openModal}>Register</Button>
              </div>
            </div>

            <div className="header-image">
              <Image src={TrainingInfo} width="" height="" alt="" />
            </div>
          </div>
        </div>
      </Header>

      <section className="container">
        <div className="course">
          <div className="course-header">
            <h3>Key Training Highlights</h3>
            <p>
              This comprehensive course is designed to equip you with essential skills and insights to navigate the
              markets with confidence. Here are the key highlights that set this course apart:
            </p>
          </div>
          <div className="course-content">
            <div className="course-content--card">
              <div className="course-content--card--icon">
                <svg>
                  <use href={`/images/sprite.svg#icon-clock`} />
                </svg>
              </div>
              <div className="course-content--card--text">
                <h5>Foundational Knowledge</h5>
                <p>
                  Gain a comprehensive understanding of the Forex market, covering its structure, key players, and
                  trading hours.
                </p>
              </div>
            </div>
            <div className="course-content--card">
              <div className="course-content--card--icon">
                <svg>
                  <use href={`/images/sprite.svg#icon-clock`} />
                </svg>
              </div>
              <div className="course-content--card--text">
                <h5>Technical Analysis Mastery</h5>
                <p>
                  Dive into the art of technical analysis, learning to interpret candlestick patterns, identify support
                  and resistance levels, and utilize various technical indicators for effective decision-making.
                </p>
              </div>
            </div>
            <div className="course-content--card">
              <div className="course-content--card--icon">
                <svg>
                  <use href={`/images/sprite.svg#icon-clock`} />
                </svg>
              </div>
              <div className="course-content--card--text">
                <h5>Diverse Trading Strategies</h5>
                <p>
                  {`Explore various trading strategies, including day trading, swing trading, and long-term investing. Create a personalized trading plan that aligns with your goals and risk tolerance`}
                </p>
              </div>
            </div>
            <div className="course-content--card">
              <div className="course-content--card--icon">
                <svg>
                  <use href={`/images/sprite.svg#icon-clock`} />
                </svg>
              </div>
              <div className="course-content--card--text">
                <h5>Trading Psychology Awareness</h5>
                <p>
                  Understand the psychology of trading and how emotions can influence decision-making. Cultivate
                  discipline and mental resilience to navigate the ups and downs of the market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="review">
        <div className="container">
          <div className="review-bio">
            <div className="review-image">
              <Image src={ReviewImage} width="" height="" alt="" />
            </div>
            <div className="review-footer">
              <h5>Nelson Ogunkunle</h5>
              <p>Fashion Designer</p>
            </div>
          </div>
          <div className="review-content">
            <div className="review-text">
              <p>
                Joining this academy was the best decision I made for my trading journey. The curriculum is
                well-structured, and the support from the community and instructors is unparalleled. I feel equipped
                with the necessary tools and knowledge to navigate the Forex market with confidence and success.
              </p>
            </div>
            <div className="review-rating">
              <svg>
                <use href={`/images/sprite.svg#icon-star`} />
              </svg>
              <p>5.0</p>
            </div>
            <div className="review-circle"></div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="schedule">
          <div className="schedule-content">
            <h4>Next Course Date</h4>
            <p>{`Wondering when the next batch of "Mastering Forex Trading - A Comprehensive Guide" begins? Your journey to mastering Forex trading starts with the next scheduled batch, where you'll have the opportunity to unlock the full potential of your trading skills.`}</p>
          </div>
          <div className="schedule-dates">
            <div className="schedule-card">
              <div className="schedule-card-top">
                <svg>
                  <use href={`/images/sprite.svg#icon-calendar`} />
                </svg>
                <p>24 January, 2024</p>
              </div>
              <div className="schedule-card-bottom">
                <h5>Mastering Forex Trading - A Comprehensive Guide</h5>
              </div>
            </div>
            <div className="schedule-card">
              <div className="schedule-card-top">
                <svg>
                  <use href={`/images/sprite.svg#icon-calendar`} />
                </svg>
                <p>24 January, 2024</p>
              </div>
              <div className="schedule-card-bottom">
                <h5>Mastering Forex Trading - A Comprehensive Guide</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
