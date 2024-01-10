// React
// Next
import { client } from "@/lib/contentful/client";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Components
import { Button } from "@/_components/atoms/Button";
import { Header } from "@/_components/organisms/Header";
import { Register } from "@/_components/organisms/Register";

// Image
import ReviewImage from "@/_assets/images/review-image.png";
import TrainingInfo from "@/_assets/images/training-info.png";

export async function generateStaticParams() {
  const allArticles = await client.getEntries({
    content_type: "training",
  });

  return allArticles.items.map((article) => ({
    slug: article.slug,
  }));
}

const Training = async ({ params }) => {
  const training = await client.getEntries({
    content_type: "training",
    "fields.slug": params.slug[0],
  });

  const showModal = params.slug.includes("register");

  if (training.items < 1) {
    notFound();
  }
  const trainingInfo = training.items[0].fields;

  return (
    <div className="training">
      <Register open={showModal} path={params.slug[0]} data={trainingInfo} />
      <Header>
        <div className="container">
          <div className="header-info">
            <div className="header-content">
              <ul>
                <li>
                  <svg>
                    <use href={`/images/sprite.svg#icon-clock`} />
                  </svg>
                  <p>{trainingInfo.duration}</p>
                </li>
                <li>
                  <svg>
                    <use href={`/images/sprite.svg#icon-calendar`} />
                  </svg>
                  <p>
                    {format(new Date(trainingInfo.startDate), "dd LLLL, yyyy.")}
                  </p>
                </li>
              </ul>
              <header>
                <h4>{trainingInfo.title}</h4>
                <p>{trainingInfo.briefDescription}</p>
              </header>
              <div>
                <Link href={`/training/${params.slug[0]}/register`}>
                  <Button>{trainingInfo.cta}</Button>
                </Link>
              </div>
            </div>

            <div className="header-image">
              <Image src={TrainingInfo} width="" height="" alt="" />
            </div>
          </div>
        </div>
      </Header>

      <section className="container !mt-60">
        <div className="course">
          <div className="course-header">
            <h3>Key Training Highlights</h3>
            <p>{trainingInfo.keyTrainingHighlight}</p>
          </div>
          <div className="course-content">
            {trainingInfo.highlight.map(({ fields }, index) => {
              return (
                <div key={index} className="course-content--card">
                  <div className="course-content--card--icon">
                    <svg>
                      <use href={`/images/sprite.svg#icon-clock`} />
                    </svg>
                  </div>
                  <div className="course-content--card--text">
                    <h5>{fields.title}</h5>
                    <p>{fields.description}</p>
                  </div>
                </div>
              );
            })}
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
                Joining this academy was the best decision I made for my trading
                journey. The curriculum is well-structured, and the support from
                the community and instructors is unparalleled. I feel equipped
                with the necessary tools and knowledge to navigate the Forex
                market with confidence and success.
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

      <section className="container hidden">
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
};

export default Training;
