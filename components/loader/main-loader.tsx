import clsx from "clsx";
import { isEqual } from "lodash";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MainPageLogo } from "../../layout/images";
import VideoLoader from "./video-loader";

const MainLoader = () => {
  const [percentage, setPercentage] = useState<number>(0);
  const upTo = percentage < 100;

  useEffect(() => {
    const intervalId: any =
      upTo && setInterval(() => setPercentage((t) => t + 1), 50);
    return () => clearInterval(intervalId);
  }, [upTo]);

  if (isEqual(percentage, 100)) {
    return <VideoLoader />;
  }

  return (
    <div className="fixed inset-0 bg-primary-blue">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="py-10 w-full flex justify-center">
            <Image src={MainPageLogo} alt="Logo Image" />
          </div>
          <div
            className={clsx("h-1 bg-primary-red mt-5")}
            style={{
              width: `${percentage}%`,
            }}
          ></div>
        </div>
        <div className="text-right">
          <h1 className="font-inter font-normal text-[130px] leading-[158px] xl:text-[300px] xl:leading-[363px] text-white">
            {percentage} %
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MainLoader;
