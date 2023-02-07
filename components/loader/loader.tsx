import { isEqual } from "lodash";
import Image from "next/image";
import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { MainPageLogo } from "../../layout/images";
import {
  CloudBottom,
  CloudBottomSm,
  CloudTop,
  CloudTopSm,
  UzbPlane,
} from "./images";
import VideoLoader from "./video-loader";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  function loader() {
    let percent = 0,
      t = setInterval(function () {
        percent = percent + 1;
        document.querySelector<Element | null | any>(
          ".loader_percent"
        ).textContent = percent + "%";
        if (percent >= 100) {
          clearInterval(t);
          percent = 0;
          setIsLoading(false);
        }
      }, 25);
  }
  if (isLoading) {
    loader();
  }

  if (!isLoading) {
    return <VideoLoader />;
  }

  return (
    <div className="fixed inset-0 bg-primary-blue flex flex-col justify-between">
      <div>
        <div className="py-10 w-full flex justify-center">
          <Image src={MainPageLogo} alt="Logo Image" />
        </div>
        <div className="w-9/12 h-1 bg-primary-red mt-5"></div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-2/3">
          <Image
            src={UzbPlane}
            alt="Image Cloud"
            className="absolute bottom-12 md:bottom-0 w-11/12 md:w-1/2"
          />
          <Image
            src={CloudTop}
            alt="Image Cloud"
            className="absolute bottom-36 left-0 hidden md:block"
          />
          <div className="absolute right-0 bottom-20 w-full h-96 md:hidden">
            <Image src={CloudTopSm} alt="Image Cloud" fill />
          </div>
          <Image
            src={CloudBottom}
            alt="Image Cloud"
            className="absolute bottom-0 left-0 hidden md:block"
          />
          <div className="absolute right-0 -bottom-16 w-full h-96 md:hidden">
            <Image src={CloudBottomSm} alt="Image Cloud" fill />
          </div>
        </div>
        <div className="flex justify-end w-1/3">
          <h1 className="font-inter font-normal text-[130px] leading-[158px] lg:text-[300px] lg:leading-[363px] text-white loader_percent"></h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
