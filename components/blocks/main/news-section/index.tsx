import Image from "next/image";
import React from "react";
import { newsOne, newsThree, newsTwo } from "../../../../assets/images/news";
import { Container } from "../../../../UI";
import Heading from "../../../heading";

const Index: React.FC = () => {
  return (
    <Container className="mb-[68px] lg:mb-[120px]">
      <Heading
        title="Yangiliklar"
        subTitle="Engage active clients at the right time and save time chasing unqualified leads"
        titleClass="text-[32px] leading-[45px] md:text-[45px] mb-2"
        subTitleClass="text-sm md:text-base"
        className="mb-6 md:mb-[30px]"
      />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <Image
            src={newsOne}
            alt={"new Image"}
            layout={"responsive"}
            className="mb-6 rounded-[25px]"
          />
          <Heading
            title="Yangi havo sayohati - yangi imkoniyatlar"
            titleClass="text-[18px] md:text-[25px] !font-bold leading-snug mb-2.5 md:mb-6"
            subTitle="12 Sen, 2022"
            subTitleClass="text-sm text-black"
          />
        </div>
        <div className="col-span-12 md:col-span-4">
          <Image
            src={newsTwo}
            alt={"new Image"}
            layout={"responsive"}
            className="mb-6 rounded-[25px]"
          />
          <Heading
            title="Visit Dubai kompaniyasi bilan hamkorlikda tanlovi"
            titleClass="text-[18px] md:text-[25px] !font-bold leading-snug mb-2.5 md:mb-6"
            subTitle="12 Sen, 2022"
            subTitleClass="text-sm text-black"
          />
        </div>
        <div className="col-span-12 md:col-span-4">
          <Image
            src={newsThree}
            alt={"new Image"}
            layout={"responsive"}
            className="mb-6 rounded-[25px]"
          />
          <Heading
            title="Yangi xizmatlarimizdan foydalanib ko’ring"
            titleClass="text-[18px] md:text-[25px] !font-bold leading-snug mb-2.5 md:mb-6"
            subTitle="12 Sen, 2022"
            subTitleClass="text-sm text-black"
          />
        </div>
      </div>
    </Container>
  );
};

export default Index;
