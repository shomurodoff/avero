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
      <div className="px-[15px] md:px-8 xl:px-[60px] font-graphik">
        <h2 className="text-2xl text-[#90A18B] font-medium mb-4 font-inter">
          Sevimli o'rindiq
        </h2>
        <p className="text-[32px] md:text-[40px] xl:text-[65px] leading-[42px] md:leading-[50px] xl:leading-[77.5px] font-normal font-inter">
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
      <section className="px-[15px] md:px-8 xl:px-[60px] font-montserrat mb-40">
        <div className="bg-primary-blue rounded-[25px] py-8 md:py-10  px-5 md:px-8 text-white grid grid-cols-12 grid-rows-5">
          <div className="col-span-12 md:col-span-7 row-span-3 md:row-span-6">
            <p className="text-2xl lg:text-[35px] lg:leading-[45px] mb-7 md:mb-16 max-w-[475px]">
              Biron bir o'rindiq tanlamoqchi bo'lsangiz, jo'nashdan kamida 24
              soat oldin xizmatga buyurtma bering.
            </p>
            <button className="font-poppins bg-primary-red px-6 py-4 text-base rounded-[10px]">
              O’rindiq tanlash
            </button>
          </div>
          <div className="col-span-12 md:col-span-5 row-span-2 md:row-span-6">
            <div className="relative w-full h-full mt-8">
              <Image
                src={seatOrderImage}
                quality={100}
                alt="image Girl"
                className="absolute -bottom-1/2 md:-bottom-1/4 lg:-bottom-1/3  left-0 lg:-left-12 xl:left-4  z-10 w-60 h-60  md:w-64 md:h-64 lg:w-[400px] lg:h-[400px]"
              />
              <div className="bg-primary-red w-[168px] md:w-60 h-[168px] md:h-60 lg:w-[320px] lg:h-[320px] rounded-full absolute -bottom-12 md:bottom-0 md:right-2 right-8"></div>
              <Image
                src={seatOrderRingImage}
                quality={100}
                alt="image Girl"
                className="absolute -bottom-2/3 md:-bottom-1/3 right-11 md:-right-4 lg:right-8 lg:h-[400px] lg:w-[150px] lg:rotate-12"
              />
              <Image
                src={seatOrderRingImage}
                quality={100}
                alt="image Girl"
                className="absolute -bottom-2/3 md:-bottom-1/3 -right-3 md:-right-10  lg:h-[400px] lg:w-[150px] lg:rotate-12"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
