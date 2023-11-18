'use client';
// Next
import Image from 'next/image';
// Components
import { Button } from '@/_components/atoms/Button';
import { TrainingSection } from '@/_components/organisms/TrainingSection';
import { TestimonialSection } from '@/_components/organisms/TestimonialSection';
// Images
import PotentialImage from '@/_assets/images/potential-image.png';
import UnlockImage from '@/_assets/images/unlock-image.png';
import TrainingImage from '@/_assets/images/training-image.png';
import TestimonialImage from '@/_assets/images/testimonial-image.png';
//

export default function Home() {
  return (
    <div className="index">
      <section className="container">
        <div className="potential">
          <div className="potential-image">
            <Image src={PotentialImage} width="" height="" alt="unlock your potential" />
            <div className="potential-after">
              <Image src={UnlockImage} width="" height="" alt="unlock your potential" />
            </div>
          </div>
          <div className="potential-text">
            <h4>Unlock Your Trading Potential</h4>
            <p>
              {`At PandomzFx, we're all about pushing boundaries and breaking free from constraints. It's time to go beyond
            limits—explore the vast possibilities, learn with unmatched expertise, and achieve heights that once seemed
            unreachable.`}
            </p>
            <p>
              {`With PandomzFx, your journey becomes a limitless adventure where every insight gained, every skill honed,
            propels you towards unparalleled success in the exhilarating realm of Forex trading.`}
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="course">
          <div className="course-header">
            <h3>
              Why you should take a <span>PandomFx</span> course
            </h3>
          </div>
          <div className="course-content">
            <div className="course-content--card">
              <div className="course-content--card--icon">
                <svg>
                  <use href={`/images/sprite.svg#icon-clock`} />
                </svg>
              </div>
              <div className="course-content--card--text">
                <h5>Structured Learning</h5>
                <p>
                  Ut pariatur enim et dolore voluptatem sed placeat omnis ut voluptatibus ratione quo quisquam tempora
                  nam amet assumenda est vero sint eos temporibus consequatur minus amet.
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
                <h5>Real-Time Market Insights</h5>

                <p>
                  Stay ahead of the curve with access to live trading sessions, webinars, and market analysis. Learn to
                  interpret market movements and make well-informed trades.
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
                <h5>Proven Success Stories</h5>
                <p>
                  {`Our students have achieved remarkable results, and many have gone on to become successful Forex
                  traders. When you choose a PandomFx course, you're setting yourself up for a bright future in the
                  world of Forex.`}
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
                <h5>Comprehensive Curriculum</h5>
                <p>
                  Our courses cover everything from the basics of Forex trading to advanced strategies, technical and
                  fundamental analysis, and risk management. We provide you with a 360-degree education to make informed
                  trading decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrainingSection />
      <TestimonialSection />
    </div>
  );
}
