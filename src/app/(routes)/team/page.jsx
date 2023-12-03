'use client';
import React, { useState } from 'react';
// Next
import Image from 'next/image';
// Components
import { Header } from '@/_components/organisms/Header';
// Utils
import { teams } from '@/_utils/teams';

export default function Team() {
  const [open, setOpen] = useState(false);

  const toggleSocials = () => {
    setOpen(!open);
  };
  return (
    <div className="team">
      <Header>
        <div className="container">
          <div className="header-team">
            <p>Trading Gurus Unveiled</p>
            <h3>Meet the Visionaries Behind PandomzFx</h3>
          </div>
        </div>
      </Header>

      <section className="container">
        <div className="team">
          {teams.map(({ id, name, role, image }) => (
            <div className="team-card" key={id}>
              <div className="team-card-image">
                <Image src={image} height="" width="" alt="" />
                <div className="team-card-icons">
                  <div className={open ? 'team-card-icon' : 'hidden'}>
                    <svg>
                      <use href={`/images/sprite.svg#icon-minus`} />
                    </svg>
                  </div>
                  <div className={open ? 'team-card-icon' : 'hidden'}>
                    <svg>
                      <use href={`/images/sprite.svg#icon-minus`} />
                    </svg>
                  </div>
                  <div className={open ? 'team-card-icon' : 'hidden'}>
                    <svg>
                      <use href={`/images/sprite.svg#icon-minus`} />
                    </svg>
                  </div>
                  <div className="team-card-icon" onClick={toggleSocials}>
                    <svg>
                      <use href={`/images/sprite.svg#icon-plus`} />
                    </svg>
                  </div>
                </div>
              </div>
              <footer>
                <h5>{name}</h5>
                <p>{role}</p>
              </footer>
            </div>
            // <tr onClick={() => router.push(`/admin/blog/tags/${slug}`)} key={id}>
            //   <td>{id}</td>
            //   <td>{name}</td>
            //   <td>{author}</td>
            //   <td>{published}</td>
            //   <td onClick={() => router.push(`/admin/blog/tags/${slug}`)}>
            //     <PencilSquareIcon />
            //   </td>
            // </tr>
          ))}
        </div>
      </section>
    </div>
  );
}
