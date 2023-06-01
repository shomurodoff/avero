import React, {useState} from "react";
import {Container} from "../../UI";
import {Card, Modal} from "../../components";
import {get, isEqual, sumBy} from "lodash";
import {
    CabinIcon,
    MealIcon,
    WieghtIcon,
    PaymeLogo,
    VisaLogo,
    MasterCardLogo,
    MirLogo,
    ClickLogo,
} from "../../assets/images/payment";
import Image, {StaticImageData} from "next/image";
import clsx from "clsx";
import {useRouter} from "next/router";
import {useGetQuery, usePostQuery} from "../../hooks";
import {KEYS} from "../../constants/keys";
import {URLS} from "../../constants/urls";
import {AIRLINE_TYPES, SERVICE_TYPES} from "../../constants";
import {getSelectedServicesByServiceType} from "../../utils"
import {NumericFormat} from "react-number-format";
import {useTranslation} from "react-i18next";
import {useSettingsStore} from "../../store";
import {toast} from "react-hot-toast";

const Index = () => {
    const {t} = useTranslation()
    const user: any = useSettingsStore((state: any) => get(state, "user"));
    const [activePayment, setActivePayment] = useState<number | null>(null);
    const [openDeleteConfirmation,setOpenDeleteConfirmation] = useState<boolean>(false)
    const router = useRouter();
    const {ticketNumber} = router?.query;
    const {data: selectedServices} = useGetQuery(
        {
            key: KEYS.getSelectedServices,
            url: `${URLS.getSelectedServices}/${ticketNumber}`,
            enabled: !!(ticketNumber)
        })
    const {mutate: deleteSeatRequest} = usePostQuery({listKeyId: KEYS.multiService})
    const {mutate: deleteMealRequest} = usePostQuery({listKeyId: KEYS.multiService})
    const deleteSeat = (_seat: any) => {
        deleteSeatRequest({
            url: URLS.multiService,
            attributes: get(_seat, 'airlinesType') == AIRLINE_TYPES.CHARTER_FLIGHTS ? {
                airlinesType: get(_seat, 'airlinesType'),
                serviceType: SERVICE_TYPES.DELETE_SEAT,
                ticketNumber: get(_seat, 'ticketNumber', undefined),
                passportNumber: get(_seat, 'passportSerialNumber', undefined),
                seat: get(_seat, 'seat', undefined),
                rtid: get(_seat, 'rtiId', undefined),
                isAgent: !!(user)
            } : {
                airlinesType: get(_seat, 'airlinesType'),
                serviceType: SERVICE_TYPES.DELETE_SEAT,
                ticketNumber: get(_seat, 'ticketNumber', undefined),
                family: get(_seat, 'family', undefined),
                seat: get(_seat, 'seat', undefined),
                rtid: get(_seat, 'rtiId', undefined),
                isAgent: !!(user)
            }
        }, {
            onSuccess: ({data}) => {
                if(get(data,'code') == 0){
                    toast.success(get(data,'message',"SUCCESS"), {position: 'top-right'});
                }
                setOpenDeleteConfirmation(false);
            },
            onError: () => {

            }
        })
    }
    const deleteMeal = (_meal: any) => {
        deleteMealRequest({
            url: URLS.multiService,
            attributes: get(_meal, 'airlinesType') == AIRLINE_TYPES.CHARTER_FLIGHTS ? {
                airlinesType: get(_meal, 'airlinesType'),
                serviceType: SERVICE_TYPES.DELETE_MEAL,
                ticketNumber: get(_meal, 'ticketNumber', undefined),
                passportNumber: get(_meal, 'passportSerialNumber', undefined),
                meal: get(_meal, 'meal', undefined),
                rtid: get(_meal, 'rtiId', undefined),
                isAgent: !!(user)
            } : {
                airlinesType: get(_meal, 'airlinesType'),
                serviceType: SERVICE_TYPES.DELETE_MEAL,
                ticketNumber: get(_meal, 'ticketNumber', undefined),
                family: get(_meal, 'family', undefined),
                seat: get(_meal, 'meal', undefined),
                rtid: get(_meal, 'rtiId', undefined),
                isAgent: !!(user)
            }
        }, {
            onSuccess: ({data}) => {
                if(get(data,'code') == 0){
                    toast.success(get(data,'message',"SUCCESS"), {position: 'top-right'});
                }
                setOpenDeleteConfirmation(false);
            },
            onError: () => {

            }
        })
    }
    return (
        <Container className={"py-[60px] font-graphik"}>
            <h1
                className={
                    "text-[35px] leading-none font-semibold mb-[25px] hidden md:block"
                }
            >
                {t(" To'lash uchun")}
            </h1>
            <div className={"grid grid-cols-12 gap-6"}>
                <div className={"col-span-12 lg:col-span-5"}>
                    {
                        getSelectedServicesByServiceType(get(selectedServices, 'data.data', []), SERVICE_TYPES.CHOOSE_SEAT).map((item: any) =>
                            <Card
                                key={get(item, 'id')}
                                className={
                                    "!rounded-medium bg-white px-4 md:px-[30px] py-7 mb-2.5"
                                }
                            >
                                <div
                                    className={
                                        "flex justify-between items-center gap-4 pb-7 border-b"
                                    }
                                >
                                    <div className={"flex items-center gap-5"}>
                                        <Image src={CabinIcon} alt={"Icon Image"}/>
                                        <h4 className={"text-[18px] leading-none  font-semibold"}>
                                            {t("Samolyot o’rindig’i")}
                                        </h4>
                                    </div>
                                    <div className={"flex items-center gap-4"}>
                                        <button
                                            className={
                                                "py-2 px-4 border-2 border-black rounded-large font-inter text-[13px] leading-[16px] font-medium hidden md:block"
                                            }
                                            onClick={() => {
                                                router.push({
                                                    pathname: "/services",
                                                    query: get(item, 'airlinesType') == AIRLINE_TYPES.CHARTER_FLIGHTS ? {
                                                        code: get(item, 'airlinesType'),
                                                        ticketNumber: get(item, 'ticketNumber'),
                                                        passportNumber: get(item, 'passportSerialNumber')
                                                    } : {
                                                        code: get(item, 'airlinesType'),
                                                        family: get(item, 'family'),
                                                        ticketNumber: get(item, 'ticketNumber'),
                                                    }
                                                });
                                            }}
                                        >
                                            {t("O’zgartirish")}
                                        </button>
                                        <button
                                            className="md:hidden"
                                            onClick={() => setOpenDeleteConfirmation(true)}
                                        >
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_577_7854)">
                                                    <path
                                                        d="M15.728 9.68608L14.314 8.27208L5 17.5861V19.0001H6.414L15.728 9.68608ZM17.142 8.27208L18.556 6.85808L17.142 5.44408L15.728 6.85808L17.142 8.27208ZM7.242 21.0001H3V16.7571L16.435 3.32208C16.6225 3.13461 16.8768 3.0293 17.142 3.0293C17.4072 3.0293 17.6615 3.13461 17.849 3.32208L20.678 6.15108C20.8655 6.33861 20.9708 6.59292 20.9708 6.85808C20.9708 7.12325 20.8655 7.37756 20.678 7.56508L7.242 21.0001Z"
                                                        fill="black"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_577_7854">
                                                        <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                        <svg
                                            onClick={() => setOpenDeleteConfirmation(true)}
                                            className={"cursor-pointer"}
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_577_5813)">
                                                <path
                                                    d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"
                                                    fill="black"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_577_5813">
                                                    <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <ul className={""}>
                                    <li
                                        className={"border-b border-black border-opacity-10 py-4"}
                                    >
                                        <h3
                                            className={"text-[20px] leading-[18px] font-normal mb-2"}
                                        >
                                            {get(item, "seat")}
                                        </h3>
                                        <p className={"text-[14px] leading-[18px]"}>
                                            {t("Sizning joyingiz")}
                                        </p>
                                    </li>
                                    <li className={"pt-4"}>
                                        <h3 className={"text-[20px] leading-[18px] font-normal mb-2"}>
                                            <NumericFormat displayType={'text'} thousandSeparator={' '}
                                                           value={get(item, "amount", 0) || 0} suffix={' UZS'}/>
                                        </h3>
                                        <p className={"text-[14px] leading-[18px]"}>
                                            {t("O’rindiq narxi")}
                                        </p>
                                    </li>
                                </ul>
                                <Modal classNames={'!max-w-[500px]'}  hidden={false} open={openDeleteConfirmation}
                                       setOpen={() => setOpenDeleteConfirmation(false)}>
                                    <div
                                        className="bg-[#FFFFFF] md:bg-opacity-90 backdrop-blur-[20px] shadow-[0px_-20px_30px_rgba(0, 0, 0, 0.19)] rounded-t-[20px] md:rounded-[20px]  pt-5  p-[15px] md:p-[25px]">
                                        <div className="hidden md:flex justify-between mb-10 items-start">
                                            <h3 className={'text-black font-semibold text-3xl '}>{t("Are you sure?")}</h3>
                                            <button
                                                className="p-[17px] bg-white rounded-default"
                                                onClick={() => setOpenDeleteConfirmation(false)}
                                            >
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M7.99992 6.23242L14.1874 0.0449219L15.9549 1.81242L9.76742 7.99992L15.9549 14.1874L14.1874 15.9549L7.99992 9.76742L1.81242 15.9549L0.0449219 14.1874L6.23242 7.99992L0.0449219 1.81242L1.81242 0.0449219L7.99992 6.23242Z"
                                                        fill="black"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                        <div>
                                            <div className="flex gap-3">
                                                <button
                                                    onClick={() => setOpenDeleteConfirmation(false)}
                                                    className=" border-2 border-black  rounded-default font-inter text-base leading-4 font-semibold py-4 px-9">
                                                    {t("Yo’q")}
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        deleteSeat(item)
                                                    }}
                                                    className=" bg-primary-red rounded-default font-inter text-base text-white leading-4 font-semibold py-4 px-9 border-2 border-transparent"
                                                >
                                                    {t("Ha, roziman")}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </Card>)
                    }
                    {
                        getSelectedServicesByServiceType(get(selectedServices, 'data.data', []), SERVICE_TYPES.CHOOSE_MEAL).map((item: any) =>
                            <Card
                                key={get(item, 'id')}
                                className={
                                    "!rounded-medium bg-white px-4 md:px-[30px] py-7 mb-2.5"
                                }
                            >
                                <div
                                    className={
                                        "flex justify-between items-center gap-4 pb-7 border-b"
                                    }
                                >
                                    <div className={"flex items-center gap-5"}>
                                        <Image src={MealIcon} alt={"Icon Image"}/>
                                        <h4 className={"text-[18px] leading-none  font-semibold"}>
                                            {t("Taomnoma")}
                                        </h4>
                                    </div>
                                    <div className={"flex items-center gap-4"}>
                                        <button
                                            className={
                                                "py-2 px-4 border-2 border-black rounded-large font-inter text-[13px] leading-[16px] font-medium hidden md:block"
                                            }
                                            onClick={() => {
                                                router.push({
                                                    pathname: "/services",
                                                    query: get(item, 'airlinesType') == AIRLINE_TYPES.CHARTER_FLIGHTS ? {
                                                        code: get(item, 'airlinesType'),
                                                        ticketNumber: get(item, 'ticketNumber'),
                                                        passportNumber: get(item, 'passportSerialNumber'),
                                                        services: 1
                                                    } : {
                                                        code: get(item, 'airlinesType'),
                                                        family: get(item, 'family'),
                                                        ticketNumber: get(item, 'ticketNumber'),
                                                        services: 1
                                                    }
                                                });
                                            }}
                                        >
                                            {t("O’zgartirish")}
                                        </button>
                                        <button
                                            className="md:hidden"

                                        >
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_577_7854)">
                                                    <path
                                                        d="M15.728 9.68608L14.314 8.27208L5 17.5861V19.0001H6.414L15.728 9.68608ZM17.142 8.27208L18.556 6.85808L17.142 5.44408L15.728 6.85808L17.142 8.27208ZM7.242 21.0001H3V16.7571L16.435 3.32208C16.6225 3.13461 16.8768 3.0293 17.142 3.0293C17.4072 3.0293 17.6615 3.13461 17.849 3.32208L20.678 6.15108C20.8655 6.33861 20.9708 6.59292 20.9708 6.85808C20.9708 7.12325 20.8655 7.37756 20.678 7.56508L7.242 21.0001Z"
                                                        fill="black"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_577_7854">
                                                        <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                        <svg
                                            onClick={() => setOpenDeleteConfirmation(item)}
                                            className={"cursor-pointer"}
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_577_5813)">
                                                <path
                                                    d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"
                                                    fill="black"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_577_5813">
                                                    <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <ul className={""}>
                                    <li
                                        className={"border-b border-black border-opacity-10 py-4"}
                                    >
                                        <h3
                                            className={"text-[20px] leading-[18px] font-normal mb-2"}
                                        >
                                            {get(item, "meal")}
                                        </h3>
                                        <p className={"text-[14px] leading-[18px]"}>
                                            {t("Sizning taomingiz")}
                                        </p>
                                    </li>
                                    <li className={"pt-4"}>
                                        <h3 className={"text-[20px] leading-[18px] font-normal mb-2"}>
                                            <NumericFormat displayType={'text'} thousandSeparator={' '}
                                                           value={get(item, "amount", 0) || 0} suffix={' UZS'}/>
                                        </h3>
                                        <p className={"text-[14px] leading-[18px]"}>
                                            {t("Ovqatlar narxi")}
                                        </p>
                                    </li>
                                </ul>
                                <Modal classNames={'!max-w-[500px]'}  hidden={false} open={openDeleteConfirmation}
                                       setOpen={() => setOpenDeleteConfirmation(false)}>
                                    <div
                                        className="bg-[#FFFFFF] md:bg-opacity-90 backdrop-blur-[20px] shadow-[0px_-20px_30px_rgba(0, 0, 0, 0.19)] rounded-t-[20px] md:rounded-[20px]  pt-5  p-[15px] md:p-[25px]">
                                        <div className="hidden md:flex justify-between mb-10 items-start">
                                            <h3 className={'text-black font-semibold text-3xl '}>{t("Are you sure?")}</h3>
                                            <button
                                                className="p-[17px] bg-white rounded-default"
                                                onClick={() => setOpenDeleteConfirmation(false)}
                                            >
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M7.99992 6.23242L14.1874 0.0449219L15.9549 1.81242L9.76742 7.99992L15.9549 14.1874L14.1874 15.9549L7.99992 9.76742L1.81242 15.9549L0.0449219 14.1874L6.23242 7.99992L0.0449219 1.81242L1.81242 0.0449219L7.99992 6.23242Z"
                                                        fill="black"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                        <div>
                                            <div className="flex gap-3">
                                                <button
                                                    onClick={() => setOpenDeleteConfirmation(false)}
                                                    className=" border-2 border-black  rounded-default font-inter text-base leading-4 font-semibold py-4 px-9">
                                                    {t("Yo’q")}
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        deleteMeal(item)
                                                    }}
                                                    className=" bg-primary-red rounded-default font-inter text-base text-white leading-4 font-semibold py-4 px-9 border-2 border-transparent"
                                                >
                                                    {t("Ha, roziman")}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </Card>)
                    }
                </div>
                <div className={"col-span-12 lg:col-span-7 font-graphik"}>
                    <Card className={"bg-white p-4 lg:p-7 lg:py-8 pt-5 rounded-medium"}>
                        <h4 className={"text-sm leading-[18px] font-normal"}>
                            {t("Jami to’lanadigan summa")}
                        </h4>
                        <h2 className={"text-[32px] font-medium mb-[30px] "}>
                            <NumericFormat displayType={'text'} thousandSeparator={' '}
                                           value={sumBy(get(selectedServices, 'data.data', []), 'amount') || 0}
                                           suffix={' UZS'}/>
                        </h2>
                        <div className={"grid grid-cols-12 gap-1 mb-10"}>
                            <div
                                className={clsx(
                                    "col-span-6 xl:col-span-3 border rounded-medium p-[18px] px-5 cursor-pointer",
                                    isEqual(activePayment, 1) &&
                                    "border-[#043785] !border-2 outline-2 p-[17px] px-[19px]"
                                )}
                                onClick={() => setActivePayment(1)}
                            >
                                <div className={"flex items-start justify-between mb-7"}>
                                    <h5
                                        className={
                                            "font-inter font-medium text-[14px] leading-[18px]  max-w-[90px]"
                                        }
                                    >
                                        {t("Payme orqali to’lang")}
                                    </h5>
                                    {isEqual(activePayment, 1) && (
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9 18C4.0293 18 0 13.9707 0 9C0 4.0293 4.0293 0 9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18ZM8.1027 12.6L14.4657 6.2361L13.1931 4.9635L8.1027 10.0548L5.5566 7.5087L4.284 8.7813L8.1027 12.6Z"
                                                fill="#043785"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <Image src={PaymeLogo} alt={"Visa Logo"}/>
                            </div>
                            <div
                                className={clsx(
                                    "col-span-6 xl:col-span-3 border rounded-medium p-[18px] px-5 cursor-pointer",
                                    isEqual(activePayment, 2) &&
                                    "border-[#043785] !border-2 outline-2 p-[17px] px-[19px]"
                                )}
                                onClick={() => setActivePayment(2)}
                            >
                                <div className={"flex items-start justify-between mb-7"}>
                                    <h5
                                        className={
                                            "font-inter font-medium text-[14px] leading-[18px]  max-w-[90px]"
                                        }
                                    >
                                        {t("Click orqali to’lang")}
                                    </h5>
                                    {isEqual(activePayment, 2) && (
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9 18C4.0293 18 0 13.9707 0 9C0 4.0293 4.0293 0 9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18ZM8.1027 12.6L14.4657 6.2361L13.1931 4.9635L8.1027 10.0548L5.5566 7.5087L4.284 8.7813L8.1027 12.6Z"
                                                fill="#043785"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <Image src={ClickLogo} alt={"Visa Logo"}/>
                            </div>
                            <div
                                className={clsx(
                                    "col-span-12 xl:col-span-4 border rounded-medium p-[18px] px-5 cursor-pointer",
                                    isEqual(activePayment, 3) &&
                                    "border-[#043785] !border-2 outline-2 p-[17px] px-[19px]"
                                )}
                                onClick={() => setActivePayment(3)}
                            >
                                <div className={"flex items-start justify-between"}>
                                    <h5
                                        className={
                                            "font-inter font-medium text-[14px] leading-[18px] mb-7 max-w-[60px]"
                                        }
                                    >
                                        {t("Chet-el kartalari")}
                                    </h5>
                                    {isEqual(activePayment, 3) && (
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9 18C4.0293 18 0 13.9707 0 9C0 4.0293 4.0293 0 9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18ZM8.1027 12.6L14.4657 6.2361L13.1931 4.9635L8.1027 10.0548L5.5566 7.5087L4.284 8.7813L8.1027 12.6Z"
                                                fill="#043785"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <div className={"flex items-center gap-4"}>
                                    <Image src={VisaLogo} alt={"Visa Logo"}/>
                                    <Image src={MasterCardLogo} alt={"Mir Logo"}/>
                                    <Image src={MirLogo} alt={"Visa Logo"}/>
                                </div>
                            </div>
                        </div>
                        <button
                            className="text-sm text-white font-semibold font-inter bg-primary-red rounded-default px-9 py-4 w-full md:w-auto">
                            {t("To’lash")}
                        </button>
                    </Card>
                </div>
            </div>
        </Container>
    );
};

export default Index;
