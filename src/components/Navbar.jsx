import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
export default function Navbar() {
  return (
    <nav className="flex justify-between text-3xl">
      <div className="text-5xl font-bold flex space-x-3">
        <div >
          <BsFillMoonStarsFill style={{color : 'rgb(250 204 21)'}}/>
        </div>
        <div>
          JIN<span>.MUN</span>
        </div>
      </div>
      <ul className="flex space-x-10 [&>li]:uppercase font-bold">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
