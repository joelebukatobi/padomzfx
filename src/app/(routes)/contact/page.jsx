'use client';
// Next
import Image from 'next/image';
// Components
import { Header } from '@/_components/organisms/Header';
import { Button } from '@/_components/atoms/Button';
import { Input } from '@/_components/atoms/Input';
import { TextArea } from '@/_components/atoms/TextArea';
import { Register } from '@/_components/organisms/Register';
// Utils
import { faqs } from '@/_utils/faqs';

export default function Contact() {
  return (
    <div className="contact">
      <Header>
        <div className="container">
          <div className="header-contact">
            <p>{`Let's Connect`}</p>
            <h3>Reach Out and Transform your Trading Future</h3>
          </div>
        </div>
      </Header>

      <section className="container">
        <div className="contact-row">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <svg>
                  <use href={`/images/sprite.svg#icon-clock`} />
                </svg>
              </div>
              <div className="contact-text">
                <p>Office Hours</p>
                <p>Mon - Fri: 9.00am to 5.00pm</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <svg>
                  <use href={`/images/sprite.svg#icon-location`} />
                </svg>
              </div>
              <div className="contact-text">
                <p>Corporate Office</p>
                <p>2A, Waziri Way, Victoria Island, Lagos</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <svg>
                  <use href={`/images/sprite.svg#icon-phone`} />
                </svg>
              </div>
              <div className="contact-text">
                <p>Phone</p>
                <p>+1 (469) 269-7044</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <svg>
                  <use href={`/images/sprite.svg#icon-email`} />
                </svg>
              </div>
              <div className="contact-text">
                <p>Email</p>
                <p>support@padomzfx.com</p>
              </div>
            </div>
          </div>
          <form action="" className="contact-form">
            <div className="form-group">
              <Input type="text" placeholder="Full Name" required="required" name="name" />
              <Input type="email" placeholder="Email Address" required="required" />
            </div>
            <div className="form-group">
              <Input type="text" placeholder="Select Service Type" required="required" name="name" />
              <Input type="phone" placeholder="Phone Number" required="required" />
            </div>

            <TextArea placeholder="Type Message" required />

            <Button>Send Message</Button>
          </form>
        </div>
      </section>

      {/* <section className="container">
        <div className="team">
          {teams.map(({ id, name, role, image }) => (
            <div className="team-card" key={id}>
              <Image src={image} height="" width="" alt="" />
              <footer>
                <h5>{name}</h5>
                <p>{role}</p>
              </footer>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}
