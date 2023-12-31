import React from 'react';

export default function AboutMe() {
  return (
    <section id="about" className="p-10 sm:p-20">
      <main className="mb-10 sm:mb-20 text-center space-y-5">
        <h2 className="text-3xl sm:text-5xl font-bold uppercase">About Me</h2>
        <p className="text-lg sm:text-xl italic">Get to know me: Interesting facts and passions</p>
      </main>
      <div className="sm:text-2xl space-y-10 [&>*]:leading-relaxed [&>*]:tracking-tight">
        <p className="speech-bubble">
          Enthusiastic web developer who completed the full-stack development course at Ironhack Berlin, do coding as a daily joy.
        </p>
        <p className="speech-bubble-left">
          Dedicated to the art of writing clean code and constantly refining projects for a more structured and efficient development experience.
        </p>
        <p className="speech-bubble"> Beyond coding, I find fulfillment in creating fashionable clothes, and crafting macramme.</p>
        <p className="speech-bubble-left"> I cherish connecting with others and discovering shared interests, with a cup of coffee.</p>
      </div>
    </section>
  );
}
