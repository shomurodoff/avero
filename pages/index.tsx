import React, { Fragment, useState } from "react";
import MainLoader from "../components/loader/main-loader";
import { useStore } from "../store";
import { HomeContainer } from "../containers";

const Index: React.FC = () => {
  const initialLoad = useStore((state: any) => state.initialLoading);
  const initialLoadingFalse = useStore((state) => state.initialLoadingFalse);
  const [loading, setLoading] = useState<boolean>(initialLoad);

  // setTimeout(() => {
  //   setLoading(false);
  //   initialLoadingFalse(initialLoad);
  // }, 10000);
  //
  // if (loading && initialLoad) {
  //   return <MainLoader />;
  // }

  return (
    <Fragment>
      <HomeContainer />
    </Fragment>
  );
};

export default Index;
