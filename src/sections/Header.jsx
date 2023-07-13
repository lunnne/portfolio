import React from 'react';
import Navbar from '../components/Navbar';
import TypeWriter from '../components/TypeWriter';

export default function Header() {
  const text = ' Curious, Passionate Leaner and Seeking Growth.';
  return (
    <header className="p-20 bg-bg-green header">
      <Navbar />
      <div class="py-20 flex justify-around items-center">
        <div>
          <h1 className="text-5xl italic font-bold my-5">I'm a frontend developer</h1>
          <p className='text-2xl'>
            <TypeWriter text={text} />
          </p>
        </div>
        
        <div className="profile-container rounded-3xl overflow-hidden">
          <img className="w-96 rounded-xl" src="/img/Profile.jpg" alt="profile" />
        </div>
      </div>
    </header>
  );
}
