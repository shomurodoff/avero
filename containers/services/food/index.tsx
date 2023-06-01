import clsx from "clsx";
import {get, map, head, capitalize, isNil, find} from "lodash";
import Image from "next/image";
import React, {useRef, useState} from "react";
import {NumericFormat} from "react-number-format";
import {
    foodBanner,
    foodCloud,
    foodServing,
} from "../../../assets/images/services/food-services";
import {Banner, Heading, Modal} from "../../../components";
import {useRouter} from "next/router";
import {useGetQuery, usePostQuery} from "../../../hooks";
import {KEYS} from "../../../constants/keys";
import {URLS} from "../../../constants/urls";
import {useTranslation} from "react-i18next";
import {useSettingsStore} from "../../../store";
import {config} from "../../../config";
import {AIRLINE_TYPES, SERVICE_TYPES} from "../../../constants";
import {getSelectedServicesByServiceType} from "../../../utils"
import {toast} from "react-hot-toast";


interface Props {
    serviceData?: any;
}

const Index = ({serviceData=null}: Props) => {
    const user: any = useSettingsStore((state: any) => get(state, "user"));
    const {t} = useTranslation()
    const router = useRouter();
    const [foodCategoryId, setFoodCategoryId] = useState<any>(null);
    const [temporaryFood, setTemporaryFood] = useState<any>(null);
    const menuRef = useRef<any>(null);
    const language: any = useSettingsStore((state: any) => get(state, "lang", config.DEFAULT_APP_LANG));
    const scrollToMenu = () => menuRef.current.scrollIntoView();
    const {data: foods} = useGetQuery({
        key: KEYS.getFoods,
        url: URLS.getFoods,
        method: 'post',
        params: {
            airlinesType: get(serviceData, 'airlinesType'),
            fromCity: get(serviceData, 'fromCity', 'DME'),
            toCity: get(serviceData, 'toCity', 'TAS'),
            foodCategoryId: foodCategoryId
        },
        enabled: !!(foodCategoryId)
    })
    const {data: foodCategories} = useGetQuery({
        key: KEYS.getFoodCategory,
        url: URLS.getFoodCategory,
    })
    const {data: selectedServices} = useGetQuery(
        {
            key: `${KEYS.getSelectedServices}-${get(serviceData, 'ticketNumber')}`,
            url: `${URLS.getSelectedServices}/${get(serviceData, 'ticketNumber')}`,
            enabled: !!(get(serviceData, 'ticketNumber'))
        })
    const {mutate: chooseMealRequest} = usePostQuery({listKeyId: KEYS.multiService})
    const {mutate: deleteMealRequest} = usePostQuery({listKeyId: KEYS.multiService})

    const getFoodCategory = (_id:any) => {
        return find(get(foodCategories,'data.data',[]),(_item:any)=>get(_item,'id')==_id)
    }
    const chooseMeal = () => {
        chooseMealRequest({
            url: URLS.multiService,
            attributes: get(serviceData, 'airlinesType') == AIRLINE_TYPES.CHARTER_FLIGHTS ? {
                airlinesType: get(serviceData, 'airlinesType'),
                serviceType: SERVICE_TYPES.CHOOSE_MEAL,
                ticketNumber: get(serviceData, 'ticketNumber', undefined),
                passportNumber: get(serviceData, 'passportNumber', undefined),
                rtid: get(serviceData, 'rtiId', undefined),
                meal: get(temporaryFood, 'id'),
                isAgent:!!(user)
            } : {
                airlinesType: get(serviceData, 'airlinesType'),
                serviceType: SERVICE_TYPES.CHOOSE_SEAT,
                ticketNumber: get(serviceData, 'ticketNumber', undefined),
                family: get(serviceData, 'family', undefined),
                meal: get(temporaryFood, 'id'),
                rtid: get(serviceData, 'rtiId', undefined),
                isAgent:!!(user)
            }
        }, {
            onSuccess: ({data}) => {
                setFoodCategoryId(null);
                setTemporaryFood(null);
            },
            onError: () => {
                setFoodCategoryId(null);
                setTemporaryFood(null);
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
                isAgent:!!(user)
            } : {
                airlinesType: get(_meal, 'airlinesType'),
                serviceType: SERVICE_TYPES.DELETE_MEAL,
                ticketNumber: get(_meal, 'ticketNumber', undefined),
                family: get(_meal, 'family', undefined),
                seat: get(_meal, 'meal', undefined),
                rtid: get(_meal, 'rtiId', undefined),
                isAgent:!!(user)
            }
        }, {
            onSuccess: () => {

            },
            onError: () => {

            }
        })
    }
    return (
        <div className="overflow-hidden ">
            <Banner
                title={t("Ovqatingizga oldindan buyurtma bering")}
                subTitle={t("O'zingiz uchun eng yaxshi variantni tanlang!. Taomga ketishdan kamida 24 yoki 36 soat oldin buyurtma berishni unutmang")}
                image={foodBanner}
            />
            <section className={"font-montserrat mb-40"}>
                <div
                    className=" bg-primary-blue rounded-2xl py-8 md:py-10 xl:pt-16 xl:pb-11 px-5 md:px-8 text-white font-montserrat relative grid grid-cols-12 bg-food-bg-line gap-y-16">
                    <div className="col-span-12 md:col-span-6 z-10">
                        <h2 className="text-[70px] md:text-[80px] leading-[80px] font-bold lg:mb-4">
                            32
                        </h2>
                        <p className="text-[28px] md:text-[32px] leading-10 mb-5 lg:mb-9 max-w-xs">
                            {t("dan ortiq taom va ichimliklar")}
                        </p>
                        <button
                            className="font-poppins bg-primary-red px-6 py-4 text-base rounded-[10px]"
                            onClick={()=>{
                                if(isNil(serviceData)){
                                        window.scrollTo(0, 0);
                                        toast.error(t('Please select ticket'),{position:"top-right"})
                                }else{
                                    scrollToMenu()
                                }
                            }}
                        >
                            {t("Menyu tanlash")}
                        </button>
                    </div>
                    <div className="relative col-span-12 md:col-span-6">
                        <div className="w-[350px] xl:w-[450px] md:absolute right-0 translate-x-1/3 md:translate-x-0">
                            <Image src={foodServing} alt="Image customer" quality={100}/>
                        </div>
                        <div className="absolute -top-10 md:-left-full  lg:-left-1/2 xl:left-auto  -z-0">
                            <Image src={foodCloud} alt="Image customer" quality={100}/>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className={clsx("relative mb-24", !!(foodCategoryId) && "hidden")}
                ref={menuRef}
            >
                <Heading
                    title={t("Menu")}
                    subTitle={t("Engage active clients at the right time and save time chasing unqualified leads")}
                    titleClass="text-[32px] leading-[45px]"
                    subTitleClass="text-sm leading-[24px]"
                />
                <div className="grid grid-cols-12 gap-6">
                    {map(get(foodCategories, 'data.data', []), (option) => (
                        <div
                            key={get(option, 'id')}
                            className="col-span-12 sm:col-span-6 md:col-span-3"
                            onClick={() => {
                                if(isNil(serviceData)){
                                    window.scrollTo(0, 0);
                                    toast.error(t('Please select ticket'),{position:"top-right"})
                                }else{
                                    setFoodCategoryId(get(option, 'id'))
                                }
                            }}
                        >
                            <Image
                                width={312}
                                height={200}
                                loader={() => get(option, "imageUrl")}
                                src={get(option, "imageUrl")}
                                alt={"new Image"}
                                layout={"responsive"}
                                className="mb-5 h-[200px] rounded-[25px] overflow-hidden"
                            />
                            <Heading
                                title={t(get(option, 'name'))}
                                titleClass="text-[20px] !font-bold leading-snug mb-1"
                                subTitle={t(get(option, 'description'))}
                                subTitleClass="text-sm text-black"
                                className="!mb-[30px]"
                            />
                        </div>
                    ))}
                </div>
            </section>
            {
                getSelectedServicesByServiceType(get(selectedServices, 'data.data', []), SERVICE_TYPES.CHOOSE_MEAL).map((_meal)=><div
                    className="fixed md:static bottom-0 inset-x-0 z-50 bg-white bg-opacity-90  md:bg-[#F9F9F9] py-5 px-6 md:rounded-medium flex flex-col gap-y-4 md:flex-row justify-between  md:mb-8 shadow-[0px_-2px_4px_rgba(121,121,121,0.35)] md:shadow-none">
                    <div>
                        <h2 className="font-graphik text-[32px] leading-[44px] font-medium flex items-center gap-2">
                            Sendvich va salatlar {get(_meal,'meal')}
                        </h2>
                        <p className="font-inter text-xs leading-5">
                            Sut mahsulotlaridan cheklangan miqdorda foydalanish bilan, osiyo
                            ziravorlari qo‘shilgan go‘sht va baliqsiz taom.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={()=>deleteMeal(_meal)}
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

            <Modal open={!!(foodCategoryId)} setOpen={() => setFoodCategoryId(null)}>
                <div
                    className="container mx-auto bg-white grid grid-cols-12 md:p-5 lg:p-10 rounded-t-[20px] lg:rounded-[20px]">
                    <div className="col-span-12 lg:col-span-6 px-[15px] pt-7 md:px-0 lg:mb-10">
                        <Heading
                            title={t(get(getFoodCategory(foodCategoryId),'name'))}
                            titleClass="text-[20px] leading-5 md:text-[32px] !font-semibold"
                            subTitle={t(get(getFoodCategory(foodCategoryId),'description'))}
                            subTitleClass="font-normal leading-[30px]"
                        />
                    </div>
                    <div
                        className="bg-[rgba(255, 255, 255, 0.9)] md:bg-none shadow-modal md:shadow-none bg-opacity-90 col-span-12 lg:col-span-6 lg:mb-10 order-3 lg:order-none px-[15px] py-5">
                        <div className="flex md:justify-end gap-2.5 text-white text-sm font-semibold ">
                            {!isNil(temporaryFood) && <>
                                <button onClick={chooseMeal} className="bg-primary-blue py-4 w-full lg:px-8 rounded-[10px]">
                                    {t("Saqlash")}
                                </button>
                                <button onClick={() => router.push(`/payment?ticketNumber=${get(serviceData, 'ticketNumber')}`)} className="bg-primary-red  py-4 w-full lg:px-8 rounded-[10px]">
                                    {t("Hoziroq to’lash")}
                                </button>
                            </>}
                            <button
                                className="bg-[#ECEEF2] w-[62px] h-[52px] px-4 hidden lg:flex justify-center items-center rounded-[10px]"
                                onClick={() => {
                                    setFoodCategoryId(null);
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
                                            <rect width="30" height="30" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-6 col-span-12 px-[15px] order-2 h-[50vh] overflow-auto">
                        {map(get(foods, 'data.data', []), (option) => (
                            <div className="col-span-6 lg:col-span-3">
                                <div className="relative">
                                    <Image
                                        width={312}
                                        height={200}
                                        loader={() => head(get(option, "imageUrls", [])) || ''}
                                        src={head(get(option, "imageUrls", [])) || ''}
                                        alt={"new Image"}
                                        className="mb-5 rounded-[25px]"
                                    />
                                </div>
                                <Heading
                                    title={get(option, `name${capitalize(language)}`, "")}
                                    titleClass="!text-sm md:text-lg !font-bold leading-snug mb-2 md:mb-2.5"
                                    subTitle={get(option, `description${capitalize(language)}`, "")}
                                    subTitleClass="text-xs md:text-sm !text-black line-clamp-3 md:line-clamp-5"
                                    className="mb-5 md:mb-10"
                                />
                                <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-5 md:items-center">
                                    <button
                                        onClick={() => setTemporaryFood(option)}
                                        className="flex items-center gap-3 border-2 border-black font-inter font-bold rounded-[10px]  py-3 px-[22px] text-sm leading-4">
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
                                                    <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        {t("Tanlash")}
                                    </button>
                                    <NumericFormat
                                        value={get(option, "amount", 0)}
                                        decimalSeparator="."
                                        displayType="text"
                                        thousandSeparator=" "
                                        suffix={t(" so’m") || ''}
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
