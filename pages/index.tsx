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
  }, 9000);

  return (
    <div className="over overflow-y-hidden">
      <div
        className={clsx(
          "transition-opacity duration-1000 overflow-hidden fixed inset-0 z-[99999]",
          isNotOpacity ? "opacity-100" : "opacity-0",
          !loading && "hidden"
        )}
      >
        <MainLoader />
      </div>
      <HomeContainer />
    </div>
  );
};

export default Index;
