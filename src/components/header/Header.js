import "./Header.css";

// Images
import Dangelo from "../../images/chefs/Dangelo Hahn.jpg";
import Golden from "../../images/chefs/Golden Raynor.jpg";
import robin from "../../images/chefs/robin williams.jpg";
import customer1 from "../../images/customers/1.jpg";
import customer2 from "../../images/customers/2.jpg";
import customer3 from "../../images/customers/3.jpg";
import customer4 from "../../images/customers/4.jpg";
import customer5 from "../../images/customers/5.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left"></div>
      <div className="header-right">
        <div className="chefs">
          <h3>Our World chefs</h3>
          <img src={Dangelo} alt="Chef 1" />
          <div className="chef-details">
            <h4>Dangelo Hahn</h4>
            <p className="chef-position">Executive Chef</p>
          </div>
          <img src={Golden} alt="Chef 2" />
          <div className="chef-details">
            <h4>Golden Raynor</h4>
            <p className="chef-position">Head Chef</p>
          </div>
          <img src={robin} alt="Chef 3" />
          <div className="chef-details">
            <h4>Robin Williams</h4>
            <p className="chef-position">Deputy Chef</p>
          </div>
        </div>
        <div className="customers-container">
          <div className="customers">
            <img src={customer1} alt="customer1" />
            <img src={customer2} alt="customer2" />
            <img src={customer3} alt="customer3" />
            <img src={customer4} alt="customer4" />
            <img src={customer5} alt="customer5" />
          </div>
          <p className="customers-text">
            <span>500K</span> meals delivered!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
