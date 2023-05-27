import React, { Fragment } from "react";
import {  Header } from "./components";
import {Footer} from "../main/components";

const Index: React.FC<any> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Index;
