import Image from "next/image";
import React, {Fragment} from "react";
import {
    seatBannerImage,
    seatCircleImage,
    seatOrderImage,
    seatOrderRingImage,
} from "../../../assets/images/services/seat-services";
import {Banner, Modal} from "../../../components";
import {borderBottom} from "../../../assets/images/hero";
import {useRouter} from "next/router";
import airplaneImg from "../../../assets/images/seat/airplane.png"
import {useGetQuery} from "../../../hooks";
import {KEYS} from "../../../constants/keys";
import {URLS} from "../../../constants/urls";
import emptySeatIcon from "../../../assets/images/seat/seat_img.png"
import busySeatIcon from "../../../assets/images/seat/busy_seat_img.png"
import selectedSeatIcon from "../../../assets/images/seat/selected_seat_img.png"
import {get} from "lodash";

interface Props {
    flightCode?: string;
}

const Index = ({flightCode}: Props) => {
    const router = useRouter();
    const {data: airplane, isLoading: isLoadingAirplane} = useGetQuery(
        {
            key: KEYS.getAirplanes,
            url: `${URLS.getAirplanes}/HY342`,
            enabled: !!(flightCode)
        })
    console.log('airplane', airplane)
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
                            Biron bir o'rindiq tanlamoqchi bo'lsangiz, jo'nashdan kamida{" "}
                            <span className="inline-block relative text-primary-red">
                24 soat
                <Image
                    src={borderBottom}
                    alt="Image"
                    className="w-full absolute"
                />
              </span>{" "}
                            oldin xizmatga buyurtma bering.
                        </p>
                        <button className="font-poppins bg-primary-red px-6 py-4 text-base rounded-[10px]">
                            O’rindiq tanlash
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
                        Sevimli o'rindiq
                    </h2>
                    <p className="text-[32px] md:text-[40px] xl:text-[65px] leading-[42px] md:leading-[50px] xl:leading-[77.5px] font-normal font-inter max-w-5xl">
                        Siz o'zingiz uchun afzal ko'rgan o'rindiqni tanlash tanloviga egasiz
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
                                Qo'shimcha o'rindiq
                            </h3>
                            <p className="font-montserrat text-xl">1-bosqich</p>
                        </div>
                    </div>
                    <div
                        className="border-2 border-black hover:border-transparent hover:border-2  h-[350px] w-[350px]  2xl:h-[460px] 2xl:w-[460px] rounded-full flex justify-center items-end -mt-10 lg:mt-0 lg:-ml-10 relative group cursor-pointer">
                        <div className="p-12 text-center  group-hover:text-white">
                            <h3 className="text-[24px] leading-[34px] font-medium max-w-[150px] mb-3.5">
                                Old o'rindiq qismi
                            </h3>
                            <p className={"font-montserrat text-xl"}>2-bosqich</p>
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
                                Standart zona o'rindig'i
                            </h3>
                            <p className={"font-montserrat text-xl"}>3-bosqich</p>
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

            <div
                className="fixed md:static bottom-0 inset-x-0 z-50 bg-white bg-opacity-90  md:bg-[#F9F9F9] py-5 px-6 md:rounded-medium flex flex-col gap-y-4 md:flex-row justify-between  md:mb-8 shadow-[0px_-2px_4px_rgba(121,121,121,0.35)] md:shadow-none">
                <div>
                    <h2 className="font-graphik text-[32px] leading-[44px] font-medium flex items-center gap-2">
                        14D <span className="w-6 inline-block h-0.5 bg-black"/>
                        75 000
                        <span className="opacity-40">UZS</span>
                    </h2>
                    <p className="font-inter text-xs leading-5">
                        Havo kemasida sizning joyingiz. Haq to‘lanmaganda bronlash 24
                        soatdan so‘ng bekor qilinadi.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button
                        className=" border-2 border-black  rounded-default font-inter text-sm leading-4 font-semibold py-4 px-9">
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
            <Modal full open={true} setOpen={() => {
            }}>
                <div
                    className="bg-[#FFFFFF] md:bg-opacity-90 backdrop-blur-[20px] shadow-[0px_-20px_30px_rgba(0, 0, 0, 0.19)] rounded-t-[20px] md:rounded-[20px]  pt-5  p-[15px] md:p-[25px]">
                    <div className="hidden md:flex justify-between mb-6">
                        <h3 className={'text-black font-semibold text-3xl '}>O’rindiq tanlash</h3>

                        <button
                            className="p-[17px] bg-white rounded-default"
                            onClick={() => {
                            }}
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
                        <div className="grid grid-cols-12">
                            <div className="col-span-4 border border-[#D4D7DE] rounded-[30px] p-8">
                                <h3 className={'text-black font-medium text-xl mb-8'}>{get(airplane, 'data.data.nameUz')} samolyotidan
                                    joy tanlang</h3>
                                <ul>
                                    <li className={'flex items-center font-medium text-black mb-6'}>
                                        <Image className={'mr-8'} src={emptySeatIcon} alt={'seat'}/><span>Biznes klas
bo’sh o’rindiqlari</span>
                                    </li>
                                    <li className={'flex items-center font-medium text-black mb-6'}>
                                        <Image className={'mr-8'} src={busySeatIcon} alt={'seat'}/><span>Biznes klas
band o’rindiqlari</span>
                                    </li>
                                    <li className={'flex items-center font-medium text-black'}>
                                        <Image className={'mr-8'} src={selectedSeatIcon} alt={'seat'}/><span>Biznes klas
siz tanlagan o’rindiq</span>
                                    </li>
                                </ul>
                                <hr className={'my-8'}/>

                                <ul>
                                    <li className={'flex items-center font-medium text-black mb-6'}>
                                        <Image className={'mr-8'} src={emptySeatIcon} alt={'seat'}/><span>Ekonom klas
bo’sh o’rindiqlari</span>
                                    </li>
                                    <li className={'flex items-center font-medium text-black mb-6'}>
                                        <Image className={'mr-8'} src={busySeatIcon} alt={'seat'}/><span>Ekonom klas
band o’rindiqlari</span>
                                    </li>
                                    <li className={'flex items-center font-medium text-black'}>
                                        <Image className={'mr-8'} src={selectedSeatIcon} alt={'seat'}/><span>Ekonom klas
siz tanlagan o’rindiq</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-8 max-h-[80vh] overflow-y-auto relative text-center">
                                <div className={'relative w-[780px] mx-auto'}>
                                    <ul>
                                        <li className={'seat_chair absolute left-[102px] top-[626px] z-50'}>
                                            <svg width={60} height={60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x={6} width="47.3684" height={43} rx={19} fill="#FAC2CD" />
                                                <path d="M0.662429 19.4832C1.35705 16.8262 4.49988 17.6261 4.49988 20.3637V24.6527C4.49988 36.4578 14.5735 46.0277 26.9999 46.0277H32.9999C45.4263 46.0277 55.4999 36.4578 55.4999 24.6527V20.3632C55.4999 17.6256 58.6427 16.8257 59.3374 19.4826C59.7703 21.1381 60 22.8699 60 24.6526V33.2026C60 44.2152 51.2336 53.2826 39.9686 54.4504C39.9893 54.6309 40 54.8143 40 55C40 57.7614 37.6436 60 34.7368 60H25.2632C22.3564 60 20 57.7614 20 55C20 54.8143 20.0107 54.6309 20.0314 54.4504C8.76643 53.2826 0 44.2151 0 33.2026V24.6526C0 22.8701 0.229669 21.1385 0.662429 19.4832Z" fill="#1F78FF" />
                                                <rect x={3} y="21.7998" width={6} height="2.85" rx="1.425" fill="black" />
                                                <rect x={20} y={50} width={20} height={10} rx={5} fill="black" />
                                                <rect x={51} y="21.7998" width={6} height="2.85" rx="1.425" fill="black" />
                                            </svg>
                                            {/*<Image*/}
                                            {/*    width={60}*/}
                                            {/*    height={60}*/}
                                            {/*    className={'seat_chair_icon'}*/}
                                            {/*    src={emptySeatIcon}*/}
                                            {/*    alt={'seat'}/>*/}
                                            <span className={'seat_chair_code'}>A</span>
                                        </li>

                                    </ul>
                                    <Image width={780} height={2800} className={' relative z-10'}
                                           loader={() => get(airplane, 'data.data.imageUrl')}
                                           src={get(airplane, 'data.data.imageUrl')} alt={'airplaneImg'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </Fragment>
    );
};

export default Index;
