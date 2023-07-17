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
      <main className='text-center sm:mb-20 space-y-5'>
        <h2 className="text-3xl sm:text-5xl font-bold uppercase">Contact</h2>
        <p className='text-lg sm:text-xl italic'>Feel free to reach out to me :)</p>
      </main>
      <form ref={form} onSubmit={sendEmail} className='text-lg sm:text-2xl'>
        <label>
          Your name<span className='asterisk'>&#42;</span>
        </label>
        <input type="text" name="user_name" />
        <label>
          Your email<span className='text-red-400'>&#42;</span>
        </label>
        <input type="email" name="user_email" />
        <label>
          Message<span className="text-red-500">&#42;</span>
        </label>
        <textarea name="message"/>
        <input type="submit" value="Send" />
      </form>
    </section>
  );
}
