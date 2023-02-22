import React, { Fragment, useState } from "react";
import MainLoader from "../components/loader/main-loader";
import { useStore } from "../store";
import { HomeContainer } from "../containers";
import clsx from "clsx";

const Index: React.FC = () => {
  const initialLoad = useStore((state: any) => state.initialLoading);
  const initialLoadingFalse = useStore((state) => state.initialLoadingFalse);
  const [loading, setLoading] = useState<boolean>(initialLoad);
  const [isNotOpacity, setOpacity] = useState<boolean>(true);

  setTimeout(() => {
    setLoading(false);
    initialLoadingFalse(initialLoad);
  }, 10000);

  setTimeout(() => {
    setOpacity(false);
  }, 11000);

  if (loading || initialLoad || isNotOpacity) {
    return (
      <div
        className={clsx(
          "transition-opacity duration-1000",
          isNotOpacity ? "opacity-100" : "opacity-0"
        )}
      >
        <MainLoader />
      </div>
    );
  }

  return (
    <Fragment>
      <HomeContainer />
    </Fragment>
  );
};

export default Index;
