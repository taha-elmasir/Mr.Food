import './Header.css';

// Chefs Images
import Dangelo from '../../images/chefs/Dangelo Hahn.jpg';
import Golden from '../../images/chefs/Golden Raynor.jpg';
import robin from '../../images/chefs/robin williams.jpg';

// Customers Images
import customer1 from '../../images/customers/1.jpg';
import customer2 from '../../images/customers/2.jpg';
import customer3 from '../../images/customers/3.jpg';
import customer4 from '../../images/customers/4.jpg';
import customer5 from '../../images/customers/5.jpg';

// Featured In Images
import forbes from '../../images/featured in/forbes.png';
import techcrunch from '../../images/featured in/techcrunch.png';
import bbc from '../../images/featured in/bbc.png';
import businessInsider from '../../images/featured in/business-insider.png';

const Header = (props) => (
  <header className='header'>
    <div className='header-left'>
      <div className='heading'>
        <h2 className='logo'>Mr. Food</h2>
        <h1 className='primary-heading'>Enjoy your healthy meal</h1>
        <p className='subheading'>The best decision you've made</p>
      </div>
      <p className='heading-desc'>
        Mr. Food is committed to deliver quality food and healthy solutions to
        our domestic and international customers. Personalized to your
        nutritional needs.
      </p>
      <button className='btn btn-animation' onClick={props.show}>
        Join &amp; Order
      </button>

      <div className='featured-in'>
        <div className='featured-in__heading'>Featured In</div>
        <div className='featured-in__images'>
          <img src={techcrunch} alt='techcrunch' />
          <img src={forbes} alt='Forbes' />
          <img src={bbc} alt='BBC' />
          <img src={businessInsider} alt='business-insider' />
        </div>
      </div>
    </div>

    <div className='header-right'>
      <h3>Our Team</h3>
      <div className='chefs'>
        <div className='chef'>
          <img src={Dangelo} alt='Chef 1' />
          <div className='chef-details'>
            <h4>Dangelo Hahn</h4>
            <p className='chef-position'>Executive Chef</p>
          </div>
        </div>
        <div className='chef'>
          <img src={Golden} alt='Chef 2' />
          <div className='chef-details'>
            <h4>Golden Raynor</h4>
            <p className='chef-position'>Head Chef</p>
          </div>
        </div>
        <div className='chef'>
          <img src={robin} alt='Chef 3' />
          <div className='chef-details'>
            <h4>Robin Williams</h4>
            <p className='chef-position'>Deputy Chef</p>
          </div>
        </div>
      </div>

      <p className='team'>
        Composed of passionate business, science and technology professional,
        our team is set at innovating new solutions for the food industry and
        solving some of its most pressing issues.
      </p>

      <div className='customers-container'>
        <div className='customers'>
          <img src={customer1} alt='customer1' />
          <img src={customer2} alt='customer2' />
          <img src={customer3} alt='customer3' />
          <img src={customer4} alt='customer4' />
          <img src={customer5} alt='customer5' />
        </div>
        <p className='customers-text'>
          <span>500K</span> meals delivered!
        </p>
      </div>
    </div>
  </header>
);

export default Header;
