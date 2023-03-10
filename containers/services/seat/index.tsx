import Image from "next/image";
import React, { Fragment } from "react";
import {
  seatBannerImage,
  seatCircleImage,
  seatOrderImage,
  seatOrderRingImage,
} from "../../../assets/images/services/seat-services";
import { Banner } from "../../../components";
import { borderBottom } from "../../../assets/images/hero";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <Fragment>
      <Banner
        title="O’zingiz uchun qulay o‘rindiq tanlang"
        subTitle="Engage active clients at the right time and save time chasing unqualified leads. clients at the right time and save time"
        image={seatBannerImage}
      />
      <div className="relative mt-10 lg:mt-40 lg:mb-24">
        <div className="font-graphik">
          <h2 className="text-2xl text-[#90A18B] font-medium mb-4 font-inter">
            Sevimli o'rindiq
          </h2>
          <p className="text-[32px] md:text-[40px] xl:text-[65px] leading-[42px] md:leading-[50px] xl:leading-[77.5px] font-normal font-inter max-w-5xl">
            Siz o'zingiz uchun afzal ko'rgan o'rindiqni tanlash tanloviga egasiz
          </p>
          <div className="w-[190px]  lg:w-[450px]  h-[100px] lg:h-[300px] bg-[#FF354DBA] blur-[50px] lg:blur-[125px] absolute top-0 right-0 opacity-50 -z-10"></div>
          <div className="w-[175px]  lg:w-[450px] h-[92px] lg:h-[300px] bg-[#2C7FFE] blur-[50px] lg:blur-[125px] absolute top-0 translate-x-full opacity-50 -z-10"></div>
        </div>
      </div>
      <div className="flex justify-center mb-24 lg:mb-36">
        <div className="inline-flex  flex-col lg:flex-row items-center justify-center  font-graphik">
          <div className="border-2 border-black hover:border-transparent hover:border-2 h-[350px] w-[350px]  2xl:h-[460px] 2xl:w-[460px]  rounded-full flex justify-center items-end  relative group cursor-pointer">
            <Image
              src={seatCircleImage}
              alt="image"
              fill
              className="-z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
            />
            <div className="p-12 text-center  group-hover:text-white">
              <h3 className="text-[24px] leading-[34px] font-medium max-w-[150px] mb-3.5 z-10">
                Qo'shimcha o'rindiq
              </h3>
              <p className="font-montserrat text-xl">1-bosqich</p>
            </div>
          </div>
          <div className="border-2 border-black hover:border-transparent hover:border-2  h-[350px] w-[350px]  2xl:h-[460px] 2xl:w-[460px] rounded-full flex justify-center items-end -mt-10 lg:mt-0 lg:-ml-10 relative group cursor-pointer">
            <div className="p-12 text-center  group-hover:text-white">
              <h3 className="text-[24px] leading-[34px] font-medium max-w-[150px] mb-3.5">
                Old o'rindiq qismi
              </h3>
              <p className={"font-montserrat text-xl"}>2-bosqich</p>
            </div>
            <Image
              src={seatCircleImage}
              alt="image"
              fill
              className="-z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="border-2 border-black hover:border-transparent hover:border-2  h-[350px] w-[350px]  2xl:h-[460px] 2xl:w-[460px]  rounded-full flex justify-center items-end -mt-10 lg:mt-0 lg:-ml-10  relative group cursor-pointer">
            <div className="p-12 text-center  group-hover:text-white">
              <h3
                className={
                  "text-[24px] leading-[34px] font-medium max-w-[150px] mb-3.5"
                }
              >
                Standart zona o'rindig'i
              </h3>
              <p className={"font-montserrat text-xl"}>3-bosqich</p>
            </div>
            <Image
              src={seatCircleImage}
              alt="image"
              fill
              className="-z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
            />
          </div>
        </div>
      </div>
      <section className="font-montserrat mb-40">
        <div className="bg-primary-blue rounded-[25px] py-8 md:py-10  px-5 md:px-8 text-white grid grid-cols-12 grid-rows-5 mb-40 gap-y-24 md:gap-y-0">
          <div className="col-span-12 md:col-span-7 row-span-3 md:row-span-6 ">
            <p className="font-graphik font-medium text-2xl lg:text-[35px] lg:leading-[45px] mb-7 md:mb-16 max-w-[475px]">
              Biron bir o'rindiq tanlamoqchi bo'lsangiz, jo'nashdan kamida{" "}
              <span className="inline-block relative text-primary-red">
                24 soat
                <Image
                  src={borderBottom}
                  alt="Image"
                  className="w-full absolute"
                />
              </span>{" "}
              oldin xizmatga buyurtma bering.
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
      <div className="fixed md:static bottom-0 inset-x-0 z-50 bg-white bg-opacity-90  md:bg-[#F9F9F9] py-5 px-6 md:rounded-medium flex flex-col gap-y-4 md:flex-row justify-between  md:mb-8 shadow-[0px_-2px_4px_rgba(121,121,121,0.35)] md:shadow-none">
        <div>
          <h2 className="font-graphik text-[32px] leading-[44px] font-medium flex items-center gap-2">
            14D <span className="w-6 inline-block h-0.5 bg-black" />
            75 000
            <span className="opacity-40">UZS</span>
          </h2>
          <p className="font-inter text-xs leading-5">
            Havo kemasida sizning joyingiz. Haq to‘lanmaganda bronlash 24
            soatdan so‘ng bekor qilinadi.
          </p>
        </div>
        <div className="flex gap-3">
          <button className=" border-2 border-black  rounded-default font-inter text-sm leading-4 font-semibold py-4 px-9">
            Bekor qilish
          </button>
          <button
            onClick={() => router.push("/payment")}
            className=" bg-primary-red rounded-default font-inter text-sm text-white leading-4 font-semibold py-4 px-9 border-2 border-transparent"
          >
            To’lash
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
