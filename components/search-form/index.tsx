import clsx from "clsx";
import { map, get } from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ReactSelect, { components } from "react-select";
import { options } from "../../mock/ioptions";

const Index = () => {
  const [isOpenOption, setOpenOption] = useState<boolean>(false);
  const [isOpenTypeOption, setOpenTypeOption] = useState<boolean>(false);
  const router = useRouter();

  return (
    <form className="grid grid-cols-12 px-[15px] gap-6 md:gap-2.5 font-inter  md:max-w-2xl lg:max-w-4xl mx-auto z-10">
      <div className="col-span-12  lg:col-span-10 grid grid-cols-12 gap-0.5">
        <div className="col-span-5 lg:col-span-2 bg-[#fff] bg-opacity-[.25] py-[14px] md:py-4 px-[15px] md:px-[25px] rounded-tl-[15px] lg:rounded-l-[15px]">
          <div className="flex flex-col">
            <label
              className="gap-2.5 text-sm  font-normal leading-4 mb-1 md:mb-[5px] cursor-pointer"
              onClick={() => setOpenTypeOption(!isOpenTypeOption)}
            >
              <span className="relative">
                Turi{" "}
                <svg
                  className={clsx(
                    "transition-all duration-150 absolute top-0 left-full",
                    isOpenTypeOption && "rotate-180 "
                  )}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_577_9570)">
                    <path
                      d="M10.0001 10.9766L14.1251 6.85156L15.3034 8.0299L10.0001 13.3332L4.69678 8.0299L5.87511 6.85156L10.0001 10.9766Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_577_9570">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </label>
            <ReactSelect
              placeholder={"Chipta"}
              menuIsOpen={isOpenTypeOption}
              onChange={() => {
                setOpenTypeOption(false);
              }}
              options={map(options, (item, index) => {
                return {
                  value: index,
                  label: get(item, "title"),
                  image: get(item, "icon"),
                };
              })}
              formatOptionLabel={(item) => (
                <div className="flex items-center gap-2 cursor-pointer z-[1000]">
                  <span className="rounded-full">
                    <Image src={get(item, "image", "")} alt="country-image" />
                  </span>
                  <span>{get(item, "label")}</span>
                </div>
              )}
              formatGroupLabel={(item) => <span>{get(item, "label")}</span>}
              className="react-select-container !text-white"
              classNamePrefix="react-select"
              classNames={{
                control: (state) => {
                  return state.isFocused
                    ? "!rounded-[15px] !border-[transparent] !border-none  hover:border-none !shadow-none !bg-transparent !min-h-fit"
                    : "!rounded-[15px] !border-[transparent] !shadow-none !bg-transparent !border-none hover:border-none !min-h-fit";
                },
                valueContainer: (state) => {
                  return "text-lg font-medium !p-0 ";
                },
                singleValue: (state) => {
                  return "!text-white mx-0 text-lg md:text-[22px] md:leading-[27px] !font-normal font-inter";
                },
                placeholder: (state) => {
                  return "!text-white !mx-0 text-lg md:text-[22px] md:leading-[27px] !font-normal font-inter";
                },
                input: (state) => {
                  return "!m-0 !p-0 !text-white text-[22px]";
                },
                indicatorsContainer: (state) => {
                  return "text-lg font-bold text-black";
                },
                menuPortal: (state) => {
                  return "!z-[9999]";
                },
                menu: (state) => {
                  return "!rounded-[15px] !w-[215px] !mt-5 z-[99999] px-1 py-1";
                },
                menuList: (state) => {
                  return "text-lg  text-black !p-0 !rounded-[15px]";
                },
                option: (state) => {
                  return state.isSelected
                    ? "!bg-primary-red border-b !py-3 last:border-b-0"
                    : state.isFocused
                    ? "!bg-primary-red !bg-opacity-20 border-b !py-3 last:border-b-0"
                    : "border-b last:border-b-0  !py-3";
                },
              }}
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
                SingleValue: (props, context) => (
                  <components.SingleValue className={"text-white"} {...props}>
                    {get(props, "data.label")}
                  </components.SingleValue>
                ),
              }}
            />
          </div>
        </div>
        <div className="col-span-7 lg:col-span-4 bg-[#fff] bg-opacity-[.25] py-[14px] md:py-4 px-[15px] md:px-[25px] rounded-tr-[15px] lg:rounded-none">
          <div className="flex flex-col">
            <label className="flex items-center gap-2.5 text-sm font-normal leading-4 mb-1 md:mb-[5px]">
              Chipta raqami
            </label>
            <input
              type="text"
              className="bg-transparent focus:outline-none placeholder:text-white text-lg md:text-[22px] md:leading-[27px]  font-inter font-normal z-50"
              placeholder={"Kurbanov"}
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3 bg-[#fff] bg-opacity-[.25] py-[14px] md:py-4 px-[15px] md:px-[25px]">
          <div className="flex flex-col">
            <label className="flex items-center gap-2.5 text-sm font-normal leading-4 mb-1 md:mb-[5px]">
              Familya
            </label>
            <input
              type="text"
              className="bg-transparent focus:outline-none placeholder:text-white text-lg md:text-[22px] md:leading-[27px] font-inter font-normal  z-50"
              placeholder={"Kurbanov"}
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3 bg-[#fff] bg-opacity-[.25] py-[14px] md:py-4 px-[15px] md:px-[25px] rounded-b-[15px] lg:rounded-bl-none lg:rounded-r-[15px]">
          <div className="flex flex-col">
            <label
              className="gap-2.5 text-sm  font-normal leading-4 mb-1 md:mb-[5px] cursor-pointer"
              onClick={() => setOpenOption(!isOpenOption)}
            >
              <span className="relative">
                Airport{" "}
                <svg
                  className={clsx(
                    "transition-all duration-150 absolute top-0 left-full",
                    isOpenOption && "rotate-180 "
                  )}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_577_9570)">
                    <path
                      d="M10.0001 10.9766L14.1251 6.85156L15.3034 8.0299L10.0001 13.3332L4.69678 8.0299L5.87511 6.85156L10.0001 10.9766Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_577_9570">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </label>
            <ReactSelect
              placeholder={"UzAirways"}
              menuIsOpen={isOpenOption}
              onChange={() => {
                setOpenOption(false);
              }}
              options={map(options, (item, index) => {
                return {
                  value: index,
                  label: get(item, "title"),
                  image: get(item, "icon"),
                };
              })}
              formatOptionLabel={(item) => (
                <div className="flex items-center gap-2 cursor-pointer z-[1000]">
                  <span className="rounded-full">
                    <Image src={get(item, "image", "")} alt="country-image" />
                  </span>
                  <span>{get(item, "label")}</span>
                </div>
              )}
              formatGroupLabel={(item) => <span>{get(item, "label")}</span>}
              className="react-select-container !text-white"
              classNamePrefix="react-select"
              classNames={{
                control: (state) => {
                  return state.isFocused
                    ? "!rounded-[15px] !border-[transparent] !border-none  hover:border-none !shadow-none !bg-transparent !min-h-fit"
                    : "!rounded-[15px] !border-[transparent] !shadow-none !bg-transparent !border-none hover:border-none !min-h-fit";
                },
                valueContainer: (state) => {
                  return "text-lg font-medium !p-0 ";
                },
                singleValue: (state) => {
                  return "!text-white mx-0 text-lg md:text-[22px] md:leading-[27px] !font-normal font-inter";
                },
                placeholder: (state) => {
                  return "!text-white !mx-0 text-lg md:text-[22px] md:leading-[27px] !font-normal font-inter";
                },
                input: (state) => {
                  return "!m-0 !p-0 !text-white text-[22px]";
                },
                indicatorsContainer: (state) => {
                  return "text-lg font-bold text-black";
                },
                menuPortal: (state) => {
                  return "!z-[9999]";
                },
                menu: (state) => {
                  return "!rounded-[15px] !w-[215px] !mt-5 z-[99999] px-1 py-1";
                },
                menuList: (state) => {
                  return "text-lg  text-black !p-0 !rounded-[15px]";
                },
                option: (state) => {
                  return state.isSelected
                    ? "!bg-primary-red border-b !py-3 last:border-b-0"
                    : state.isFocused
                    ? "!bg-primary-red !bg-opacity-20 border-b !py-3 last:border-b-0"
                    : "border-b last:border-b-0  !py-3";
                },
              }}
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: () => null,
                SingleValue: (props, context) => (
                  <components.SingleValue className={"text-white"} {...props}>
                    {get(props, "data.label")}
                  </components.SingleValue>
                ),
              }}
            />
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-2 z-10">
        <button
          type="button"
          className="bg-primary-red rounded-[15px] w-full h-full py-[23px] text-xl leading-6 font-medium font-inter z-50"
          onClick={() => router.push("/services")}
        >
          Izlash
        </button>
      </div>
    </form>
  );
};

export default Index;
