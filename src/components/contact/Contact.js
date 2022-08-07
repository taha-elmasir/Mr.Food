import { useRef, useEffect } from 'react';
import { reveal } from '../../lib';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef();
  useEffect(() => reveal(contactRef), [contactRef]);
  return (
    <section id='contact-section' className='hidden' ref={contactRef}>
      <h2 className='section-heading'>Contact our Support Team</h2>
      <form className='form'>
        <input type='text' placeholder='Your Name' required />
        <input type='email' placeholder='E-mail address' required />
        <button className='btn' type='submit' href='#'>
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
