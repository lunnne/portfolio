import React from 'react';

export default function AboutMe() {
  return (
    <section id="about" className="p-20">
      <h2 className="text-5xl font-bold uppercase mb-20 italic text-center">About Me</h2>
      <div className="[&>*]:text-2xl space-y-10 [&>*]:leading-relaxed">
        <p>- I recently finished the web developer course at Ironhack Berlin and I am happily coding every day.</p>
        <p>- Thinking about how to write clean code, and enjoying refactoring projects to make a cleaner structure.</p>
        <p>- Besides coding, I also enjoy writing blogs, making clothes and scented candles.</p>
        <p>- I love to chat with people and share interests over a cup of coffee.</p>
      </div>
    </section>
  );
}
