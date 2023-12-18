"use client";
// Next
import Image from "next/image";
// Components
import { Header } from "@/_components/organisms/Header";
// Images
import AcademyLeft from "@/_assets/images/academy-left.png";
import AcademyMain from "@/_assets/images/academy-main.png";
import AcademyRight from "@/_assets/images/academy-right.png";
import ApproachImage from "@/_assets/images/approach-image.png";
import MissionImage from "@/_assets/images/mission-value.png";
//
export default function About() {
  return (
    <div className="about">
      <Header>
        <div className="container">
          <div className="header-about">
            <h3>Igniting Passion, Fostering Excellence in Forex Trading</h3>
          </div>
        </div>
      </Header>

      <section className="container">
        <div className="academy">
          <div className="academy-image">
            <Image src={AcademyMain} width="" height="" alt="" />
          </div>
          <div className="academy-content">
            <div className="academy-text">
              <h4>About PadomzFx</h4>
              <p>
                {` Welcome to PadomzFx Academy, your Gateway to Financial Success through Knowledge and
Support. As your dedicated partners in financial empowerment, we offer more than mere
education—we're committed to your success. Our approach blends theoretical knowledge with
hands-on practice, providing live trading sessions, market analysis, and continuous support. Join us
to gain essential knowledge and practical experience for your financial journey.`}
              </p>
            </div>
            <div className="academy-group">
              <div className="academy-left">
                <Image src={AcademyLeft} width="" height="" alt="" />
                <p>For Over Four Decades in Financial Market</p>
                {/* <div className="academy-left-label">
                  <p>Our Journey</p>
                </div> */}
              </div>
              <div className="academy-right">
                <Image src={AcademyRight} width="" height="" alt="" />
                <p>Dedivated & Professional Trainers</p>
                {/* <div className="academy-right-label">
                  <p>Our Team</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="advantage">
          <header>
            <h4>The Trifecta Advantage</h4>
            <p>
              Discover unparalleled opportunities for growth with the Trifecta
              Advantage at PadomzFx Academy. Our commitment to your success
              extends beyond education.
            </p>
          </header>

          <div className="advantage-row">
            <div className="advantage-card">
              <div className="advantage-number">
                <h1>01</h1>
              </div>
              <p>Community</p>
              <p>
                PadomzFx consists of a thriving and supportive community. Engage
                with like-minded traders, exchange experiences, and benefit from
                collaborative learning opportunities.
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-number">
                <h1>02</h1>
              </div>
              <p>Expertise</p>
              <p>
                {`At PadomzFx Academy, expertise is not just an aspiration; it's our cornerstone. Our mission is to
                cultivate expertise in every potential trader who walks through our doors.`}
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-number">
                <h1>03</h1>
              </div>
              <p>Funding Opportunities</p>
              <p>
                {`We understand that access to capital is crucial for forex traders starting their journey, which is why
we offer unique funding programs to support your ambitions. We fund, you make money.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <div className="mission-text">
            <p>Mission • Vision • Value</p>
            <h4>What We Stand for</h4>
            <p>
              At PadomzFx Academy, our mission is clear - to empower individuals
              like you with the skills, knowledge, and funding needed to build a
              thriving career in the financial markets. We understand that the
              world of trading and investing may seem complex, but we're here to
              simplify it for you.
            </p>
          </div>
          <div className="mission-image">
            <Image src={MissionImage} height="" width="" alt="" />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="approach">
          <div className="approach-content">
            <header>
              <h4>Our Approach</h4>
              <p>
                At PadomzFx, we believe in a revolutionary approach to Forex
                Trading education that sets us apart. Our unique methodology is
                designed to empower you at every step of your trading journey.
              </p>
            </header>
            <Image src={ApproachImage} height="" width="" alt="" />
          </div>
          <div className="approach-list">
            <div className="approach-card">
              <div className="approach-icon">
                <svg>
                  <use href={`/images/sprite.svg#icon-library`} />
                </svg>
              </div>
              <div className="approach-text">
                <p>Learn with Us</p>
                <p>
                  Gain expertise from seasoned professionals. Our training
                  equips you with essential skills to navigate Forex markets
                  confidently.
                </p>
              </div>
            </div>
            <div className="approach-card">
              <div className="approach-icon">
                <svg>
                  <use href={`/images/sprite.svg#icon-saving`} />
                </svg>
              </div>
              <div className="approach-text">
                <p>Get Funded</p>
                <p>
                  Qualify for a live trading account with financial backing from
                  PadomzFx. Trade in a real-world environment without risking
                  your own capital.
                </p>
              </div>
            </div>
            <div className="approach-card">
              <div className="approach-icon">
                <svg>
                  <use href={`/images/sprite.svg#icon-market`} />
                </svg>
              </div>
              <div className="approach-text">
                <p>Start Trading</p>
                <p>
                  Apply your skills in a real-world trading environment.
                  Practice, refine, and gain the confidence to make informed
                  decisions.
                </p>
              </div>
            </div>
            <div className="approach-card">
              <div className="approach-icon">
                <svg>
                  <use href={`/images/sprite.svg#icon-money`} />
                </svg>
              </div>
              <div className="approach-text">
                <p>Earn as you Learn</p>
                <p>
                  As you reach trading milestones, enjoy the rewards. Our
                  performance-based compensation model lets your success
                  translate directly into financial gains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
