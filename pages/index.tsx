import React, { Fragment, useState } from "react";
import MainLoader from "../components/loader/main-loader";
import { HomePage } from "../modules/home/pages";

const Index: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  setTimeout(() => {
    setLoading(false);
  }, 10000);

  if (loading) {
    return <MainLoader />;
  }

  return (
    <Fragment>
      <HomePage />
    </Fragment>
  );
};

export default Index;
