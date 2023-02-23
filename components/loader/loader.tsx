import clsx from "clsx";
import { filter, find, get, isEqual, map } from "lodash";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { MainPageLogo } from "../../layout/images";
import {
  AzerPlane,
  CloudBottom,
  CloudBottomSm,
  CloudTop,
  CloudTopSm,
  QatarPlane,
  RusPlane,
  TurkPlane,
  UzbPlane,
} from "./images";
import VideoLoader from "./video-loader";

interface Props {
  airway: string | undefined | any;
}

const planes = [
  { id: 1, title: "uzairways", image: UzbPlane },
  { id: 2, title: "qatarairways", image: QatarPlane },
  { id: 3, title: "rusairways", image: RusPlane },
  { id: 4, title: "azerairways", image: AzerPlane },
  { id: 5, title: "turkairways", image: TurkPlane },
];

const Loader: React.FC<Props> = ({ airway }) => {
  const [percentage, setPercentage] = useState<number>(0);

  const upTo = percentage < 100;
  useEffect(() => {
    const intervalId: any =
      upTo && setInterval(() => setPercentage((t) => t + 1), 80);
    return () => clearInterval(intervalId);
  }, [upTo]);

  return (
    <div className="fixed inset-0 bg-primary-blue z-[99999]">
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
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-6 relative">
            <Image
              src={get(
                find(planes, (plane) => {
                  return isEqual(get(plane, "title"), airway);
                }),
                "image",
                RusPlane
              )}
              alt="Image Cloud"
              className="absolute bottom-12 md:bottom-0 w-11/12 md:w-1/2"
            />
            <Image
              src={CloudTop}
              alt="Image Cloud"
              className="absolute bottom-36 left-0 hidden md:block animate-moving-slow"
            />
            <div className="absolute right-0 bottom-20 w-full h-96 md:hidden animate-moving-slow">
              <Image src={CloudTopSm} alt="Image Cloud" fill />
            </div>
            <Image
              src={CloudBottom}
              alt="Image Cloud"
              className="absolute bottom-0 left-0 hidden md:block animate-moving-slow"
            />
            <div className="absolute right-0 -bottom-16 w-full h-96 md:hidden animate-moving-slow">
              <Image src={CloudBottomSm} alt="Image Cloud" fill />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 text-right">
            <h1 className="font-inter font-normal text-[130px]  leading-[158px] xl:text-[200px] xl:leading-[200px]  2xl:text-[300px] 2xl:leading-[363px] text-white">
              {percentage} %
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
