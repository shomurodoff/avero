import React, { Fragment } from "react";
import dynamic from "next/dynamic";

const HomeContainer = dynamic(() => import("../../containers/home-container"), {
  ssr: false,
});

const Index = () => {
  return (
    <Fragment>
      <HomeContainer />
    </Fragment>
  );
};

export default Index;
