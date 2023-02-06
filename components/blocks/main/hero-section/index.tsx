import Image from "next/image";
import React, { Fragment, useState } from "react";
import { borderBottom } from "../../../../assets/images/hero";
import ReactSelect, { components } from "react-select";
import { get, map } from "lodash";
import { options } from "../../../../mock/ioptions";
import clsx from "clsx";
import { CloudBottomMd, CloudTopMd } from "../../../../assets/images/main";
import { useRouter } from "next/router";
import { Container } from "../../../../UI";

const Index: React.FC = () => {
  const [isOpenOption, setOpenOption] = useState<boolean>(false);
  const [isOpenTypeOption, setOpenTypeOption] = useState<boolean>(false);
  const router = useRouter();

  return (
    <Fragment>
      <header className="font-inter text-2xl font-bold bg-[#043785] relative -z-0 text-white">
        <Container className="py-28 md:py-[90px]">
          <div className="text-center  mb-10">
            <h1 className="text-[44px] leading-[60px] md:text-[80px] md:leading-[90px] lg:text-[110px] lg:leading-[120px] font-bold font-montserrat !wider-tracking mb-2.5 max-w-xs md:max-w-4xl  mx-auto">
              Qulay{" "}
              <span className="relative">
                <span className="italic text-primary-red h-full  items-center inline-flex gap-2">
                  <span className="bg-primary-red p-[9.5px] md:p-[17.5px] rounded-full">
                    <svg
                      className="w-5 h-5 md:w-9 md:h-9"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_577_9554)">
                        <path
                          d="M16.7106 1.68751C16.4994 1.68752 16.2904 1.72987 16.0958 1.81206C15.9012 1.89425 15.7251 2.0146 15.5778 2.16601L15.3444 2.40666L15.1087 2.16601C14.9615 2.01459 14.7853 1.89423 14.5908 1.81204C14.3962 1.72985 14.1871 1.6875 13.9759 1.6875C13.7647 1.6875 13.5556 1.72985 13.361 1.81204C13.1665 1.89423 12.9903 2.01459 12.8431 2.16601C12.5426 2.47608 12.3745 2.89093 12.3745 3.32273C12.3745 3.75453 12.5426 4.16938 12.8431 4.47944L15.3444 7.03126L17.8434 4.47944C18.1439 4.16938 18.312 3.75453 18.312 3.32273C18.312 2.89093 18.1439 2.47608 17.8434 2.16601C17.6962 2.0146 17.52 1.89424 17.3255 1.81205C17.1309 1.72987 16.9219 1.68752 16.7106 1.68751Z"
                          fill="white"
                        />
                        <path
                          d="M14.6442 11.1873H9.45553L7.54443 4.04174C7.38144 3.4333 6.98343 2.91452 6.43795 2.59953C5.89247 2.28455 5.24421 2.19915 4.63577 2.36214C4.02732 2.52512 3.50855 2.92313 3.19356 3.46861C2.87858 4.01409 2.79318 4.66236 2.95617 5.2708L5.57383 15.0567C5.6414 15.3093 5.79047 15.5326 5.9979 15.6918C6.20533 15.851 6.45952 15.9373 6.72102 15.9373H11.7812V17.1248H2.875V18.3123H11.7812C12.0962 18.3123 12.3982 18.1872 12.6209 17.9645C12.8436 17.7418 12.9688 17.4398 12.9688 17.1248V15.9373H14.75C15.0818 15.9369 15.4098 15.8671 15.713 15.7323C16.0162 15.5975 16.2878 15.4007 16.5104 15.1547C16.733 14.9086 16.9016 14.6187 17.0054 14.3035C17.1092 13.9884 17.1459 13.655 17.1131 13.3248C17.037 12.7271 16.7429 12.1784 16.2874 11.784C15.8318 11.3896 15.2467 11.1771 14.6442 11.1873ZM14.75 14.7498H6.72108L4.10323 4.96371C4.02172 4.65949 4.06441 4.33535 4.22189 4.0626C4.37937 3.78985 4.63875 3.59083 4.94297 3.50932C5.24719 3.42781 5.57133 3.4705 5.84408 3.62798C6.11683 3.78546 6.31585 4.04484 6.39736 4.34906L8.54329 12.3748H14.75C15.0649 12.3748 15.367 12.5 15.5897 12.7227C15.8124 12.9454 15.9375 13.2474 15.9375 13.5623C15.9375 13.8773 15.8124 14.1793 15.5897 14.402C15.367 14.6247 15.0649 14.7498 14.75 14.7498Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_577_9554">
                          <rect
                            width="19"
                            height="19"
                            fill="white"
                            transform="translate(0.5 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span>avia</span>
                  <Image
                    src={borderBottom}
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
                          <Image
                            src={get(item, "image", "")}
                            alt="country-image"
                          />
                        </span>
                        <span>{get(item, "label")}</span>
                      </div>
                    )}
                    formatGroupLabel={(item) => (
                      <span>{get(item, "label")}</span>
                    )}
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
                        <components.SingleValue
                          className={"text-white"}
                          {...props}
                        >
                          {" "}
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
                          <Image
                            src={get(item, "image", "")}
                            alt="country-image"
                          />
                        </span>
                        <span>{get(item, "label")}</span>
                      </div>
                    )}
                    formatGroupLabel={(item) => (
                      <span>{get(item, "label")}</span>
                    )}
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
                        <components.SingleValue
                          className={"text-white"}
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
                className="bg-primary-red rounded-[15px] w-full h-full py-[23px] text-xl leading-6 font-medium font-inter z-50"
                onClick={() => router.push("/services")}
              >
                Izlash
              </button>
            </div>
          </form>
        </Container>
        <Image
          src={CloudBottomMd}
          alt="Background Image"
          className="absolute rotate-180 bottom-0 right-0 -z-0 w-56 md:w-72 lg:w-96"
        />
        <Image
          src={CloudTopMd}
          alt="Background Image"
          className="absolute  -top-20 left-0 -z-0  w-56 md:w-72 lg:w-96"
        />
      </header>
    </Fragment>
  );
};

export default Index;
