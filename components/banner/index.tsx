import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Card from "../card";

interface Props {
  title: string;
  subTitle: string;
  image: StaticImageData;
  icon: StaticImageData;
}

const Index: React.FC<Props> = ({ title, subTitle, image, icon }) => {
  return (
    <div className={clsx("py-10 px-[60px] grid grid-cols-12 gap-6")}>
      <div className="col-span-12 md:col-span-4 order-2 md:order-1 relative rounded-[25px] bg-[#F9EFF1]">
        <div className="py-12 pl-11 pr-20 flex flex-col justify-between h-full">
          <h3 className="text-[45px] leading-[60px] font-montserrat font-bold">
            {title}
          </h3>
          <p className="text-[#90A18B] text-base">{subTitle}</p>
        </div>
        <div className="absolute bg-primary-red p-5 md:p-16 rounded-full -top-1/3 translate-y-2/3  right-1/4 translate-x-1/2  md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:translate-x-2/4 z-10">
          <Image src={icon} alt="Icon Image" />
        </div>
      </div>
      <div className="col-span-12 md:col-span-8 relative  order-1 md:order-2">
        <Image src={image} alt="Image" height={500} layout={"responsive"} />
      </div>
    </div>
  );
};

export default Index;
