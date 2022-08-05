import "./MealItem.css";

// Images
import Seafood from "../../images/meals/Seafood paella.jpg";

// Icons
import { Clock, User, Location, Calories } from "../../icons/meals/meals";

const MealItem = (props) => (
  <div className="meal">
    <div className="meal-top">
      <div className="meal-photo">
        <div className="meal-overlay"></div>
        <img src={Seafood} alt="Seafood paella" />
      </div>
      <h3 className="meal-heading">{props.title}</h3>
    </div>

    <div className="meal-middle">
      <h4 className="meal-tags">
        <span className="tag seafood">Seafood</span>
        <span className="tag vegetarian">Vegetarian</span>
      </h4>
      <p className="meal-text">
        Quisque imperdiet nisl ante, sit amet sollicitudin lorem sagittis in.
      </p>
      <div className="meal-item">
        <Clock />
        <span>45 Mintues</span>
      </div>
      <div className="meal-item">
        <User />
        <span>3 Servings</span>
      </div>
      <div className="meal-item">
        <Location />
        <span>Spain</span>
      </div>
      <div className="meal-item">
        <Calories />
        <span>300 Calories</span>
      </div>
    </div>

    <div className="meal-bottom">
      <p className="meal-price">${props.price} Tax included</p>
      <p className="meal-ratings">{props.rating}&#9733; rating(8)</p>
      <a className="btn" href="#">
        Details
      </a>
    </div>
  </div>
);

export default MealItem;
