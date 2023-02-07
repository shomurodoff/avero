import { get } from "lodash";
import React, { Fragment, useState } from "react";
import MainLoader from "../components/loader/main-loader";
import { HomePage } from "../modules/home/pages";
import { useStore } from "../store";
const Index: React.FC = () => {
  const initialLoad = useStore((state: any) => state.initialLoading);
  const initialLoadingFalse = useStore((state) => state.initialLoadingFalse);
  const [loading, setLoading] = useState<boolean>(initialLoad);

  setTimeout(() => {
    setLoading(false);
    initialLoadingFalse(initialLoad);
  }, 10000);

  if (loading && initialLoad) {
    return <MainLoader />;
  }

  return (
    <Fragment>
      <HomePage />
    </Fragment>
  );
};

export default Index;
