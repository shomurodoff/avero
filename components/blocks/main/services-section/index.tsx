import { get, map } from "lodash";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import {
  bgCar,
  bgCase,
  bgMeal,
  bgServices,
  bgSofa,
  carImage,
  caseImage,
  mealImage1,
  mealImage2,
  mealImage3,
  sofaImage,
} from "../../../../assets/images/services";
import { coopiratives } from "../../../../mock/coopiratives";
import Card from "../../../card";
import Heading from "../../../heading";

const ArrowButton = ({ ...rest }) => {
  return (
    <button className="py-2 px-5 border-2 border-black rounded-2xl" {...rest}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_429_107)">
          <path
            d="M16.172 10.9997L10.808 5.63568L12.222 4.22168L20 11.9997L12.222 19.7777L10.808 18.3637L16.172 12.9997H4V10.9997H16.172Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_429_107">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

const Index = () => {
  return (
    <Fragment>
      <section className="pt-28 pb-44 px-[15px] md:px-8 xl:px-[60px]">
        <Heading
          title="Bizning xizmatlar"
          subTitle="Engage active clients at the right time and save time chasing unqualified leads"
          titleClass="text-[32px] leading-[45px] md:text-[45px] mb-2"
        />
        <div className="grid grid-cols-12 gap-6 mb-28">
          <Card className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col justify-between -z-20">
            <Heading
              title="O‘rindiqni tanlash"
              subTitle="Engage active clients at the right time and save time chasing"
              titleClass="text-[20px] lg:text-[32px]"
              subTitleClass="text-sm md:text-base"
              className="mb-2.5 lg:mb-5 px-9 pt-9"
            />
            <div className="px-9">
              <ArrowButton />
            </div>
            <div className="relative h-64 lg:h-96">
              <div className="z-50 absolute bottom-0">
                <Image
                  src={sofaImage}
                  alt="sofa image"
                  className="z-[10000] "
                />
              </div>
              <div className="-z-10 absolute top-20 lg:top-28 right-1/4 w-[155px]">
                <Image src={bgSofa} alt="sofa image" />
              </div>
            </div>
          </Card>
          <Card className="col-span-12 md:col-span-6 lg:col-span-7 flex flex-col justify-between -z-20">
            <Heading
              title="Mazzali taomnoma"
              subTitle="Engage active clients at the right time and save time chasing unqualified leads"
              titleClass="text-[20px] lg:text-[32px]"
              subTitleClass="text-sm md:text-base"
              className="mb-2.5 lg:mb-5 px-9 pt-9"
            />
            <div className="px-9">
              <ArrowButton />
            </div>
            <div className="grid grid-cols-12 h-64 lg:h-96 relative">
              <Image
                src={bgMeal}
                alt="sofa image"
                className="absolute top-1/2  left-1/2 -translate-y-1/2 -translate-x-1/2 w-48 lg:w-64 -z-10"
              />
              <div className="col-span-12 justify-self-center ">
                <Image
                  src={mealImage2}
                  alt="sofa image"
                  className="w-20 lg:w-36"
                />
              </div>
              <div className="col-span-6 align-self-end relative">
                <Image
                  src={mealImage1}
                  alt="sofa image"
                  layout="fill"
                  className="rounded-bl-[25px] w-full"
                />
              </div>
              <div className="col-span-5 justify-self-center align-self-center">
                <Image
                  src={mealImage3}
                  alt="sofa image"
                  className="w-28 lg:w-52"
                />
              </div>
            </div>
          </Card>
          <Card className="col-span-12 md:col-span-6 lg:col-span-7  flex flex-col justify-between -z-20">
            <Heading
              title="Yuklaringiz xavfsizligi"
              subTitle="Engage active clients at the right time and save time chasing unqualified leads"
              titleClass="text-[20px] lg:text-[32px]"
              subTitleClass="text-sm md:text-base"
              className="mb-2.5 lg:mb-5 px-9 pt-9"
            />
            <div className="px-9">
              <ArrowButton />
            </div>
            <div className="relative h-64 lg:h-96">
              <div className="z-50 absolute bottom-0">
                <Image
                  src={caseImage}
                  alt="sofa image"
                  className="z-[10000] "
                />
              </div>
              <div className="-z-10 absolute top-1/2 -translate-y-1/2">
                <Image src={bgCase} alt="sofa image" />
              </div>
            </div>
          </Card>
          <Card className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col justify-between -z-20">
            <Heading
              title="Fast treck, CIP, VIP"
              subTitle="Engage active clients at the right time and save time chasing unqualified leads"
              titleClass="text-[20px] md:text-[32px]"
              subTitleClass="text-sm md:text-base"
              className="mb-2.5 md:mb-5 px-9 pt-9"
            />
            <div className="px-9">
              <ArrowButton />
            </div>
            <div className="relative h-64 lg:h-96">
              <div className="z-50 absolute bottom-0">
                <Image
                  src={carImage}
                  alt="sofa image"
                  className="z-[10000] rounded-bl-[20px]"
                />
              </div>
              <div className="-z-10 absolute top-1/2 -translate-y-1/2">
                <Image src={bgCar} alt="sofa image" />
              </div>
            </div>
          </Card>
        </div>
        <div className="min-h-[350px] md:min-h-[400px] xl:min-h-[620px] bg-our-services mx-[-15px] md:-mx-8 xl:-mx-[60px] my-28  flex items-center text-white font-montserrat">
          <div className="grid grid-cols-12 px-[15px] md:px-8 xl:px-[60px]">
            <div className="col-span-12 md:col-span-6 xl:col-span-6">
              <h2 className="max-w-2xl text-[45px] font-bold leading-[60px] mb-2 hidden lg:block">
                Aviachipta sotib olgandan keyingi xizmatlar
              </h2>
              <h3 className="lg:hidden text-[32px] leading-[45px] font-bold">
                Bizning xizmatlar
              </h3>
              <p className="text-base font-inter font-normal hidden lg:block max-w-2xl xl:mb-8">
                Effortless time tracking and reporting. Save time and money with
                the time tracker trusted by more than 10,000 organizations.
              </p>
              <p className="lg:hidden">
                Engage active clients at the right time and save time chasing
                unqualified leads
              </p>
              <button className="bg-primary-red px-16 py-4 rounded-[10px] text-[22px] font-medium text-white font-inter mt-2.5">
                Izlash
              </button>
            </div>
            <div className="hidden xl:block xl:col-span-1 "></div>
            <div className="col-span-12 md:col-span-6 xl:col-span-5 relative mt-8 md:mt-16">
              <div className="absolute bg-[#F9EFF1] p-8 rounded-[25px] w-full text-black lg:-bottom-full xl:translate-y-1/3">
                <h6 className="text-sm md:text-base lg:text-xl font-inter font-semibold leading-5 max-w-[150px] md:max-w-[200px]">
                  Biz bilan hamkor avia kompaniyalar
                </h6>
                <div className="grid grid-cols-12 gap-2 lg:gap-8 align-middle">
                  {map(coopiratives, (cooperative) => (
                    <div className="col-span-4 flex items-center">
                      <Image
                        src={get(cooperative, "image")}
                        alt="Logo"
                        layout="responsive"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Index;
