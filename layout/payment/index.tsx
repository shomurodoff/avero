import React, { Fragment } from "react";
import { Footer, Header } from "./components";

const Index: React.FC<any> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};

export default Index;
