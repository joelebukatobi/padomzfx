"use client";
//
// Next
import Image from "next/image";
import { useRouter } from "next/navigation";
// Components
import { Button } from "@/_components/atoms/Button";
// Images
import TrainingImage from "@/_assets/images/training-image.png";
//

export const TrainingSection = ({ className, openModal, closeModal }) => {
  const navigate = useRouter();
  const openInfo = () => {
    navigate.push("/training/info");
  };

  return (
    <>
      <section className={`${className} training-register`}>
        <div className="container">
          <div className="training-register--content">
            <header>
              <p>Upcoming register</p>
              <h4>Mastering Forex Trading - A Comprehensive Guide</h4>
              <p>
                Are you ready to Unleash Your Forex Trading Potential? This
                course caters to beginners and intermediate traders aiming to
                gain a robust grasp of the Forex market. Explore trading
                strategies and foundational concepts in this comprehensive
                program designed for those eager to evolve into skilled traders.
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
              <Button onClick={openModal}>Register</Button>
              <Button onClick={openInfo}>Learn More</Button>
            </div>
          </div>
          <div className="training-register--image">
            <Image
              src={TrainingImage}
              width=""
              height=""
              alt="Training Image"
            />
          </div>
        </div>
      </section>
    </>
  );
};
