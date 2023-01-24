import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  title: string;
  subTitle: string;
  image: StaticImageData;
  icon: StaticImageData;
}

const Index: React.FC<Props> = ({ title, subTitle, image, icon }) => {
  return (
    <div className="grid grid-cols-12 gap-4 lg:gap-6 px-4 py-4 md:py-11 md:px-10 lg:px-[60px]">
      <div className="col-span-12 md:col-span-5 lg:col-span-4 bg-[#F9EFF1] relative flex flex-col justify-between order-2 md:order-none rounded-[25px] px-[20px] pt-16 pb-9 md:px-10 md:pt-12 md:pb-10">
        <div className="w-32 h-32 lg:w-36 lg:h-36 bg-primary-red rounded-full flex items-center justify-center z-10 absolute -top-[72px] right-6 md:top-1/2 md:-translate-y-1/2 md:-right-[72px] lg:-right-[84px] shadow-[0_38px_38px_rgba(184, 196, 147, 0.3)]">
          <Image src={icon} alt="Icon Image" />
        </div>
        <h3 className="text-[28px] md:text-[36px] lg:text-[45px] leading-[38px] md:leading-[48px] lg:leading-[60px] font-montserrat font-bold mb-4">
          {title}
        </h3>
        <p className="text-[#90A18B] text-sm md:text-base">{subTitle}</p>
      </div>
      <div className="col-span-12 md:col-span-7 lg:col-span-8 h-[400px] lg:h-[500px] order-1 relative">
        <Image
          src={image}
          alt="Image"
          fill
          objectFit="cover"
          className="rounded-[25px]"
        />
      </div>
    </div>
  );
};

export default Index;
