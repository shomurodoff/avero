import { isEqual } from "lodash";
import { useRouter } from "next/router";
import React, { ReactNode, ReactElement, Fragment } from "react";
import { Footer, Header } from "./components";
import { getLayoutName } from "./utils";

interface Props {
  children?: ReactNode | ReactElement;
}

const Index: React.FC<Props> = ({ children }) => {
  const { pathname } = useRouter();

  console.log(pathname);
  if (isEqual(getLayoutName(pathname), "main")) {
    return (
      <Fragment>
        <Header main />
        {children}
        <Footer />
      </Fragment>
    );
  } else if (isEqual(getLayoutName(pathname), "services")) {
    return (
      <Fragment>
        <Header />
        {children}
        <Footer />
      </Fragment>
    );
  } else {
    return (
      <div>
        <Fragment>
          <Header main />
          {children}
          <Footer />
        </Fragment>
      </div>
    );
  }
};

export default Index;
