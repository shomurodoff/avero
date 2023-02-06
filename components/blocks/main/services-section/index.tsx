import { get, map } from "lodash";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import { ArrowButton } from "../../..";
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
import { Container } from "../../../../UI";
import Card from "../../../card";
import Heading from "../../../heading";

const Index = () => {
  return (
    <Fragment>
      <Container
        className={
          "mt-[120px] px-[15px] md:px-8 lg:px-[60px] overflow-x-hidden"
        }
      >
        <Heading
          title="Bizning xizmatlar"
          subTitle="Engage active clients at the right time and save time chasing unqualified leads"
          titleClass="text-[32px] leading-[45px] md:text-[45px] mb-2"
        />
        <div className="grid grid-cols-12 gap-6">
          <Card className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col justify-between p-9 bg-[#F9EFF1] relative group">
            <div>
              <Heading
                title="O‘rindiqni tanlash"
                subTitle="Engage active clients at the right time and save time chasing"
                titleClass="text-[20px] lg:text-[32px]"
                subTitleClass="text-sm md:text-base max-w-sm"
                className="mb-2.5 lg:mb-5"
              />
              <div>
                <ArrowButton
                  onClick={() => {
                    console.log("Working");
                  }}
                />
              </div>
            </div>
            <div className="relative h-64 lg:h-96 xl:h-[26rem]">
              <div className="absolute -bottom-9 z-10">
                <Image src={sofaImage} alt="sofa image" />
              </div>
              <div className="absolute top-24 lg:top-28 right-1/4 w-[170px] lg:w-52 ">
                <Image src={bgSofa} alt="sofa image" />
              </div>
            </div>
            <div className="video-player  w-[150px]  lg:w-[200px] xl:w-[250px] h-[150px] lg:h-[200px]  xl:h-[250px] absolute right-9 z-10 top-20 md:top-32 hidden group-hover:block">
              <ReactPlayer
                url={
                  "https://www.youtube.com/watch?v=41H5xEI5QmE?controls=0&loop=1?autoplay=1"
                }
                playing
                loop
                autoPlay
                muted={true}
                className="video-circle bg-slate-500"
              />
            </div>
          </Card>
          <Card className="col-span-12 md:col-span-6 lg:col-span-7 flex flex-col justify-between p-9 bg-[#F9EFF1] relative group">
            <div>
              <Heading
                title="O‘rindiqni tanlash"
                subTitle="Engage active clients at the right time and save time chasing"
                titleClass="text-[20px] lg:text-[32px]"
                subTitleClass="text-sm md:text-base max-w-sm"
                className="mb-2.5 lg:mb-5"
              />
              <div>
                <ArrowButton
                  onClick={() => {
                    console.log("Working");
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-12 h-64 lg:h-96 xl:h-[26rem] relative -mx-9 -mb-9">
              <Image
                src={bgMeal}
                alt="sofa image"
                className="absolute top-1/2  left-1/2 -translate-y-1/2 -translate-x-1/2 w-48 lg:w-64"
              />
              <div className="col-span-12 justify-self-center z-10">
                <Image
                  src={mealImage2}
                  alt="sofa image"
                  className="w-20 lg:w-36 z-10"
                />
              </div>
              <div className="col-span-6 align-self-end relative z-10">
                <Image
                  src={mealImage1}
                  alt="sofa image"
                  layout="fill"
                  className="rounded-bl-[25px] !w-9/12 z-10 "
                />
              </div>
              <div className="col-span-5 justify-self-center align-self-center z-10">
                <Image
                  src={mealImage3}
                  alt="sofa image"
                  className="w-28 lg:w-52 z-10"
                />
              </div>
            </div>
            <div className="video-player  w-[150px]  lg:w-[200px] xl:w-[250px] h-[150px] lg:h-[200px]  xl:h-[250px] absolute right-9 z-30 top-20 md:top-32 hidden group-hover:block">
              <ReactPlayer
                url={
                  "https://www.youtube.com/watch?v=41H5xEI5QmE?controls=0&loop=1?autoplay=1"
                }
                playing
                loop
                autoPlay
                muted={true}
                className="video-circle bg-slate-500"
              />
            </div>
          </Card>
          <Card className="col-span-12 md:col-span-6 lg:col-span-7  flex flex-col justify-between p-9 bg-[#F9EFF1] relative group">
            <div>
              <Heading
                title="Yuklaringiz xavfsizligi"
                subTitle="Engage active clients at the right time and save time chasing unqualified leads"
                titleClass="text-[20px] lg:text-[32px]"
                subTitleClass="text-sm md:text-base max-w-sm"
                className="mb-2.5 lg:mb-5"
              />
              <div>
                <ArrowButton
                  onClick={() => {
                    console.log("Working");
                  }}
                />
              </div>
            </div>
            <div className="relative h-64 lg:h-96 xl:h-[26rem]  -mx-9 -mb-9">
              <div className="z-50 absolute bottom-0">
                <Image src={caseImage} alt="sofa image" />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2">
                <Image src={bgCase} alt="sofa image" />
              </div>
            </div>
            <div className="video-player  w-[150px]  lg:w-[200px] xl:w-[250px] h-[150px] lg:h-[200px]  xl:h-[250px] absolute right-9 z-10 top-20 md:top-32 hidden group-hover:block">
              <ReactPlayer
                url={
                  "https://www.youtube.com/watch?v=41H5xEI5QmE?controls=0&loop=1?autoplay=1"
                }
                playing
                loop
                autoPlay
                muted={true}
                className="video-circle bg-slate-500"
              />
            </div>
          </Card>
          <Card className="col-span-12 md:col-span-6 lg:col-span-5  flex flex-col justify-between p-9 bg-[#F9EFF1] relative group">
            <div>
              <Heading
                title="Fast treck, CIP, VIP"
                subTitle="Engage active clients at the right time and save time chasing unqualified leads"
                titleClass="text-[20px] lg:text-[32px]"
                subTitleClass="text-sm md:text-base max-w-sm"
                className="mb-2.5 lg:mb-5"
              />
              <div>
                <ArrowButton
                  onClick={() => {
                    console.log("Working");
                  }}
                />
              </div>
            </div>
            <div className="relative h-64 lg:h-96 xl:h-[26rem]  -mx-9 -mb-9">
              <div className="z-50 absolute bottom-0">
                <Image
                  src={carImage}
                  alt="sofa image"
                  className="rounded-bl-[20px]"
                />
              </div>
              <div className="absolute top-1/3 -translate-y-1/2 w-1/2 md:w-full">
                <Image src={bgCar} alt="sofa image" />
              </div>
            </div>
            <div className="video-player  w-[150px]  lg:w-[200px] xl:w-[250px] h-[150px] lg:h-[200px]  xl:h-[250px] absolute right-9 z-10 top-20 md:top-32 hidden group-hover:block">
              <ReactPlayer
                url={
                  "https://www.youtube.com/watch?v=41H5xEI5QmE?controls=0&loop=1?autoplay=1"
                }
                playing
                loop
                autoPlay
                muted={true}
                className="video-circle bg-slate-500"
              />
            </div>
          </Card>
        </div>
      </Container>
      <div className="relative mt-24 mb-96 md:mb-64">
        <Image
          src={bgServices}
          fill
          objectFit="cover"
          alt="Background Image"
          className="-z-50"
          quality={100}
        />
        <Container className="pt-[126px] lg:pt-[250px] pb-[70px] lg:pb-[86px] px-[15px] md:px-8 lg:px-[60px]">
          <div className="flex flex-col md:flex-row justify-between text-white">
            <div className="max max-w-2xl">
              <h2 className="text-[32px] md:text-[45px] leading-[45px] md:leading-[60px] font-montserrat font-bold mb-[1px] md:mb-2 line-clamp-1 md:line-clamp-4">
                Aviachipta sotib olgandan keyingi xizmatlar
              </h2>
              <p className="text-[16px] leading-[30px] font-inter font-normal mb-2.5 md:mb-8 line-clamp-2 md:line-clamp-4">
                Effortless time tracking and reporting. Save time and money with
                the time tracker trusted by more than 10,000 organizations.
              </p>
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="bg-primary-red px-16 py-4 rounded-[10px] text-[22px] font-medium text-white font-inter mt-2.5"
              >
                Izlash
              </button>
            </div>
            <div className="w-full lg:max-w-xl relative  mt-7 xl:mt-20">
              <div className="bg-[#F9EFF1] w-full lg:max-w-[530px] absolute top-0 p-8 xl:p-[50px]  rounded-[30px]">
                <h3 className="text-[20px] leading-[30px] font-semibold font-inter max-w-[200px] text-[#202020] mb-8 md:mb-14">
                  Biz bilan hamkor avia kompaniyalar
                </h3>
                <div className="grid grid-cols-12 gap-2 lg:gap-8 align-middle mb-2 md:mb-10">
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
        </Container>
      </div>
    </Fragment>
  );
};

export default Index;
