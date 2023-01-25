import React, { Fragment } from "react";
import {
  seatBannerIcon,
  seatBannerImage,
} from "../../../assets/images/services/seat-services";
import { Banner } from "../../../components";

const Index = () => {
  return (
    <div>
      <Banner
        title="O’zingiz uchun qulay o‘rindiq tanlang"
        subTitle="Engage active clients at the right time and save time chasing unqualified leads. clients at the right time and save time"
        image={seatBannerImage}
        icon={seatBannerIcon}
      />
      <div className="px-[15px] md:px-10 lg:px-[60px] ">
        <h2 className="text-2xl text-[#90A18B] font-medium mb-4 font-inter">
          Sevimli o'rindiq
        </h2>
        <p className="text-[32px] leading-[42px] font-normal font-inter">
          Siz o'zingiz uchun afzal ko'rgan o'rindiqni tanlash tanloviga egasiz
        </p>
      </div>
      <div
        className={
          "flex flex-col lg:flex-row items-center justify-center my-16"
        }
      >
        <div
          className={
            "border border-2 border-black h-[350px] w-[350px] rounded-full flex justify-center items-end"
          }
        >
          <div className={"p-12 text-center"}>
            <h3
              className={
                "text-[24px] leading-[34px] font-medium max-w-[150px] mb-3.5"
              }
            >
              Qo'shimcha o'rindiq
            </h3>
            <p className={"font-montserrat text-xl"}>1-bosqich</p>
          </div>
        </div>
        <div
          className={
            "border border-2 border-black h-[350px] w-[350px] rounded-full flex justify-center items-end -mt-10 lg:mt-0 lg:-ml-10"
          }
        >
          <div className={"p-12 text-center"}>
            <h3
              className={
                "text-[24px] leading-[34px] font-medium max-w-[150px] mb-3.5"
              }
            >
              Qo'shimcha o'rindiq
            </h3>
            <p className={"font-montserrat text-xl"}>1-bosqich</p>
          </div>
        </div>
        <div
          className={
            "border border-2 border-black h-[350px] w-[350px] rounded-full flex justify-center items-end -mt-10 lg:mt-0 lg:-ml-10"
          }
        >
          <div className={"p-12 text-center"}>
            <h3
              className={
                "text-[24px] leading-[34px] font-medium max-w-[150px] mb-3.5"
              }
            >
              Qo'shimcha o'rindiq
            </h3>
            <p className={"font-montserrat text-xl"}>1-bosqich</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
