import { Fragment } from "react";

import Header from "./components/header/Header";
import Features from "./components/features/Features";
import Customers from "./components/customers/Customers";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Customers />
      <Features />
    </Fragment>
  );
};

export default App;
