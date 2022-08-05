import { Fragment } from "react";

import Header from "./components/header/Header";
import Features from "./components/features/Features";
import Customers from "./components/customers/Customers";
import Meals from "./components/meals/Meals";

const App = () => {
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
