import React, { useState } from 'react';
import { BsMoonFill } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="navbar py-10 px-5 sm:p-10 flex justify-between items-center text-3xl">
      <div className="nav_logo text-2xl sm:text-5xl font-bold flex  items-center space-x-3">
        <div className="text-lg sm:text-4xl">
          <BsMoonFill />
        </div>
        <div>
          JIN<span>.MUN</span>
        </div>
      </div>
      <ul className={menu ? 'visible text-lg sm:text-2xl space-x-3' : 'nav_li text-lg sm:text-2xl space-x-3'}>
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

      <button onClick={() => setMenu(!menu)} className="nav_menu_button">
        {menu ? <AiOutlineClose /> : <RxHamburgerMenu />}
      </button>
    </nav>
  );
}
