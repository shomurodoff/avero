import Image from "next/image";
import React, { Fragment } from "react";
import {
  seatBannerIcon,
  seatBannerImage,
  seatCircleImage,
  seatOrderImage,
  seatOrderRingImage,
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
      <div className="px-[15px] md:px-10 lg:px-[60px] font-graphik">
        <h2 className="text-2xl text-[#90A18B] font-medium mb-4 font-inter">
          Sevimli o'rindiq
        </h2>
        <p className="text-[32px] leading-[42px] font-normal font-inter">
          Siz o'zingiz uchun afzal ko'rgan o'rindiqni tanlash tanloviga egasiz
        </p>
      </div>
      <div
        className={
          "flex flex-col lg:flex-row items-center justify-center my-16  font-graphik"
        }
      >
        <div
          className={
            "h-[350px] w-[350px] rounded-full flex justify-center items-end relative"
          }
        >
          <Image src={seatCircleImage} alt="image" fill className="-z-10" />
          <div className={"p-12 text-center text-white"}>
            <h3
              className={
                "text-[24px] leading-[34px] font-medium max-w-[150px] mb-3.5 z-10"
              }
            >
              Qo'shimcha o'rindiq
            </h3>
            <p className={"font-montserrat text-xl"}>1-bosqich</p>
          </div>
        </div>
        <div
          className={
            "border-2 border-black h-[350px] w-[350px] rounded-full flex justify-center items-end -mt-10 lg:mt-0 lg:-ml-10"
          }
        >
          <div className={"p-12 text-center"}>
            <h3
              className={
                "text-[24px] leading-[34px] font-medium max-w-[150px] mb-3.5"
              }
            >
              Old o'rindiq qismi
            </h3>
            <p className={"font-montserrat text-xl"}>1-bosqich</p>
          </div>
        </div>
        <div
          className={
            "border-2 border-black h-[350px] w-[350px] rounded-full flex justify-center items-end -mt-10 lg:mt-0 lg:-ml-10"
          }
        >
          <div className={"p-12 text-center"}>
            <h3
              className={
                "text-[24px] leading-[34px] font-medium max-w-[150px] mb-3.5"
              }
            >
              Standart zona o'rindig'i
            </h3>
            <p className={"font-montserrat text-xl"}>1-bosqich</p>
          </div>
        </div>
      </div>
      <section className="px-[15px] font-montserrat mb-40">
        <div className="bg-primary-blue rounded-[25px] py-8 px-5 text-white grid grid-cols-12 grid-rows-5">
          <div className="col-span-12 row-span-3">
            <p className="text-2xl mb-7">
              Biron bir o'rindiq tanlamoqchi bo'lsangiz, jo'nashdan kamida 24
              soat oldin xizmatga buyurtma bering.
            </p>
            <button className="font-poppins bg-primary-red px-6 py-4 text-base rounded-[10px]">
              O’rindiq tanlash
            </button>
          </div>
          <div className="col-span-12 row-span-2">
            <div className="relative w-full h-full mt-8">
              <Image
                src={seatOrderImage}
                alt="image Girl"
                className="absolute -bottom-1/2 left-0 z-10"
              />
              <div className="bg-primary-red w-[168px] h-[168px] rounded-full absolute -bottom-12 right-8"></div>
              <Image
                src={seatOrderRingImage}
                alt="image Girl"
                className="absolute -bottom-2/3 right-11"
              />
              <Image
                src={seatOrderRingImage}
                alt="image Girl"
                className="absolute -bottom-2/3 -right-3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
