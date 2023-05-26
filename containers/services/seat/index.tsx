import Image from "next/image";
import React, {Fragment, useState} from "react";
import {
    seatBannerImage,
    seatCircleImage,
    seatOrderImage,
    seatOrderRingImage,
} from "../../../assets/images/services/seat-services";
import {Banner, Heading, Modal} from "../../../components";
import {borderBottom} from "../../../assets/images/hero";
import {useRouter} from "next/router";
import airplaneImg from "../../../assets/images/seat/airplane.png"
import {useGetQuery, usePostQuery} from "../../../hooks";
import {KEYS} from "../../../constants/keys";
import {URLS} from "../../../constants/urls";
import {get, isEqual, isNil} from "lodash";
import {findCabinClassType, filterSeatsByClassId, getSelectedServicesByServiceType} from "../../../utils"
import {AIRLINE_TYPES, CABIN_CLASSES, SERVICE_TYPES} from "../../../constants";
import clsx from "clsx";
import {NumericFormat} from "react-number-format";
import {useTranslation} from "react-i18next";
import {toast} from "react-hot-toast";

interface Props {
    serviceData?: any;
}

const Index = ({serviceData = {}}: Props) => {
    const {t} = useTranslation()
    const router = useRouter();
    const [temporarySeat, setTemporarySeat] = useState<any>(null)
    const [selectedSeat, setSelectedSeat] = useState<any>(null)
    const [open, setOpen] = useState<any>(false)
    const {data: airplane, isLoading: isLoadingAirplane} = useGetQuery(
        {
            key: `${KEYS.getAirplanes}-${get(serviceData, 'flightCode')}`,
            url: `${URLS.getAirplanes}/${get(serviceData, 'flightCode')}`,
            enabled: !!(get(serviceData, 'flightCode'))
        })
    const {data: selectedServices} = useGetQuery(
        {
            key: `${KEYS.getSelectedServices}-${get(serviceData, 'ticketNumber')}`,
            url: `${URLS.getSelectedServices}/${get(serviceData, 'ticketNumber')}`,
            enabled: !!(get(serviceData, 'ticketNumber'))
        })

    const {mutate: chooseSeatRequest} = usePostQuery({listKeyId: KEYS.multiService})
    const {mutate: deleteSeatRequest} = usePostQuery({listKeyId: KEYS.multiService})

    const handleSelectSeat = (seat: any) => {
        if (isEqual(get(seat, 'id'), get(selectedSeat, 'id'))) {
            setSelectedSeat(null)
        } else {
            setTemporarySeat(seat);
        }
    }
    const chooseSeat = () => {
        chooseSeatRequest({
            url: URLS.multiService,
            attributes: get(serviceData, 'airlinesType') == AIRLINE_TYPES.CHARTER_FLIGHTS ? {
                airlinesType: get(serviceData, 'airlinesType'),
                serviceType: SERVICE_TYPES.CHOOSE_SEAT,
                ticketNumber: get(serviceData, 'ticketNumber', undefined),
                passportNumber: get(serviceData, 'passportNumber', undefined),
                seat: `${get(selectedSeat, 'number')}${get(selectedSeat, 'code')}`,
                rtid: get(serviceData, 'rtiId', undefined)
            } : {
                airlinesType: get(serviceData, 'airlinesType'),
                serviceType: SERVICE_TYPES.CHOOSE_SEAT,
                ticketNumber: get(serviceData, 'ticketNumber', undefined),
                family: get(serviceData, 'family', undefined),
                seat: `${get(selectedSeat, 'number')}${get(selectedSeat, 'code')}`,
                rtid: get(serviceData, 'rtiId', undefined)
            }
        }, {
            onSuccess: ({data}) => {
                setOpen(false);
                setSelectedSeat(null);
                setTemporarySeat(null);
            },
            onError: () => {
                setOpen(false);
                setSelectedSeat(null);
                setTemporarySeat(null);
            }
        })
    }
    const deleteSeat = (_seat: any) => {
        deleteSeatRequest({
            url: URLS.multiService,
            attributes: get(_seat, 'airlinesType') == AIRLINE_TYPES.CHARTER_FLIGHTS ? {
                airlinesType: get(_seat, 'airlinesType'),
                serviceType: SERVICE_TYPES.DELETE_SEAT,
                ticketNumber: get(_seat, 'ticketNumber', undefined),
                passportNumber: get(_seat, 'passportSerialNumber', undefined),
                seat: get(_seat, 'seat', undefined),
                rtid: get(_seat, 'rtiId', undefined)
            } : {
                airlinesType: get(_seat, 'airlinesType'),
                serviceType: SERVICE_TYPES.DELETE_SEAT,
                ticketNumber: get(_seat, 'ticketNumber', undefined),
                family: get(_seat, 'family', undefined),
                seat: get(_seat, 'seat', undefined),
                rtid: get(_seat, 'rtiId', undefined)
            }
        }, {
            onSuccess: () => {

            },
            onError: () => {

            }
        })
    }
    return (
        <Fragment>
            <Banner
                title="O’zingiz uchun qulay o‘rindiq tanlang"
                subTitle="Engage active clients at the right time and save time chasing unqualified leads. clients at the right time and save time"
                image={seatBannerImage}
            />
            <section className="font-montserrat mb-40">
                <div
                    className="bg-primary-blue rounded-[25px] py-8 md:py-10  px-5 md:px-8 text-white grid grid-cols-12 grid-rows-5 mb-40 gap-y-24 md:gap-y-0">
                    <div className="col-span-12 md:col-span-7 row-span-3 md:row-span-6 ">
                        <p className="font-graphik font-medium text-2xl lg:text-[35px] lg:leading-[45px] mb-7 md:mb-16 max-w-[475px]">
                            {t(" Biron bir o'rindiq tanlamoqchi bo'lsangiz, jo'nashdan kamida")}{" "}
                            <span className="inline-block relative text-primary-red">
                {t("24 soat")}
                <Image
                    src={borderBottom}
                    alt="Image"
                    className="w-full absolute"
                />
              </span>{" "}
                            {t(" oldin xizmatga buyurtma bering.")}
                        </p>
                        <button
                                onClick={() =>{
                                    if(!get(airplane, 'data.data')){
                                        window.scrollTo(0, 0);
                                        toast.error(t('Please select ticket'),{position:"top-right"})
                                    }else{
                                        setOpen(get(airplane, 'data.data'))
                                    }
                                }}
                                className="font-poppins bg-primary-red px-6 py-4 text-base rounded-[10px]">
                            {t("O’rindiq tanlash")}
                        </button>
                    </div>
                    <div className="col-span-12 md:col-span-5 row-span-2 md:row-span-6">
                        <div className="relative w-full h-full mt-8">
                            <Image
                                src={seatOrderImage}
                                quality={100}
                                alt="image Girl"
                                className="absolute -bottom-1/2 md:-bottom-1/4 lg:-bottom-1/3  left-0 lg:-left-12 xl:left-4  z-10 w-60 h-60  md:w-64 md:h-64 lg:w-[400px] lg:h-[400px]"
                            />
                            <div
                                className="bg-primary-red w-[168px] md:w-60 h-[168px] md:h-60 lg:w-[320px] lg:h-[320px] rounded-full absolute -bottom-12 md:bottom-0 md:right-2 right-8"></div>
                            <Image
                                src={seatOrderRingImage}
                                quality={100}
                                alt="image Girl"
                                className="absolute -bottom-2/3 md:-bottom-1/3 right-11 md:-right-4 lg:right-8 lg:h-[400px] lg:w-[150px] lg:rotate-12"
                            />
                            <Image
                                src={seatOrderRingImage}
                                quality={100}
                                alt="image Girl"
                                className="absolute -bottom-2/3 md:-bottom-1/3 -right-3 md:-right-10  lg:h-[400px] lg:w-[150px] lg:rotate-12"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative mt-10 lg:mt-40 lg:mb-24">
                <div className="font-graphik">
                    <h2 className="text-2xl text-[#90A18B] font-medium mb-4 font-inter">
                        {t("Sevimli o'rindiq")}
                    </h2>
                    <p className="text-[32px] md:text-[40px] xl:text-[65px] leading-[42px] md:leading-[50px] xl:leading-[77.5px] font-normal font-inter max-w-5xl">
                        {t(" Siz o'zingiz uchun afzal ko'rgan o'rindiqni tanlash tanloviga egasiz")}
                    </p>
                    <div
                        className="w-[190px]  lg:w-[450px]  h-[100px] lg:h-[300px] bg-[#FF354DBA] blur-[50px] lg:blur-[125px] absolute top-0 right-0 opacity-50 -z-10"></div>
                    <div
                        className="w-[175px]  lg:w-[450px] h-[92px] lg:h-[300px] bg-[#2C7FFE] blur-[50px] lg:blur-[125px] absolute top-0 translate-x-full opacity-50 -z-10"></div>
                </div>
            </div>
            <div className="flex justify-center mb-24 lg:mb-36">
                <div className="inline-flex  flex-col lg:flex-row items-center justify-center  font-graphik">
                    <div
                        className="border-2 border-black hover:border-transparent hover:border-2 h-[350px] w-[350px]  2xl:h-[460px] 2xl:w-[460px]  rounded-full flex justify-center items-end  relative group cursor-pointer">
                        <Image
                            src={seatCircleImage}
                            alt="image"
                            fill
                            className="-z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        />
                        <div className="p-12 text-center  group-hover:text-white">
                            <h3 className="text-[24px] leading-[34px] font-medium max-w-[150px] mb-3.5 z-10">
                                {t(" Qo'shimcha o'rindiq")}
                            </h3>
                            <p className="font-montserrat text-xl">{t("1-bosqich")}</p>
                        </div>
                    </div>
                    <div
                        className="border-2 border-black hover:border-transparent hover:border-2  h-[350px] w-[350px]  2xl:h-[460px] 2xl:w-[460px] rounded-full flex justify-center items-end -mt-10 lg:mt-0 lg:-ml-10 relative group cursor-pointer">
                        <div className="p-12 text-center  group-hover:text-white">
                            <h3 className="text-[24px] leading-[34px] font-medium max-w-[150px] mb-3.5">
                                {t("Old o'rindiq qismi")}
                            </h3>
                            <p className={"font-montserrat text-xl"}>{t("2-bosqich")}</p>
                        </div>
                        <Image
                            src={seatCircleImage}
                            alt="image"
                            fill
                            className="-z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        />
                    </div>
                    <div
                        className="border-2 border-black hover:border-transparent hover:border-2  h-[350px] w-[350px]  2xl:h-[460px] 2xl:w-[460px]  rounded-full flex justify-center items-end -mt-10 lg:mt-0 lg:-ml-10  relative group cursor-pointer">
                        <div className="p-12 text-center  group-hover:text-white">
                            <h3
                                className={
                                    "text-[24px] leading-[34px] font-medium max-w-[150px] mb-3.5"
                                }
                            >
                                {t("Standart zona o'rindig'i")}
                            </h3>
                            <p className={"font-montserrat text-xl"}>{t("3-bosqich")}</p>
                        </div>
                        <Image
                            src={seatCircleImage}
                            alt="image"
                            fill
                            className="-z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        />
                    </div>
                </div>
            </div>

            {
                getSelectedServicesByServiceType(get(selectedServices, 'data.data', []), SERVICE_TYPES.CHOOSE_SEAT).map((service: any) =>
                    <div key={get(service, 'id')}
                         className="fixed md:static bottom-0 inset-x-0 z-50 bg-white bg-opacity-90  md:bg-[#F9F9F9] py-5 px-6 md:rounded-medium flex flex-col gap-y-4 md:flex-row justify-between  md:mb-8 shadow-[0px_-2px_4px_rgba(121,121,121,0.35)] md:shadow-none">
                        <div>
                            <h2 className="font-graphik text-[32px] leading-[44px] font-medium flex items-center gap-2">
                                {get(service, 'seat')} <span className="w-6 inline-block h-0.5 bg-black"/>
                                <NumericFormat displayType={'text'} thousandSeparator={' '}
                                               value={get(service, 'amount', 0) || 0}/>
                                <span className="opacity-40">{t("UZS")}</span>
                            </h2>
                            <p className="font-inter text-xs leading-5">
                                {t("Havo kemasida sizning joyingiz. Haq to‘lanmaganda bronlash 24\n" +
                                    "                                soatdan so‘ng bekor qilinadi.")}
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => deleteSeat(service)}
                                className=" border-2 border-black  rounded-default font-inter text-sm leading-4 font-semibold py-4 px-9">
                                {t("Bekor qilish")}
                            </button>
                            <button
                                onClick={() => router.push(`/payment?ticketNumber=${get(serviceData, 'ticketNumber')}`)}
                                className=" bg-primary-red rounded-default font-inter text-sm text-white leading-4 font-semibold py-4 px-9 border-2 border-transparent"
                            >
                                {t("To’lash")}
                            </button>
                        </div>
                    </div>)
            }
            <Modal classNames={'bg-white'} full open={open} setOpen={() => setOpen(false)}>
                <div
                    className="bg-[#FFFFFF] md:bg-opacity-90 backdrop-blur-[20px] shadow-[0px_-20px_30px_rgba(0, 0, 0, 0.19)] rounded-t-[20px] md:rounded-[20px]  pt-5  p-[15px] md:p-[25px]">
                    <div className="hidden md:flex justify-between mb-6">
                        <h3 className={'text-black font-semibold text-3xl '}>{t("O’rindiq tanlash")}</h3>

                        <div className="flex md:justify-end items-center gap-2.5 text-white text-sm font-semibold ">
                            {selectedSeat && <>
                                <button onClick={chooseSeat}
                                        className="bg-primary-blue py-4 flex-none lg:px-8 rounded-[10px]">
                                    {t("Saqlash")}
                                </button>
                                <button onClick={() => {
                                    setOpen(false);
                                    router.push('/payment')
                                }} className="bg-primary-red flex-none  py-4  lg:px-8 rounded-[10px]">
                                    {t(" Hoziroq to’lash")}
                                </button>
                            </>}
                            <button
                                className="p-[17px] bg-white rounded-default"
                                onClick={() => setOpen(false)}
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
                    </div>
                    <div>
                        {isLoadingAirplane ? 'Loading...' : <div className="grid grid-cols-12 items-start">
                            <div className="col-span-12 md:col-span-3 ">
                                <div className={'border border-[#D4D7DE] rounded-[30px] px-8 py-7'}>
                                    <h3 className={'text-black font-medium text-2xl mb-10'}>{get(airplane, 'data.data.nameUz')} {t("samolyotidan")}
                                        {t("joy tanlang")}</h3>
                                    <ul>
                                        <li className={'flex items-center font-medium text-black mb-6'}>
                                            <Image width={50} height={50}
                                                   loader={() => get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.BUSINESS_CLASS), 'free.url')}
                                                   className={'mr-7'}
                                                   src={get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.BUSINESS_CLASS), 'free.url')}
                                                   alt={'seat'}/><span>{t(get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.BUSINESS_CLASS), 'free.title'))}</span>
                                        </li>
                                        <li className={'flex items-center font-medium text-black mb-6'}>
                                            <Image width={50} height={50}
                                                   loader={() => get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.BUSINESS_CLASS), 'busy.url')}
                                                   className={'mr-7'}
                                                   src={get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.BUSINESS_CLASS), 'busy.url')}
                                                   alt={'seat'}/><span>{t(get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.BUSINESS_CLASS), 'busy.title'))}</span>
                                        </li>
                                        <li className={'flex items-center font-medium text-black '}>
                                            <Image width={50} height={50}
                                                   loader={() => get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.BUSINESS_CLASS), 'selected.url')}
                                                   className={'mr-7'}
                                                   src={get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.BUSINESS_CLASS), 'selected.url')}
                                                   alt={'seat'}/><span>{t(get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.BUSINESS_CLASS), 'selected.title'))}</span>
                                        </li>
                                    </ul>
                                    <hr className={'my-8'}/>

                                    <ul>
                                        <li className={'flex items-center font-medium text-black mb-6'}>
                                            <Image width={50} height={50}
                                                   loader={() => get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.ECONOMY_CLASS), 'free.url')}
                                                   className={'mr-7'}
                                                   src={get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.ECONOMY_CLASS), 'free.url')}
                                                   alt={'seat'}/><span>{t(get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.ECONOMY_CLASS), 'free.title'))}</span>
                                        </li>
                                        <li className={'flex items-center font-medium text-black mb-6'}>
                                            <Image width={50} height={50}
                                                   loader={() => get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.ECONOMY_CLASS), 'busy.url')}
                                                   className={'mr-7'}
                                                   src={get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.ECONOMY_CLASS), 'busy.url')}
                                                   alt={'seat'}/><span>{t(get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.ECONOMY_CLASS), 'busy.title'))}</span>
                                        </li>
                                        <li className={'flex items-center font-medium text-black '}>
                                            <Image width={50} height={50}
                                                   loader={() => get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.ECONOMY_CLASS), 'selected.url')}
                                                   className={'mr-7'}
                                                   src={get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.ECONOMY_CLASS), 'selected.url')}
                                                   alt={'seat'}/><span>{t(get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.ECONOMY_CLASS), 'selected.title'))}</span>
                                        </li>
                                    </ul>
                                </div>
                                {
                                    selectedSeat && <Heading
                                        title={<div>{get(selectedSeat, 'number')}{get(selectedSeat, 'code')} - <NumericFormat displayType={'text'} thousandSeparator={' '} value={get(selectedSeat,'amount',0)} suffix={' UZS'}/> </div>}
                                        titleClass="text-[20px] leading-5 md:text-[32px] !font-semibold mt-10"
                                        subTitle={t("Siz tanlagan o’rindiq")}
                                        subTitleClass="font-medium leading-[30px] !text-black"
                                    />
                                }
                            </div>
                            <div
                                className="col-span-12 md:col-span-9 max-h-[80vh] overflow-y-auto relative text-center">
                                <div className={'relative w-[789px] h-[2816px] mx-auto'}>
                                    <ul>
                                        {filterSeatsByClassId(get(airplane, 'data.data.seats', []), get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.BUSINESS_CLASS).map((seat, index) =>
                                            <li
                                                onClick={() => !get(seat, 'isBusy') ? handleSelectSeat(seat) : {}}
                                                style={{
                                                    left: get(seat, 'positionX') + 'px',
                                                    top: get(seat, 'positionY') + 'px'
                                                }} key={get(seat, 'id')}
                                                className={clsx(`seat_chair`, {'cursor-pointer': !get(seat, 'isBusy')})}>
                                                <Image
                                                    width={60}
                                                    height={60}
                                                    loader={() => get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.BUSINESS_CLASS), `${get(seat, 'id') == get(selectedSeat, 'id') ? 'selected' : get(seat, 'isBusy') ? 'busy' : 'free'}.url`)}
                                                    src={get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.BUSINESS_CLASS), 'selected.url')}
                                                    alt={'seat'}/>
                                                {!get(seat, 'isBusy') && !isEqual(get(seat, 'id'), get(selectedSeat, 'id')) &&
                                                    <span className={'seat_chair_code'}>{get(seat, 'code')}</span>}
                                            </li>)}
                                    </ul>

                                    <ul>
                                        {filterSeatsByClassId(get(airplane, 'data.data.seats', []), get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.ECONOMY_CLASS).map((seat, index) =>
                                            <li
                                                onClick={() => !get(seat, 'isBusy') ? handleSelectSeat(seat) : {}}
                                                style={{
                                                    left: get(seat, 'positionX') + 'px',
                                                    top: get(seat, 'positionY') + 'px'
                                                }} key={get(seat, 'id')}
                                                className={clsx(`seat_chair`, {'cursor-pointer': !get(seat, 'isBusy')})}>
                                                <Image
                                                    width={54}
                                                    height={51}
                                                    loader={() => get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.ECONOMY_CLASS), `${get(seat, 'id') == get(selectedSeat, 'id') ? 'selected' : get(seat, 'isBusy') ? 'busy' : 'free'}.url`)}
                                                    src={get(findCabinClassType(get(airplane, 'data.data.cabinClass', []), CABIN_CLASSES.ECONOMY_CLASS), 'selected.url')}
                                                    alt={'seat'}/>
                                                {!get(seat, 'isBusy') &&  !isEqual(get(seat, 'id'), get(selectedSeat, 'id')) &&
                                                    <span className={'seat_chair_code'}>{get(seat, 'code')}</span>}
                                            </li>)}
                                    </ul>
                                    <Image width={789} height={2816} className={' relative z-10'}
                                           loader={() => get(airplane, 'data.data.imageUrl')}
                                           src={get(airplane, 'data.data.imageUrl')} alt={'airplaneImg'}/>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </Modal>
            <Modal classNames={'!max-w-[824px]'} hidden={false} open={!isNil(temporarySeat)}
                   setOpen={() => setTemporarySeat(null)}>
                <div
                    className="bg-[#FFFFFF] md:bg-opacity-90 backdrop-blur-[20px] shadow-[0px_-20px_30px_rgba(0, 0, 0, 0.19)] rounded-t-[20px] md:rounded-[20px]  pt-5  p-[15px] md:p-[25px]">
                    <div className="hidden md:flex justify-between mb-10 items-start">
                        <h3 className={'text-black font-semibold text-3xl '}>Siz {get(temporarySeat, 'number')}{get(temporarySeat, 'code')} o’rindiqni
                            tanladingiz.
                            Narxi <NumericFormat displayType={'text'} thousandSeparator={' '} value={get(temporarySeat,'amount',0)} suffix={' UZS'}/>. Davom etishga rozimisiz</h3>
                        <button
                            className="p-[17px] bg-white rounded-default"
                            onClick={() => setTemporarySeat(null)}
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
                                onClick={() => setTemporarySeat(null)}
                                className=" border-2 border-black  rounded-default font-inter text-base leading-4 font-semibold py-4 px-9">
                                Yo’q
                            </button>
                            <button
                                onClick={() => {
                                    setSelectedSeat(temporarySeat);
                                    setTemporarySeat(null);
                                }}
                                className=" bg-primary-red rounded-default font-inter text-base text-white leading-4 font-semibold py-4 px-9 border-2 border-transparent"
                            >
                                Ha, roziman
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </Fragment>
    );
};

export default Index;
