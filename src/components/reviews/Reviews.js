import { useRef, useEffect } from 'react';
import { slide, reveal } from '../../lib';
import ReviewCard from './ReviewCard';
import './Reviews.css';

// Images
import customer1 from '../../images/customers/2.jpg';
import customer2 from '../../images/customers/1.jpg';

const Customers = () => {
  const customersRef = useRef();
  const reviewsRef = useRef();
  const reviewHeight = useRef();
  const arr = [1, 2, 3];

  useEffect(() => {
    reviewsRef.current.style.height = reviewHeight.current.offsetHeight + 'px';
    const dots = Array.from(document.querySelectorAll('.dot'));
    const slides = document.querySelectorAll('.slide');
    slide(dots, slides);
    reveal(customersRef, '100px');
  }, [reviewHeight, reviewsRef, customersRef]);

  return (
    <section className='customers-section hidden' ref={customersRef}>
      <h2 className='section-heading'>Our happy customers</h2>
      <p className='section-subheading'>
        We always take care of our customers and they are very happy. <br />
        We've collected some stories for your.
      </p>

      <div className='reviews' ref={reviewsRef}>
        <div className='slide slide-1'>
          {arr.map((arr) => (
            <ReviewCard
              key={arr}
              ref={reviewHeight}
              img={customer1}
              name='Emma Watsons'
              job='Creative Market'
              review='Sed convallis lacus nec dolor vehicula sagittis. In et egestas nibh. Etiam vel urna leo. Maecenas luctus consectetur nunc et consequat. Pellentesque sed consequat turpis, et luctus felis. Maecenas ornare lobortis congue.'
              date='May 15,2022'
            />
          ))}
        </div>

        <div className='slide slide-2 hidden'>
          {arr.map((arr) => (
            <ReviewCard
              key={arr}
              img={customer2}
              name='Robin Williams'
              job='UI/UX Designer'
              review='Sed convallis lacus nec dolor vehicula sagittis. In et egestas nibh. Etiam vel urna leo. Maecenas luctus consectetur nunc et consequat. Pellentesque sed consequat turpis, et luctus felis. Maecenas ornare lobortis congue.'
              date='Jul 10,2020'
            />
          ))}
        </div>
      </div>

      <div className='dots'>
        <button className='dot active-dot' data-nav='0' data-slide='slide-1' />
        <button className='dot' data-nav='1' data-slide='slide-2' />
      </div>
    </section>
  );
};

export default Customers;
