import React from 'react';
import './ReviewCard.css';

const CustomerCard = React.forwardRef((props, ref) => (
  <div className='review' ref={ref}>
    <div className='customer-details'>
      <img src={props.img} alt='customer' />
      <div className='customer-info'>
        <h4>{props.name}</h4>
        <p className='customer-job'>{props.job}</p>
      </div>
    </div>
    <p className='customer-review'>{props.review}</p>
    <p className='date'>{props.date}</p>
  </div>
));

export default CustomerCard;
