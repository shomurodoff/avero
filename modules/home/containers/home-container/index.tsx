import { map, get } from "lodash";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import React, { Fragment } from "react";
import { ArrowButton, Heading, SearchForm } from "../../../../components";
import Card from "../../../../components/card";
import { Container } from "../../../../UI";
import { CabinIcon } from "../../components";
import {
  BgBottom,
  BgTop,
  borderBottom,
  newsOne,
  newsTwo,
  newsThree,
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
  astanaAirway,
  azerAirway,
  chinaAirway,
  turkishAirway,
  uzAirway,
} from "../../images";

const newsData: {
  id: number;
  title: string;
  releaseTime: string;
  image: StaticImageData;
}[] = [
  {
    id: 1,
    title: "Yangi havo sayohati - yangi imkoniyatlar",
    releaseTime: "12 Sen, 2022",
    image: newsOne,
  },
  {
    id: 2,
    title: "Visit Dubai kompaniyasi bilan hamkorlikda tanlovi",
    releaseTime: "12 Sen, 2022",
    image: newsTwo,
  },
  {
    id: 3,
    title: "Yangi xizmatlarimizdan foydalanib ko’ring",
    releaseTime: "12 Sen, 2022",
    image: newsThree,
  },
];

const coopiratives: { id: number; image: StaticImageData }[] = [
  { id: 1, image: uzAirway },
  { id: 2, image: turkishAirway },
  { id: 3, image: azerAirway },
  { id: 4, image: astanaAirway },
  { id: 5, image: chinaAirway },
];

const Index = () => {
  return (
    <Fragment>
      <Head>
        <title>Avero | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="font-inter text-2xl font-bold bg-[#043785] relative -z-0 text-white">
        <Container className="py-28 md:py-[90px]">
          <div className="text-center  mb-10">
            <h1 className="text-[44px] leading-[60px] md:text-[80px] md:leading-[90px] lg:text-[110px] lg:leading-[120px] font-bold font-montserrat !wider-tracking mb-2.5 max-w-xs md:max-w-4xl  mx-auto">
              Qulay{" "}
              <span className="relative">
                <span className="italic text-primary-red h-full  items-center inline-flex gap-2">
                  <span className="bg-primary-red p-[9.5px] md:p-[17.5px] rounded-full">
                    <CabinIcon />
                  </span>
                  <span>avia</span>
                  <Image
                    src={borderBottom}
                    quality={100}
                    alt="Line Image"
                    className="absolute -bottom-1 w-full"
                  />
                </span>
              </span>{" "}
              yordamchingiz
            </h1>
            <h3 className="text-lg md:text-2xl font-inter font-normal max-w-xl mx-auto">
              Joy band qiling, mos ovqat tanlang va boshqalar xizmatlardan
              foydalaning
            </h3>
          </div>
          <SearchForm />
        </Container>
        <Image
          src={BgBottom}
          alt="Background Image"
          className="absolute bottom-0 right-0 -z-0 w-56 md:w-72 lg:w-96"
        />
        <Image
          src={BgTop}
          alt="Background Image"
          className="absolute  -top-20 left-0 -z-0  w-56 md:w-72 lg:w-96"
        />
      </section>
      <section>
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
            <Card className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col justify-between p-9 bg-[#F9EFF1] relative group cursor-pointer">
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
              <div className="video-player   absolute right-9 z-10 top-32 md:top-36 hidden group-hover:block">
                <video
                  autoPlay
                  loop
                  muted
                  className="object-cover w-[150px] lg:w-[200px] xl:w-[250px] h-[150px] lg:h-[200px]  xl:h-[250px]"
                >
                  <source src="/seat-video.mp4"></source>
                </video>
              </div>
            </Card>
            <Card className="col-span-12 md:col-span-6 lg:col-span-7 flex flex-col justify-between p-9 bg-[#F9EFF1] relative group cursor-pointer">
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
              <div className="video-player   absolute right-9 z-10 top-32 md:top-36 hidden group-hover:block">
                <video
                  autoPlay
                  loop
                  muted
                  className="object-cover w-[150px] lg:w-[200px] xl:w-[250px] h-[150px] lg:h-[200px]  xl:h-[250px]"
                >
                  <source src="/food-video.mp4"></source>
                </video>
              </div>
            </Card>
            <Card className="col-span-12 md:col-span-6 lg:col-span-7  flex flex-col justify-between p-9 bg-[#F9EFF1] relative group cursor-pointer">
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
                <div className="z-50 absolute bottom-0 w-4/5 md:w-full">
                  <Image src={caseImage} alt="sofa image" />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2">
                  <Image src={bgCase} alt="sofa image" />
                </div>
              </div>
              <div className="video-player   absolute right-9 z-10 top-32 md:top-36 hidden group-hover:block">
                <video
                  autoPlay
                  loop
                  muted
                  className="object-cover w-[150px] lg:w-[200px] xl:w-[250px] h-[150px] lg:h-[200px]  xl:h-[250px]"
                >
                  <source src="/case-video.mp4"></source>
                </video>
              </div>
            </Card>
            <Card className="col-span-12 md:col-span-6 lg:col-span-5  flex flex-col justify-between p-9 bg-[#F9EFF1] relative group cursor-pointer">
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
                    className="rounded-bl-[20px] w-3/4 md:w-full"
                  />
                </div>
                <div className="absolute top-1/3 -translate-y-1/2 w-1/3 md:w-full">
                  <Image src={bgCar} alt="sofa image" />
                </div>
              </div>
              <div className="video-player   absolute right-9 z-10 top-32 md:top-36 hidden group-hover:block">
                <video
                  autoPlay
                  loop
                  muted
                  className="object-cover w-[150px] lg:w-[200px] xl:w-[250px] h-[150px] lg:h-[200px]  xl:h-[250px]"
                >
                  <source src="/airport-services-video.mp4"></source>
                </video>
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
                  Effortless time tracking and reporting. Save time and money
                  with the time tracker trusted by more than 10,000
                  organizations.
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
                      <div
                        className="col-span-4 flex items-center"
                        key={get(cooperative, "id")}
                      >
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
      </section>
      <section>
        <Container className="mt-[100px] md:mt-[120px]">
          <Heading
            title="Yangiliklar"
            subTitle="Engage active clients at the right time and save time chasing unqualified leads"
            titleClass="text-[32px] leading-[45px] md:text-[45px] mb-2"
            className="mb-6 md:mb-[30px]"
          />
          <div className="grid grid-cols-12 gap-6">
            {map(newsData, (news) => (
              <div
                className="col-span-12 md:col-span-4"
                key={get(news, "id", "")}
              >
                <Image
                  src={get(news, "image", "")}
                  alt={"new Image"}
                  layout={"responsive"}
                  className="mb-6 rounded-large"
                />
                <Heading
                  title={get(news, "title", "")}
                  titleClass="!text-[18px] md:!text-[25px] !font-semibold !leading-snug mb-2.5 md:mb-6"
                  subTitle={get(news, "releaseTime", "")}
                  subTitleClass="text-sm text-black"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default Index;