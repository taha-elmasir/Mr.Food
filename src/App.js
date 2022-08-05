import { Fragment, useEffect } from "react";
import { scroll } from "./lib";

import Header from "./components/header/Header";
import Features from "./components/features/Features";
import Customers from "./components/customers/Customers";
import Meals from "./components/meals/Meals";

const App = () => {
  // Handling empty href
  useEffect(() =>
    document
      .querySelectorAll("a")
      .forEach((a) => a.addEventListener("click", (e) => scroll(e)))
  );
  return (
    <Fragment>
      <Header />
      <Customers />
      <Features />
      <Meals />
    </Fragment>
  );
};

export default App;
