import "./Customers.css";
import Golden from "../../images/chefs/Golden Raynor.jpg";

const Customers = () => {
  return (
    <section className="customers-section">
      <h2 className="section-heading">Our happy customers</h2>
      <p className="section-subheading">
        We always take care of our customers and they are very happy. <br />
        We've collected some stories for your.
      </p>
      <div className="customers-slider">
        <div className="customer-card">
          <div className="customer-details">
            <img src={Golden} alt="customer" />
            <div className="customer-info">
              <h4>Robin Williams</h4>
              <p className="customer-job">Creative Market</p>
            </div>
          </div>
          <p className="customer-review">
            Sed convallis lacus nec dolor vehicula sagittis. In et egestas nibh.
            Etiam vel urna leo. Maecenas luctus consectetur nunc et consequat.
            Pellentesque sed consequat turpis, et luctus felis. Maecenas ornare
            lobortis congue.
          </p>
          <p className="date">May 15,2022</p>
        </div>

        <div className="customer-card">
          <div className="customer-details">
            <img src={Golden} alt="customer" />
            <div className="customer-info">
              <h4>Robin Williams</h4>
              <p className="customer-job">UI/UX Designer</p>
            </div>
          </div>
          <p className="customer-review">
            Sed convallis lacus nec dolor vehicula sagittis. In et egestas nibh.
            Etiam vel urna leo. Maecenas luctus consectetur nunc et consequat.
            Pellentesque sed consequat turpis, et luctus felis. Maecenas ornare
            lobortis congue.
          </p>
          <p className="date">May 15,2022</p>
        </div>

        <div className="customer-card">
          <div className="customer-details">
            <img src={Golden} alt="customer" />
            <div className="customer-info">
              <h4>Robin Williams</h4>
              <p className="customer-job">Hiring Manger</p>
            </div>
          </div>
          <p className="customer-review">
            Sed convallis lacus nec dolor vehicula sagittis. In et egestas nibh.
            Etiam vel urna leo. Maecenas luctus consectetur nunc et consequat.
            Pellentesque sed consequat turpis, et luctus felis. Maecenas ornare
            lobortis congue.
          </p>
          <p className="date">May 15,2022</p>
        </div>
      </div>
    </section>
  );
};

export default Customers;
