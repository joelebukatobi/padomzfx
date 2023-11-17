'use client';
// Next
import Image from 'next/image';
// Components
import { Header } from '@/_components/organisms/Header';
//
export default function About() {
  return (
    <div className="about">
      <Header>
        <div className="header-training container">
          <h3>Igniting Passion, Fostering Excellence in Forex Trading</h3>
        </div>
      </Header>

      <section className="academy">
        <div className="academy-image">
          <Image src="" width="" height="" alt="" />
        </div>
        <div className="academy-content"></div>
      </section>
    </div>
  );
}
