import React from 'react';

export default function AboutMe() {
  return (
    <section id="about" className="p-20">
      <main className='mb-20 text-center space-y-5'>
        <h2 className="text-5xl font-bold uppercase">About Me</h2>
        <p className='text-xl italic'>Get to Know Me: Interesting Facts and Passions</p>
      </main>
      <div className="text-2xl font-semibold space-y-10 [&>*]:leading-relaxed [&>*]:tracking-tight">
        <p>- Enthusiastic web developer who completed the web developer course at Ironhack Berlin, do coding as a daily joy.</p>
        <p>- Dedicated to the art of writing clean code and constantly refining projects for a more structured and efficient development experience.</p>
        <p>- Beyond coding, I find fulfillment in creating fashionable clothes, and crafting macramme.</p>
        <p>- I cherish connecting with others and discovering shared interests, with a cup of coffee.</p>
      </div>
    </section>
  );
}
