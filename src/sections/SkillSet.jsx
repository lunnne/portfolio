import React from 'react';

export default function SkillSet() {
  return (
    <section className="border-b-2 mb-5">
      <h1 className="text-3xl font-bold uppercase m-10">Skills</h1>
      <section className="flex justify-center space-x-5 m-10 text-2xl">
        <main className="container">
          <h2 className="skill-title">Front-end</h2>
          <div className="skill-box">
            <span className="title">HTML/CSS</span>
            <div className="flex space-x-10">
                <div className="skill-bar">
                  <span className="skill-per css"></span>
                </div>
                <div className="tooltip -translate-y-1">80%</div>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">JavaScript</span>
            <div className='flex space-x-10'> 
                <div className="skill-bar">
                  <span className="skill-per javascript"></span>
                </div>
                <div className="tooltip -translate-y-1">90%</div>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">React</span>
            <div className='flex space-x-10'>
                <div className="skill-bar">
                  <span className="skill-per react"></span>
                </div>
                <div className="tooltip -translate-y-1">85%</div>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Typescript</span>
            <div className='flex space-x-10'>
                <div className="skill-bar">
                  <span className="skill-per typescript"></span>
                </div>
                <div className="tooltip -translate-y-1">80%</div>
            </div>
          </div>
        </main>
        <main className="container">
          <h2 className="skill-title">Back-end</h2>
          <div className="skill-box">
            <span className="title">node.js</span>
            <div className="skill-bar">
              <span className="skill-per css"></span>
              <span className="tooltip">80%</span>
            </div>
          </div>
        </main>
      </section>
    </section>
  );
}
