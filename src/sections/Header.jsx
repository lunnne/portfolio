import React from 'react';
import Navbar from '../components/Navbar';

export default function Header() {
  return (
    <header className="p-20 bg-bg-green header">
      <Navbar />
      <div class="py-20 flex justify-around items-center">
        <div className="text-5xl leading-snug">
          Hello_! Jin World
          <br /> I'm a frontend developer <br />
          who codes dreams
        </div>

        <div className='flex justify-end'>
          <div className="profile-container w-96 h-96 rounded-full overflow-hidden">
            <img className="-translate-y-10" src="/img/result.png" alt="profile" />
          </div>
        </div>
      </div>
    </header>
  );
}
