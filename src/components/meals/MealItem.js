import { useState } from 'react';
import Modal from '../UI/Modal';
import './MealItem.css';

import food from '../../images/meals/Seafood paella.jpg';

// Icons
import { Clock, User, Location, Calories } from '../../icons/meals/meals';

const MealItem = (props) => {
  const [isShown, setIsShown] = useState(false);
  const close = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <div className='meal'>
      <div className='meal-top'>
        <div className='meal-photo'>
          <div className='meal-overlay'></div>
          <img src={food} alt='Seafood paella' />
        </div>
        <h3 className='meal-heading'>{props.title}</h3>
        <div className='meal-tags'>
          <span className='tag'>Seafood</span>
          <span className='tag'>Vegetarian</span>
        </div>
      </div>

      <div className='meal-middle'>
        <p className='meal-text'>
          Quisque imperdiet nisl ante, sit amet sollicitudin lorem sagittis in.
        </p>
        <div className='meal-item'>
          <Clock />
          <span>45 Mintues</span>
        </div>
        <div className='meal-item'>
          <User />
          <span>3 Servings</span>
        </div>
        <div className='meal-item'>
          <Location />
          <span>Spain</span>
        </div>
        <div className='meal-item'>
          <Calories />
          <span>300 Calories</span>
        </div>
      </div>

      <div className='meal-bottom'>
        <p className='meal-price'>${props.price} Tax included</p>
        <p className='meal-ratings'>{props.rating} &#9733; rating(8)</p>
        {isShown && <Modal close={close} details={1} />}
        <button className='btn' href='#' onClick={show}>
          Details
        </button>
      </div>
    </div>
  );
};

export default MealItem;
