import clsx from "clsx";
import {map, get, isEmpty, find, isNil} from "lodash";
import Image from "next/image";
import {useRouter} from "next/router";
import React, {useState} from "react";
import ReactSelect, {components} from "react-select";
import {options} from "../../mock/ioptions";
import {useTranslation} from "react-i18next";
import toast from "react-hot-toast";
import {usePostQuery} from "../../hooks";
import {KEYS} from "../../constants/keys";
import {URLS} from "../../constants/urls";
import {AIRLINE_TYPES} from "../../constants";

interface Props {
    modal?: boolean;
    airplane?: any;
    onClose?: () => void
}

const Index: React.FC<Props> = ({
                                    modal, airplane = null, onClose = () => {
    }
                                }) => {

    const {t} = useTranslation();
    const router = useRouter();
    const [airways, setAirways] = useState<string>(get(airplane, 'airlinesType', get(router, 'query.code')));
    const [ticketNumber, setTicketNumber] = useState<string>(get(airplane, 'ticketNumber', get(router, 'query.ticketNumber')));
    const [passportNumber, setPassportNumber] = useState<string>(get(airplane, 'passportNumber', get(router, 'query.passportNumber')));
    const [family, setFamily] = useState<string>(get(airplane, 'family', get(router, 'query.family')));

    const {mutate: searchTicketRequest, isLoading} = usePostQuery({listKeyId: KEYS.getData})

    const searchTicket = () => {

        if (airways && ticketNumber && (family || passportNumber)) {
            searchTicketRequest({
                url: URLS.getData,
                attributes: airways == AIRLINE_TYPES.CHARTER_FLIGHTS ? {
                    airlinesType: airways,
                    ticketNumber,
                    passportNumber
                } : {
                    airlinesType: airways,
                    family,
                    ticketNumber
                },
            }, {
                onSuccess: ({data:response}) => {
                    if(get(response,'code') == 0) {
                        router.push({
                            pathname: "/services",
                            query: {code: airways, ticketNumber, family, passportNumber},
                        })
                    }else{

                    }
                    onClose();
                },
                onError: () => {
                    onClose();
                }
            })
        } else {
            toast.error(t('Please select all fields'), {position: 'top-right'})
        }

    }
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
                            {t("Chipta raqami")}
                        </label>
                        <input
                            value={ticketNumber}
                            onChange={(e) => setTicketNumber(e.target.value)}
                            type="text"
                            className={clsx(
                                "bg-transparent focus:outline-none  text-lg md:text-[22px] md:leading-[27px] font-inter font-normal  z-50",
                                modal ? "placeholder:text-black" : "placeholder:text-white"
                            )}
                            placeholder={t("Kiriting...") || ''}
                        />
                    </div>
                </div>
                <div
                    className={clsx(
                        "col-span-12 lg:col-span-4 py-[14px] md:py-4 px-[15px] md:px-[25px]",
                        modal ? "bg-[#ECECEC]" : "bg-[#fff] bg-opacity-[.25]"
                    )}
                >
                    {airways == 'CHARTER_FLIGHTS' ? <div className="flex flex-col">
                        <label className="flex items-center gap-2.5 text-sm font-normal leading-4 mb-1 md:mb-[5px]">
                            {t("Passport")}
                        </label>
                        <input
                            value={passportNumber}
                            onChange={(e) => setPassportNumber(e.target.value)}
                            type="text"
                            className={clsx(
                                "bg-transparent focus:outline-none  text-lg md:text-[22px] md:leading-[27px] font-inter font-normal  z-50",
                                modal ? "placeholder:text-black" : "placeholder:text-white"
                            )}
                            placeholder={t("Kiriting...") || ''}
                        />
                    </div> : <div className="flex flex-col">
                        <label className="flex items-center gap-2.5 text-sm font-normal leading-4 mb-1 md:mb-[5px]">
                            {t("Familya")}
                        </label>
                        <input
                            value={family}
                            onChange={(e) => setFamily(e.target.value)}
                            type="text"
                            className={clsx(
                                "bg-transparent focus:outline-none  text-lg md:text-[22px] md:leading-[27px] font-inter font-normal  z-50",
                                modal ? "placeholder:text-black" : "placeholder:text-white"
                            )}
                            placeholder={t("Kiriting...") || ''}
                        />
                    </div>}
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
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </span>
                        </label>
                        <ReactSelect
                            placeholder={t("Tanlang...") || ''}
                            openMenuOnFocus
                            defaultValue={!isNil(airplane) ? {
                                value: get(find(options, (_item: any) => get(_item, 'code') == get(airplane, 'airlinesType')), 'code'),
                                label: get(find(options, (_item: any) => get(_item, 'code') == get(airplane, 'airlinesType')), 'title'),
                                image: get(find(options, (_item: any) => get(_item, 'code') == get(airplane, 'airlinesType')), 'icon'),
                            } : get(router, 'query.code') ? {
                                value: get(find(options, (_item: any) => get(_item, 'code') == get(router, 'query.code')), 'code', ''),
                                label: get(find(options, (_item: any) => get(_item, 'code') == get(router, 'query.code')), 'title'),
                                image: get(find(options, (_item: any) => get(_item, 'code') == get(router, 'query.code')), 'icon'),
                            } : null}
                            onChange={(value: any) => setAirways(get(value, 'value', ''))}
                            isSearchable={false}
                            options={map(options, (item, index) => {
                                return {
                                    value: get(item, "code"),
                                    label: get(item, "title"),
                                    image: get(item, "icon"),
                                };
                            })}
                            formatOptionLabel={(item) => (
                                <div className="flex items-center gap-2 cursor-pointer z-[1000]">
                  <span className="rounded-full">
                    <Image src={get(item, "image", "")} alt="country-image"/>
                  </span>
                                    <span>{get(item, "label")}</span>
                                </div>
                            )}
                            formatGroupLabel={(item) => <span>{get(item, "label")}</span>}
                            className="react-select-container "
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
                                    return `${isNil(airplane) ? '!text-white' : '!text-black'} !mx-0 text-lg md:text-[22px] md:leading-[27px] !font-normal font-inter`;
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
                    disabled={isLoading}
                    type="button"
                    className="bg-primary-red rounded-[15px] w-full h-full py-[23px] text-xl leading-6 font-medium font-inter z-50 text-white"
                    onClick={searchTicket}
                >
                    {t("Izlash")}
                </button>
            </div>
        </form>
    );
};

export default Index;
