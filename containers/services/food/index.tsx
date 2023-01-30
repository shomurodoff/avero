import clsx from "clsx";
import { get, isNull, map } from "lodash";
import Image from "next/image";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { NumericFormat } from "react-number-format";
import {
  bannerIcon,
  foodBanner,
  foodCloud,
  foodServing,
  foodServingBg,
} from "../../../assets/images/services/food-services";
import { Banner, Heading, Modal } from "../../../components";
import {
  HeroSection,
  MealOption,
  MenuSection,
} from "../../../components/blocks/food-services";
import { foodOptions, foodsMenu } from "../../../mock/foods";

const Index = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const menuRef = useRef<any>(null);
  const scrollToMenu = () => menuRef.current.scrollIntoView();

  useEffect(() => {
    if (!isNull(isOpenModal)) {
      scrollToMenu();
    }
  }, [isOpenModal]);

  return (
    <div className="overflow-hidden ">
      <Banner
        title="Ovqatingizga oldindan buyurtma bering"
        subTitle="O'zingiz uchun eng yaxshi variantni tanlang!. Taomga ketishdan kamida 24 yoki 36 soat oldin buyurtma berishni unutmang*"
        image={foodBanner}
        icon={bannerIcon}
      />
      <section
        className={clsx("px-[15px] md:px-8 xl:px-[60px] font-montserrat my-16")}
      >
        <div className=" bg-primary-blue rounded-2xl py-8 md:py-10 px-5 md:px-8 text-white font-montserrat relative grid grid-cols-12">
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-[70px] md:text-[80px] leading-[80px] font-bold">
              32
            </h2>
            <p className="text-[28px] md:text-[32px] leading-10 mb-5 max-w-xs">
              dan ortiq taom va ichimliklar
            </p>
            <button className="font-poppins bg-primary-red px-6 py-4 text-base rounded-[10px]">
              Menyu tanlash
            </button>
          </div>
          <Image
            src={foodServingBg}
            alt="background image "
            className="absolute top-0 right-0"
          />
          <div className="relative md:static h-56 md:h-auto col-span-12 md:col-span-6 flex justify-end mt-5 md:mt-0">
            <Image
              src={foodServing}
              alt="Image customer"
              className="absolute md:static w-80 -right-1/2 -translate-x-1/3 md:translate-x-0 md:translate-y-1/3 md:mr-5 z-10 md:z-0"
            />
            <Image
              src={foodCloud}
              alt="Image customer"
              className="absolute md:-translate-x-1/2"
            />
          </div>
        </div>
      </section>
      <section
        className={clsx(
          "relative px-[15px] md:px-8 xl:px-[60px] my-24",
          isOpenModal && "hidden"
        )}
        ref={menuRef}
      >
        <Heading
          title="Menyu"
          subTitle="Engage active clients at the right time and save time chasing unqualified leads"
          titleClass="text-[32px] leading-[45px]"
          subTitleClass="text-sm leading-[24px]"
        />
        <div className="grid grid-cols-12 gap-6">
          {map(foodsMenu, (option) => (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-3"
              onClick={() => setOpenModal(true)}
            >
              <Image
                src={get(option, "image", "")}
                alt={"new Image"}
                layout={"responsive"}
                className="mb-5 h-[200px] rounded-[25px]"
              />
              <Heading
                title="Sendvich va salatlar"
                titleClass="text-[20px] !font-bold leading-snug mb-1"
                subTitle="7 ta taom mavjud"
                subTitleClass="text-sm text-black"
              />
            </div>
          ))}
        </div>
      </section>
      <Modal open={isOpenModal} setOpen={setOpenModal}>
        <div className="grid grid-cols-12 gap-6">
          {map(foodOptions, (option) => (
            <div className="col-span-12 lg:col-span-3">
              <div className="relative">
                <Image
                  src={get(option, "image", "")}
                  alt={"new Image"}
                  layout={"responsive"}
                  className="mb-5"
                />
              </div>
              <Heading
                title={get(option, "title", "")}
                titleClass="text-lg !font-bold leading-snug mb-2.5"
                subTitle={get(option, "description", "")}
                subTitleClass="text-sm !text-black"
              />
              <div className="flex gap-5 items-center">
                <button className="flex items-center gap-3 border-2 border-black font-inter font-bold rounded-[10px]  py-3 px-[22px] text-sm leading-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_429_1457)">
                      <path
                        d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_429_1457">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Tanlash
                </button>
                <NumericFormat
                  value={get(option, "price", 0)}
                  decimalSeparator="."
                  displayType="text"
                  thousandSeparator=" "
                  suffix=" so’m"
                  className="text-lg leading-6 font-inter font-medium"
                  type="text"
                />
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Index;
