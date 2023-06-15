import React from 'react';

export default function AboutMe() {
  return (
    <section className="grid grid-cols-2 justify-center border-b-2">
      <div className="flex justify-center items-center border-r-2">
        <img src="/img/profile.png" alt="" />
      </div>
      <div className="[&>*]:text-2xl space-y-10 m-12 [&>*]:leading-relaxed">
        <h2 className="text-4xl font-semibold uppercase mt-5">About Me</h2>
        <p>● I recently finished the web developer course at Ironhack Berlin and I am happily coding every day.</p>
        <p>● Thinking about how to write clean code, and enjoying refactoring projects to make a cleaner structure.</p>
        <p>● Besides coding, I also enjoy writing blogs, making clothes and scented candles.</p>
        <p>● I love to chat with people and share interests over a cup of coffee.</p>
      </div>
    </section>
  );
}
