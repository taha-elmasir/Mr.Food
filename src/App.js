import { Fragment } from "react";

import Header from "./components/header/Header";
import Customers from "./components/customers/Customers";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Customers />
    </Fragment>
  );
};

export default App;
