import { useRef, useEffect } from "react";
import { reveal } from "../../lib";
import "./Meals.css";
import MealItem from "./MealItem";

const Meals = () => {
  const mealsRef = useRef();
  useEffect(() => reveal(mealsRef), [mealsRef]);
  return (
    <section className="meals-section hidden" ref={mealsRef}>
      <h2 className="section-heading">Our most popular dishes</h2>
      <p className="section-subheading">Our meals Works with any diet</p>
      <div className="meals">
        <MealItem title="paella" price="99" rating="4.7" />
        <MealItem title="Tacos" price="149" rating="4.8" />
        <MealItem title="Marzipan" price="199" rating="4.9" />
      </div>
      <a href="#" className="meal-link">
        See all Meals &rarr;
      </a>
    </section>
  );
};

export default Meals;
