import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert(`Thank you, the message has been sent! 😄`);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className="p-20 bg-bg-green">
      <h2 className="text-5xl font-bold uppercase mb-20 italic text-center ">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Your name</label>
        <input type="text" name="user_name" />
        <label>Your email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </section>
  );
}
