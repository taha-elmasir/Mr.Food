import { Fragment, useEffect, useState } from 'react';
import { scroll } from './lib';

import Navigation from './components/navigation/navigation';
import Header from './components/header/Header';
import Reviews from './components/reviews/Reviews';
import Features from './components/features/Features';
import Meals from './components/meals/Meals';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Modal from './components/UI/Modal';

const App = () => {
  const [isShown, setIsShown] = useState(false);
  const show = () => setIsShown(true);
  const close = () => setIsShown(false);

  useEffect(() => {
    document.querySelector('#spinner-container')?.remove();
    document
      .querySelectorAll('a')
      .forEach((a) => a.addEventListener('click', (e) => scroll(e)));
  });
  return (
    <Fragment>
      <Navigation />
      <Header show={show} />
      {isShown && <Modal close={close} />}
      <main>
        <Reviews />
        <Features />
        <Meals />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
