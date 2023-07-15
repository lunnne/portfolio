import React from 'react';
import Navbar from '../components/Navbar';
import TypeWriter from '../components/TypeWriter';

export default function Header() {
  const text = `CCurious, passionate learner and seeking growth.`;
  return (
    <header className="p-20 bg-bg-green header">
      <Navbar />
      <div class="py-20 grid grid-cols-3 items-center">
        <div className='col-span-2 p-20'>
          <h1 className="text-5xl italic font-bold my-10 tracking-wide">I'm a <span className='uppercase bg-yellow bg-opacity-30'>front-end developer</span>,</h1>
            <p className='text-4xl w-2/3 leading-relaxed'>
              <TypeWriter text={text} />
            </p>
        </div>

        <div className='p-10 justify-center items-center'>
          <div className="profile-container rounded-3xl overflow-hidden">
            <img className="w-96 rounded-xl" src="/img/Profile.jpg" alt="profile" />
          </div>
        </div>
      </div>
    </header>
  );
}
