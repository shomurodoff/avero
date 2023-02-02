import React, { Fragment, ReactNode } from "react";
import { Footer, Header } from "./components";

interface Props {
  children: ReactNode | JSX.Element;
  rest?: {};
  primary?: boolean;
}

const Index: React.FC<Props> = ({ children, primary }) => {
  return (
    <Fragment>
      <Header primary={primary} />
      <main className="relative">{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Index;
