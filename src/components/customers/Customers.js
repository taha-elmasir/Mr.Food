import { useRef, useEffect } from "react";
import { slide, reveal } from "../../lib";
import CustomerCard from "./CustomerCard";
import "./Customers.css";

// Images
import Golden from "../../images/customers/2.jpg";

const Customers = () => {
  const customersRef = useRef();
  const reviewsRef = useRef();
  const reviewHeight = useRef();

  useEffect(() => {
    reviewsRef.current.style.height = reviewHeight.current.offsetHeight + "px";
    const dots = document.querySelectorAll(".dot");
    const slides = document.querySelectorAll(".slide");
    slide(dots, slides);
    reveal(customersRef);
  }, [reviewHeight, reviewsRef, customersRef]);

  return (
    <section className="customers-section hidden" ref={customersRef}>
      <h2 className="section-heading">Our happy customers</h2>
      <p className="section-subheading">
        We always take care of our customers and they are very happy. <br />
        We've collected some stories for your.
      </p>
      <div className="reviews" ref={reviewsRef}>
        <div className="slide">
          <CustomerCard
            ref={reviewHeight}
            img={Golden}
            name="Robin Williams"
            job="Creative Market"
            review="Sed convallis lacus nec dolor vehicula sagittis. In et egestas
              nibh. Etiam vel urna leo. Maecenas luctus consectetur nunc et
              consequat. Pellentesque sed consequat turpis, et luctus felis.
              Maecenas ornare lobortis congue."
            date="May 15,2022"
          />
          <CustomerCard
            img={Golden}
            name="Robin Williams"
            job="Creative Market"
            review="Sed convallis lacus nec dolor vehicula sagittis. In et egestas
              nibh. Etiam vel urna leo. Maecenas luctus consectetur nunc et
              consequat. Pellentesque sed consequat turpis, et luctus felis.
              Maecenas ornare lobortis congue."
            date="May 15,2022"
          />
          <CustomerCard
            img={Golden}
            name="Robin Williams"
            job="Creative Market"
            review="Sed convallis lacus nec dolor vehicula sagittis. In et egestas
              nibh. Etiam vel urna leo. Maecenas luctus consectetur nunc et
              consequat. Pellentesque sed consequat turpis, et luctus felis.
              Maecenas ornare lobortis congue."
            date="May 15,2022"
          />
        </div>

        <div className="slide">
          <CustomerCard
            img={Golden}
            name="Robin Williams"
            job="Creative Market"
            review="Sed convallis lacus nec dolor vehicula sagittis. In et egestas
              nibh. Etiam vel urna leo. Maecenas luctus consectetur nunc et
              consequat. Pellentesque sed consequat turpis, et luctus felis.
              Maecenas ornare lobortis congue."
            date="May 15,2022"
          />
          <CustomerCard
            img={Golden}
            name="Robin Williams"
            job="Creative Market"
            review="Sed convallis lacus nec dolor vehicula sagittis. In et egestas
            nibh. Etiam vel urna leo. Maecenas luctus consectetur nunc et
            consequat. Pellentesque sed consequat turpis, et luctus felis.
            Maecenas ornare lobortis congue."
            date="May 15,2022"
          />
          <CustomerCard
            img={Golden}
            name="Robin Williams"
            job="Creative Market"
            review="Sed convallis lacus nec dolor vehicula sagittis. In et egestas
          nibh. Etiam vel urna leo. Maecenas luctus consectetur nunc et
          consequat. Pellentesque sed consequat turpis, et luctus felis.
          Maecenas ornare lobortis congue."
            date="May 15,2022"
          />
        </div>
      </div>
      <div className="dots">
        <button className="dot active-dot" data-nav="0" />
        <button className="dot" data-nav="1" />
      </div>
    </section>
  );
};

export default Customers;
