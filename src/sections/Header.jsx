import React from 'react';
import TypeWriter from '../components/TypeWriter';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Header() {
  const text = ` aa front-end developer.`;
  return (
    <header className="p-10 sm:p-20 bg-bg-green header">
      <div className="space-y-10 sm:grid sm:grid-cols-3 items-center">
        <div className="col-span-2 sm:p-10">
          <h1 className="text-3xl sm:text-5xl font-bold sm:my-8 uppercase">Hi! I'm Jin Mun,</h1>
          <h2 className="text-3xl sm:text-5xl font-bold italic my-5">
            <span className="bg-yellow bg-opacity-30">
              <TypeWriter text={text} />
            </span>
          </h2>
          <p className="sm:text-2xl font-semibold">Curious, passionate learner and seeking growth</p>
          <div className="flex sm:text-4xl space-x-3 sm:space-x-5 my-10">
            <Link to="https://github.com/lunnne">
              <BsGithub />
            </Link>
            <Link to="https://www.linkedin.com/in/jin-mun-5713b4248/">
              <BsLinkedin />
            </Link>
            <Link to="mailto:jinmun.dev@gmail.com">
              <MdAlternateEmail />
            </Link>
          </div>
        </div>

        <div className="sm:p-10 justify-center items-center">
          <div className="profile-container rounded-3xl overflow-hidden">
            <img className="w-96 rounded-xl" src="/img/Profile.jpg" alt="profile" />
          </div>
        </div>
      </div>
    </header>
  );
}
