import clsx from "clsx";
import { get, map } from "lodash";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { NumericFormat } from "react-number-format";
import {
  foodBanner,
  foodCloud,
  foodServing,
} from "../../../assets/images/services/food-services";
import { Banner, Heading, Modal } from "../../../components";
import { foodOptions, foodsMenu } from "../../../mock/foods";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const menuRef = useRef<any>(null);
  const scrollToMenu = () => menuRef.current.scrollIntoView();
  return (
    <div className="overflow-hidden ">
      <Banner
        title="Ovqatingizga oldindan buyurtma bering"
        subTitle="O'zingiz uchun eng yaxshi variantni tanlang!. Taomga ketishdan kamida 24 yoki 36 soat oldin buyurtma berishni unutmang"
        image={foodBanner}
      />
      <section className={"font-montserrat mt-16 mb-60"}>
        <div className=" bg-primary-blue rounded-2xl py-8 md:py-10 px-5 md:px-8 text-white font-montserrat relative grid grid-cols-12 bg-food-bg-line">
          <div className="col-span-12 md:col-span-6 z-10">
            <h2 className="text-[70px] md:text-[80px] leading-[80px] font-bold">
              32
            </h2>
            <p className="text-[28px] md:text-[32px] leading-10 mb-5 max-w-xs">
              dan ortiq taom va ichimliklar
            </p>
            <button
              className="font-poppins bg-primary-red px-6 py-4 text-base rounded-[10px]"
              onClick={scrollToMenu}
            >
              Menyu tanlash
            </button>
          </div>

          <div className="relative md:static h-56 md:h-auto col-span-12 md:col-span-6 flex justify-end mt-5 md:mt-0">
            <div className="absolute md:static w-80 -right-2/3 -translate-x-1/3 md:translate-x-0 translate-y-1/4 md:translate-y-1/3 md:mr-5 z-10 md:z-0">
              <Image src={foodServing} alt="Image customer" />
            </div>
            <div className="absolute md:-translate-x-1/3">
              <Image src={foodCloud} alt="Image customer" className="" />
            </div>
          </div>
        </div>
      </section>
      <section
        className={clsx("relative mb-24", isOpenModal && "hidden")}
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
              className="col-span-12 sm:col-span-6 md:col-span-3"
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
                className="!mb-[30px]"
              />
            </div>
          ))}
        </div>
      </section>
      <div className="fixed md:static bottom-0 inset-x-0 z-50 bg-white bg-opacity-90  md:bg-[#F9F9F9] py-5 px-6 md:rounded-medium flex flex-col gap-y-4 md:flex-row justify-between  md:mb-8 shadow-[0px_-2px_4px_rgba(121,121,121,0.35)] md:shadow-none">
        <div>
          <h2 className="font-graphik text-[32px] leading-[44px] font-medium flex items-center gap-2">
            Sendvich va salatlar
          </h2>
          <p className="font-inter text-xs leading-5">
            Sut mahsulotlaridan cheklangan miqdorda foydalanish bilan, osiyo
            ziravorlari qo‘shilgan go‘sht va baliqsiz taom.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            className=" border-2 border-black  rounded-default font-inter text-sm leading-4 font-semibold py-4 px-9"
            // onClick={() => resetWeigt()}
          >
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
      <Modal open={isOpenModal} setOpen={setOpenModal}>
        <div className="container mx-auto bg-white grid grid-cols-12 md:p-5 lg:p-10 rounded-t-[20px] lg:rounded-[20px]">
          <div className="col-span-12 lg:col-span-6 px-[15px] pt-7 md:px-0 lg:mb-10">
            <Heading
              title="Sendvich va salatlar"
              titleClass="text-[20px] leading-5 md:text-[32px] !font-semibold"
              subTitle="Engage active clients at the right time and save time chasing
              unqualified leads"
              subTitleClass="font-normal leading-[30px]"
            />
          </div>
          <div className="bg-[rgba(255, 255, 255, 0.9)] md:bg-none shadow-modal md:shadow-none bg-opacity-90 col-span-12 lg:col-span-6 lg:mb-10 order-3 lg:order-none px-[15px] py-5">
            <div className="flex md:justify-end gap-2.5 text-white text-sm font-semibold ">
              <button className="bg-primary-blue py-4 w-full lg:px-8 rounded-[10px]">
                Saqlash
              </button>
              <button className="bg-primary-red  py-4 w-full lg:px-8 rounded-[10px]">
                Hoziroq to’lash
              </button>
              <button
                className="bg-[#ECEEF2] px-4 hidden lg:flex justify-center items-center rounded-[10px]"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_577_4881)">
                    <path
                      d="M14.9999 13.2324L21.1874 7.04492L22.9549 8.81242L16.7674 14.9999L22.9549 21.1874L21.1874 22.9549L14.9999 16.7674L8.81242 22.9549L7.04492 21.1874L13.2324 14.9999L7.04492 8.81242L8.81242 7.04492L14.9999 13.2324Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_577_4881">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 col-span-12 px-[15px] order-2 h-[50vh] overflow-auto">
            {map(foodOptions, (option) => (
              <div className="col-span-6 lg:col-span-3">
                <div className="relative">
                  <Image
                    src={get(option, "image", "")}
                    alt={"new Image"}
                    className="mb-5"
                  />
                </div>
                <Heading
                  title={get(option, "title", "")}
                  titleClass="!text-sm md:text-lg !font-bold leading-snug mb-2 md:mb-2.5"
                  subTitle={get(option, "description", "")}
                  subTitleClass="text-xs md:text-sm !text-black line-clamp-3 md:line-clamp-5"
                  className="mb-5 md:mb-10"
                />
                <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-5 md:items-center">
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
        </div>
      </Modal>
    </div>
  );
};

export default Index;
