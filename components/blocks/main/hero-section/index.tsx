import Image from "next/image";
import React, { useState } from "react";
import { cabinCareIcon } from "../../../../assets/images/icons";
import { borderBottom, bgRight, bgLeft } from "../../../../assets/images/hero";
import ReactSelect, { components } from "react-select";

import { get, map } from "lodash";
import { options } from "../../../../mock/ioptions";
import clsx from "clsx";
const Index: React.FC = () => {
  const [isOpenOption, setOpenOption] = useState<boolean>(false);
  const [isOpenTypeOption, setOpenTypeOption] = useState<boolean>(false);

  return (
    <section className="pb-24 pt-28 bg-primary-blue relative px-[15px]">
      <div className="flex justify-center mb-20 z-20">
        <div className="font-montserrat  text-center flex flex-col items-center text-white z-10">
          <h1 className="max-w-4xl font-bold  text-[44px] leading-[60px] lg:text-[110px] lg:leading-[120px] -tracking-[4%] mb-2.5">
            Qulay{" "}
            <span className="italic">
              <span
                className={
                  "ml-20 text-primary-red relative bottom-image inline"
                }
              >
                <span
                  className={
                    "absolute bg-primary-red w-[70px] h-[70px] rounded-full  bottom-1/3 translate-y-1/3 -left-20"
                  }
                >
                  <span className={"flex justify-center items-center h-full"}>
                    <Image src={cabinCareIcon} alt={"logo"} />
                  </span>
                </span>
                avia
                <span className={"absolute -bottom-1 w-full left-0"}>
                  <Image src={borderBottom} alt={"logo"} />
                </span>
              </span>{" "}
            </span>{" "}
            yordamchingiz
          </h1>
          <p className="max-w-2xl text-lg lg:text-2xl -tracking-[2%] font-inter font-normal">
            Joy band qiling, mos ovqat tanlang va boshqalar xizmatlardan
            foydalaning
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-12 gap-1 font-inter text-white">
        <div className="col-span-4 md:col-span-2 flex flex-col px-5 py-4 bg-[#ffffff40] z-20 rounded-tl-[15px] md:rounded-l-[15px]">
          <label
            className="text-sm font-normal mb-1 flex items-center gap-2"
            onClick={() => setOpenTypeOption(!isOpenTypeOption)}
          >
            Turi{" "}
            <svg
              className={clsx(
                "transition-all duration-150",
                !isOpenTypeOption && "rotate-180 "
              )}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_577_3675)">
                <path
                  d="M9.99999 9.20898L14.125 13.334L15.3033 12.1557L9.99999 6.85232L4.69666 12.1557L5.87499 13.334L9.99999 9.20898Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_577_3675">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </label>
          <ReactSelect
            placeholder={"Chipta"}
            menuIsOpen={isOpenTypeOption}
            options={map(options, (item, index) => {
              return {
                value: index,
                label: get(item, "title"),
                image: get(item, "icon"),
              };
            })}
            formatOptionLabel={(item) => (
              <div className="flex items-center gap-2 cursor-pointer">
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
                return "!text-white ";
              },
              placeholder: (state) => {
                return "!text-white";
              },
              input: (state) => {
                return "!m-0 !p-0 !text-white";
              },
              indicatorsContainer: (state) => {
                return "text-lg font-bold text-black";
              },
              menu: (state) => {
                return "!rounded-[15px] !w-[200px] !mt-5";
              },
              menuList: (state) => {
                return "text-lg  text-black !p-0 !rounded-[15px] ";
              },
              option: (state) => {
                return state.isSelected
                  ? "!bg-primary-red"
                  : state.isFocused
                  ? "!bg-primary-red !bg-opacity-20"
                  : "";
              },
            }}
            components={{
              IndicatorSeparator: () => null,
              DropdownIndicator: () => null,
              SingleValue: (props, context) => (
                <components.SingleValue className={"text-white"} {...props}>
                  {" "}
                  {get(props, "data.label")}
                </components.SingleValue>
              ),
            }}
          />
        </div>
        <div className="col-span-8 md:col-span-3 flex flex-col px-5 py-4 bg-[#ffffff40] z-20 rounded-tr-[15px]  md:rounded-none">
          <label className="text-sm font-normal mb-1 ">Chipta raqami</label>
          <input
            type="text"
            className="bg-transparent focus:outline-none placeholder:text-white text-lg z-50"
            placeholder={"Kurbanov"}
          />
        </div>
        <div className="col-span-12 md:col-span-3 flex flex-col px-5 py-4 bg-[#ffffff40] z-20">
          <label className="text-sm font-normal mb-1 ">Familya</label>
          <input
            type="text"
            className="bg-transparent focus:outline-none placeholder:text-white text-lg z-50"
            placeholder={"Kurbanov"}
          />
        </div>
        <div className="col-span-12 md:col-span-2 flex flex-col px-5 py-4 bg-[#ffffff40] rounded-b-[15px] md:rounded-bl-none  md:rounded-r-[15px] z-20">
          <label
            className="text-sm font-normal mb-1 flex items-center gap-2"
            onClick={() => setOpenOption(!isOpenOption)}
          >
            Aeroport{" "}
            <svg
              className={clsx(
                "transition-all duration-150",
                !isOpenOption && "rotate-180 "
              )}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_577_3675)">
                <path
                  d="M9.99999 9.20898L14.125 13.334L15.3033 12.1557L9.99999 6.85232L4.69666 12.1557L5.87499 13.334L9.99999 9.20898Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_577_3675">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </label>
          <ReactSelect
            placeholder={"Chipta"}
            menuIsOpen={isOpenOption}
            options={map(options, (item, index) => {
              return {
                value: index,
                label: get(item, "title"),
                image: get(item, "icon"),
              };
            })}
            formatOptionLabel={(item) => (
              <div className="flex items-center gap-2 cursor-pointer">
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
                return "!text-white ";
              },
              placeholder: (state) => {
                return "!text-white";
              },
              input: (state) => {
                return "!m-0 !p-0 !text-white";
              },
              indicatorsContainer: (state) => {
                return "text-lg font-bold text-black";
              },
              menu: (state) => {
                return "!rounded-[15px] !w-[200px] !mt-5";
              },
              menuList: (state) => {
                return "text-lg  text-black !p-0 !rounded-[15px] ";
              },
              option: (state) => {
                return state.isSelected
                  ? "!bg-primary-red"
                  : state.isFocused
                  ? "!bg-primary-red !bg-opacity-20"
                  : "";
              },
            }}
            components={{
              IndicatorSeparator: () => null,
              DropdownIndicator: () => null,
              SingleValue: (props, context) => (
                <components.SingleValue className={"text-white"} {...props}>
                  {" "}
                  {get(props, "data.label")}
                </components.SingleValue>
              ),
            }}
          />
        </div>
        <div className="col-span-12 md:col-span-2 mt-5 md:mt-0">
          <button
            type="submit"
            className="bg-primary-red rounded-[15px] w-full h-full py-6"
          >
            Izlash
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 -z-10 w-52 md:w-auto">
        <Image src={bgRight} alt="cloud" />
      </div>
      <div className="absolute top-0 left-0 -z-10  w-52  md:w-auto">
        <Image src={bgLeft} alt="cloud" />
      </div>
    </section>
  );
};

export default Index;
