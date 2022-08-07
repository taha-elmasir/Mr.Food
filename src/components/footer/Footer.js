import { useRef, useEffect } from 'react';
import { reveal } from '../../lib';
import './Footer.css';

const Footer = () => {
  const footerRef = useRef();
  useEffect(() => reveal(footerRef), [footerRef]);
  return (
    <footer className='footer hidden' ref={footerRef}>
      <p className='copyright'>Built by Taha Elmasir</p>
      <ul className='footer-nav'>
        <li>
          <a href='#'>Privacy policy</a>
        </li>
        <li>
          <a href='#'>Terms of use</a>
        </li>
        <li>
          <a href='#'>Create account</a>
        </li>
        <li>
          <a href='#'>How it works</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
