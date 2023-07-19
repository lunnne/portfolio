import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function SkillSet() {
  const { ref: skillRef, inView: skillRefIsVisible } = useInView();
  return (
    <section id="skills" className="bg-bg-green p-10 sm:p-20">
      <main className="mb-20 text-center space-y-5">
        <h2 className="text-3xl sm:text-5xl font-bold uppercase">Skills</h2>
        <p className="text-xl italic">Skills & Attributes</p>
      </main>
      <section className="container sm:grid grid-rows-2 grid-flow-col">
        <main className="p-10 sm:col-span-3 sm:row-span-2 sm:px-20">
          <h2 className="font-bold pb-5 sm:text-3xl text-center">Coding Skills</h2>
          <div className="skill-box">
            <span className="block sm:text-xl mb-1">HTML/CSS</span>
            <div className="flex space-x-10">
              <div className="skill-bar">
                <span ref={skillRef} className={skillRefIsVisible? "skill-per css" : ''}></span>
              </div>
              <div className="tooltip -translate-y-1">95%</div>
            </div>
          </div>
          <div className="skill-box">
            <span className="block sm:text-xl mb-1">JavaScript</span>
            <div className="flex space-x-10">
              <div className="skill-bar">
                <span ref={skillRef} className={skillRefIsVisible? "skill-per javascript" : ''}></span>
              </div>
              <div className="tooltip -translate-y-1">90%</div>
            </div>
          </div>
          <div className="skill-box">
            <span className="block sm:text-xl mb-1">Typescript</span>
            <div className="flex space-x-10">
              <div className="skill-bar">
                <span ref={skillRef} className={skillRefIsVisible? "skill-per typescript" : ''}></span>
              </div>
              <div className="tooltip -translate-y-1">80%</div>
            </div>
          </div>
          <div className="skill-box">
            <span className="block sm:text-xl mb-1">React</span>
            <div className="flex space-x-10">
              <div className="skill-bar">
                <span ref={skillRef} className={skillRefIsVisible? "skill-per react" : ''}></span>
              </div>
              <div className="tooltip -translate-y-1">85%</div>
            </div>
          </div>
          <div className="skill-box">
            <span className="block sm:text-xl mb-1">node.js</span>
            <div className="flex space-x-10">
              <div className="skill-bar">
                <span ref={skillRef} className={skillRefIsVisible? "skill-per node" : ''}></span>
              </div>
              <span className="tooltip -translate-y-1">65%</span>
            </div>
          </div>
        </main>
        <main className="bg-bg-dark-grey p-10 text-center rounded-tr-[7px] sm:raw-span-1 sm:col-span-1">
          <h2 className="font-bold sm:pt-10 pb-5 sm:text-3xl">Tools</h2>
          <p className="sm:text-lg">Visual Studio Code</p>
          <p className="sm:text-lg">IntelliJ</p>
        </main>
        <main className="bg-bg-grey p-10 text-center rounded-br-[7px] sm:raw-span-1 sm:col-span-1">
          <h2 className="font-bold sm:text-3xl sm:pt-10 pb-5 ">Etc</h2>
          <p className="sm:text-lg">Git</p>
          <p className="sm:text-lg">Scrum Master</p>
          <p className="sm:text-lg">Math</p>
        </main>
      </section>
    </section>
  );
}
