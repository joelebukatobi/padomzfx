'use client';
// Next
import Image from 'next/image';
// Components
import { Header } from '@/_components/organisms/Header';
// Utils
import { teams } from '@/_utils/teams';

export default function Team() {
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
              <Image src={image} height="" width="" alt="" />
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
