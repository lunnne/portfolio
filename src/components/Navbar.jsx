import React from 'react';
import { BsMoonFill } from 'react-icons/bs';
// import { RxHamburgerMenu } from 'react-icons/rx';
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center text-3xl">
      <div className="text-2xl sm:text-5xl font-bold flex items-center space-x-3">
        <div className="text-lg sm:text-4xl">
          <BsMoonFill />
        </div>
        <div>
          JIN<span>.MUN</span>
        </div>
      </div>
      {/* <button onClick={() => setMenu(!menu)} className="visible md:invisible">
          <RxHamburgerMenu />
        </button> */}

      <ul className="sm:flex space-x-10 [&>li]:uppercase font-bold">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
