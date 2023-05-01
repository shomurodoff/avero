import clsx from "clsx";
import { map, get, toLower } from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ReactSelect, { components } from "react-select";
import { options } from "../../mock/ioptions";

interface Props {
  modal?: boolean;
}

const Index: React.FC<Props> = ({ modal }) => {
  const [airways, setAirways] = useState<string>("uzairways");
  const router = useRouter();

  return (
    <form className="grid grid-cols-12 gap-6 md:gap-2.5 font-inter  md:max-w-2xl lg:max-w-4xl mx-auto z-10">
      <div
        className={clsx(
          "col-span-12  lg:col-span-10 grid grid-cols-12 gap-0.5",
          modal &&
            "md:border-2 border-[#CECECE] md:rounded-l-medium md:rounded-r-medium md:bg-[#CECECE]"
        )}
      >
        <div
          className={clsx(
            "col-span-12 lg:col-span-4  py-[14px] md:py-4 px-[15px] md:px-[25px] rounded-tl-[15px] lg:rounded-l-[15px]",
            modal ? "bg-[#ECECEC]" : "bg-[#fff] bg-opacity-[.25]"
          )}
        >
          <div className="flex flex-col">
            <label className="flex items-center gap-2.5 text-sm font-normal leading-4 mb-1 md:mb-[5px]">
              Chipta raqami
            </label>
            <input
              type="text"
              className={clsx(
                "bg-transparent focus:outline-none  text-lg md:text-[22px] md:leading-[27px] font-inter font-normal  z-50",
                modal ? "placeholder:text-black" : "placeholder:text-white"
              )}
              placeholder={""}
            />
          </div>
        </div>
        <div
          className={clsx(
            "col-span-12 lg:col-span-4 py-[14px] md:py-4 px-[15px] md:px-[25px]",
            modal ? "bg-[#ECECEC]" : "bg-[#fff] bg-opacity-[.25]"
          )}
        >
          <div className="flex flex-col">
            <label className="flex items-center gap-2.5 text-sm font-normal leading-4 mb-1 md:mb-[5px]">
              Familya
            </label>
            <input
              type="text"
              className={clsx(
                "bg-transparent focus:outline-none  text-lg md:text-[22px] md:leading-[27px] font-inter font-normal  z-50",
                modal ? "placeholder:text-black" : "placeholder:text-white"
              )}
              placeholder={""}
            />
          </div>
        </div>
        <div
          className={clsx(
            "col-span-12 lg:col-span-4 py-[14px] md:py-4 px-[15px] md:px-[25px] rounded-b-[15px] lg:rounded-bl-none lg:rounded-r-[15px]",
            modal ? "bg-[#ECECEC]" : "bg-[#fff] bg-opacity-[.25]"
          )}
        >
          <div className="flex flex-col">
            <label className="gap-2.5 text-sm  font-normal leading-4 mb-1 md:mb-[5px] cursor-pointer">
              <span className="relative">
                Airport{" "}
                <svg
                  className={"absolute top-0 left-full"}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_577_9570)">
                    <path
                      d="M10.0001 10.9766L14.1251 6.85156L15.3034 8.0299L10.0001 13.3332L4.69678 8.0299L5.87511 6.85156L10.0001 10.9766Z"
                      fill={modal ? "black" : "white"}
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
              placeholder={"Tanlang..."}
              openMenuOnFocus
              onChange={(value) => setAirways(toLower(get(value, "label")))}
              isSearchable={false}
              defaultValue={{ value: 0, label: "Uzairways" }}
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
                  return "!text-white tex mx-0 text-lg md:text-[22px] md:leading-[27px] !font-normal font-inter";
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
                  <components.SingleValue
                    className={modal ? "!text-black" : "text-white"}
                    {...props}
                  >
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
          className="bg-primary-red rounded-[15px] w-full h-full py-[23px] text-xl leading-6 font-medium font-inter z-50 text-white"
          onClick={() =>
            router.push({
              pathname: "/services",
              query: { airways: airways },
            })
          }
        >
          Izlash
        </button>
      </div>
    </form>
  );
};

export default Index;
