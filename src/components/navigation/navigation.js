import './navigation.css';
import { Menu } from '../../icons/navigation';

const control = () =>
  document.querySelector('.navigation').classList.toggle('hidden-nav');

const Navigation = () => (
  <div className='navigation hidden-nav'>
    <div className='nav-btn' onClick={control}>
      <Menu />
    </div>
    <div className='nav-background'></div>
    <nav className='nav'>
      <ul className='nav-list'>
        <li className='nav-link'>
          <a href='#reviews-section'>Reviews</a>
        </li>
        <li className='nav-link'>
          <a href='#features-section'>Features</a>
        </li>
        <li className='nav-link'>
          <a href='#meals-section'>Meals</a>
        </li>
        <li className='nav-link'>
          <a href='#contact-section'>Contact</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
