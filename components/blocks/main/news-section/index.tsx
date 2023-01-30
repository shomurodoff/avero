import Image from "next/image";
import React from "react";
import { newsOne, newsThree, newsTwo } from "../../../../assets/images/news";
import Card from "../../../card";
import Heading from "../../../heading";

const Index: React.FC = () => {
  return (
    <section className="pb-28 px-[15px] md:px-8 xl:px-[60px]">
      <Heading
        title="Yangiliklar"
        subTitle="Engage active clients at the right time and save time chasing unqualified leads"
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
            titleClass="text-[25px] !font-bold leading-snug mb-6"
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
            titleClass="text-[25px] !font-bold leading-snug mb-6"
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
            titleClass="text-[25px] !font-bold leading-snug mb-6"
            subTitle="12 Sen, 2022"
            subTitleClass="text-sm text-black"
          />
        </div>
      </div>
    </section>
  );
};

export default Index;
