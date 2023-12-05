'use client';
import React, { useState } from 'react';
// Next
import Image from 'next/image';
import Link from 'next/link';
// Components
import { Header } from '@/_components/organisms/Header';
import { Button } from '@/_components/atoms/Button';
import { Input } from '@/_components/atoms/Input';
import { TextArea } from '@/_components/atoms/TextArea';
// Utils
import { faqs } from '@/_utils/faqs';
import { SelectGroup } from '@/_components/molecules/SelectGroup';

export default function Contact() {
  //
  // Initialize an array to track the active state for each FAQ item
  const [activeStates, setActiveStates] = useState(Array(faqs.length).fill(false));

  const handleHeaderClick = (index) => {
    // Toggle the active state for the clicked FAQ item
    const newActiveStates = [...activeStates];
    newActiveStates[index] = !newActiveStates[index];
    setActiveStates(newActiveStates);
  };
  //
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
              <SelectGroup name="name">
                <option value="">Select Service Type</option>
                <option value="">Option One</option>
                <option value="">Option One</option>
              </SelectGroup>
              <Input type="phone" placeholder="Phone Number" required="required" />
            </div>

            <TextArea placeholder="Type Message" required />

            <Button>Send Message</Button>
          </form>
        </div>
      </section>

      <section className="faqs">
        <div className="container">
          <header className="faqs-header">
            <h4>Frequently Asked Question</h4>
          </header>
          <ul className="faqs-list">
            {faqs.map(({ id, title, content }, index) => (
              <li key={id} onClick={() => handleHeaderClick(index)}>
                <header>
                  <h5>{title}</h5>
                  <svg className={activeStates[index] ? 'rotate-180' : 'rotate-0'}>
                    <use href={`/images/sprite.svg#icon-caret`} />
                  </svg>
                </header>
                {activeStates[index] && <p>{content}</p>}
              </li>
            ))}
          </ul>
          <div className="faqs-footer">
            <Link href="/">
              <h5>FAQs</h5>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
