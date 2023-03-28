import React, { Fragment } from "react";
import {
  BgCasesMd,
  BgCasesSm,
  Cases,
  weightBanner,
} from "../../../assets/images/services/weight-services";
import { Banner } from "../../../components";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useStore } from "../../../store";
import { get, isEqual } from "lodash";
import { NumericFormat } from "react-number-format";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      weight: 0,
    },
  });
  const weight = useStore((state) => get(state, "weight", "0"));
  const setWeigt = useStore((state) => get(state, "setWeigt", () => {}));
  const resetWeigt = useStore((state) => get(state, "resetWeigt", () => {}));

  const onSubmit = (data: any) => {
    setWeigt(Number(get(data, "weight", 0)));
  };

  return (
    <Fragment>
      <Banner
        title="Qo’shimcha yuklaringiz xavfsizligi"
        subTitle="Engage active clients at the right time and save time chasing unqualified leads.  clients at the right time and save time chasingunqualified leads."
        image={weightBanner}
      />
      <section className="mb-24 lg:mb-32 font-montserrat md:font-graphik">
        <div className="px-5 md:px-11  pt-7 md:pt-[52px] bg-[#043785] rounded-large grid grid-cols-12 gap-y-16 md:g">
          <div className="col-span-12 lg:col-span-6 mb-7 z-10">
            <h3 className="text-white text-2xl lg:text-[35px] leading-[34px] lg:leading-[45px] max-w-xs lg:max-w-md mb-12">
              Ortiqcha yuk qo’shish uchun yuk og’irligini kiriting
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-[3px] font-inter mb-7 max-w-xs lg:max-w-md">
                <div className="flex-grow bg-white bg-opacity-25 px-[25px] py-4 rounded-l-medium flex flex-col">
                  <label className="text-sm leading-4 font-normal text-white mb-[5px]">
                    Yuk og'irligi
                  </label>
                  <input
                      className="focus:outline-0 bg-transparent text-[22px] leading-[26px] font-medium text-white w-full"
                      type="number"
                      placeholder="34"
                      {...register("weight")}
                  />
                </div>
                <div className="bg-white bg-opacity-25 flex items-end px-[25px] pt-4 pb-5 rounded-r-medium">
                  <h4 className=" text-[22px] leading-[26px] font-medium text-white">
                    KG
                  </h4>
                </div>
              </div>
              <button
                  className="text-base md:text-lg  leading-4 md:leading-5 font-medium font-poppins text-white bg-primary-red py-4 md:py-[18px] px-6 rounded-default"
                  type="submit"
              >
                Yuk qo’shish
              </button>
            </form>
          </div>
          <div className="col-span-12 lg:col-span-6 relative -z-0s">
            <div className="video-player bg-red-600 absolute -top-24 md:-top-36 right-0 lg:left-0 xl:-left-8 lg:right-auto lg:top-full lg:-translate-y-2/3  rounded-full z-10">
              <video
                  autoPlay
                  loop
                  muted
                  className="object-cover  h-40 w-40 md:w-72 md:h-72 xl:h-80 xl:w-80"
              >
                <source src="/case-video.mp4"></source>
              </video>
            </div>
            <div className="flex  justify-center lg:justify-end items-end w-full h-full">
              <Image
                  src={Cases}
                  alt="Image"
                  className="-mr-6 md:-mr-10 lg:-mr-10"
              />
            </div>
            <Image
                src={BgCasesSm}
                className="absolute top-0 -right-5 md:-right-11 lg:hidden"
                alt="Image"
            />
            <Image
                src={BgCasesMd}
                alt="Image"
                className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-1/2 -z-0 max-w-[500px]"
            />
          </div>
        </div>
      </section>
      <section className="font-graphik flex flex-col gap-y-2.5 md:gap-y-6 my-24">
        <div className="p-5 pt-10 lg:p-6 border rounded-large">
          <div className="flex flex-col md:flex-row gap-x-10 gap-y-4 md:items-center">
            <div className="flex items-center">
              <div className="w-[90px] lg:w-[135px] h-[90px] lg:h-[135px] bg-[#043785] rounded-full flex justify-center items-center">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  className="translate-x-1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_577_7473)">
                    <path
                      d="M15.97 5.43603C17.2247 5.43603 18.4512 5.8081 19.4945 6.50519C20.5378 7.20227 21.3509 8.19307 21.831 9.35228C22.3112 10.5115 22.4368 11.7871 22.192 13.0177C21.9473 14.2483 21.3431 15.3787 20.4558 16.2659C19.5686 17.1531 18.4382 17.7573 17.2076 18.0021C15.977 18.2469 14.7014 18.1213 13.5422 17.6411C12.383 17.1609 11.3922 16.3478 10.6951 15.3045C9.99804 14.2613 9.62598 13.0347 9.62598 11.78C9.62598 10.0975 10.2944 8.48387 11.4841 7.29414C12.6738 6.10441 14.2874 5.43603 15.97 5.43603ZM15.97 2.89844C14.2134 2.89844 12.4962 3.41933 11.0356 4.39525C9.57505 5.37117 8.43668 6.75829 7.76445 8.38118C7.09223 10.0041 6.91634 11.7899 7.25904 13.5127C7.60174 15.2356 8.44763 16.8181 9.68974 18.0602C10.9318 19.3024 12.5144 20.1482 14.2373 20.4909C15.9601 20.8336 17.7459 20.6577 19.3688 19.9855C20.9917 19.3133 22.3788 18.1749 23.3547 16.7144C24.3306 15.2538 24.8515 13.5366 24.8515 11.78C24.8515 9.42447 23.9158 7.16541 22.2502 5.49979C20.5846 3.83417 18.3255 2.89844 15.97 2.89844Z"
                      fill="white"
                    />
                    <path
                      d="M28.6582 38.4248H26.1206V32.0808C26.1206 30.3983 25.4522 28.7847 24.2625 27.5949C23.0727 26.4052 21.4591 25.7368 19.7766 25.7368H12.1638C10.4813 25.7368 8.86766 26.4052 7.67793 27.5949C6.4882 28.7847 5.81982 30.3983 5.81982 32.0808V38.4248H3.28223V32.0808C3.28223 29.7253 4.21796 27.4662 5.88358 25.8006C7.5492 24.135 9.80826 23.1992 12.1638 23.1992H19.7766C22.1321 23.1992 24.3912 24.135 26.0568 25.8006C27.7224 27.4662 28.6582 29.7253 28.6582 32.0808V38.4248Z"
                      fill="white"
                    />
                    <path
                      d="M32.4643 20.8914L29.1782 17.6052L27.3892 19.3942L32.4643 24.4694L41.3459 15.5878L39.5569 13.7988L32.4643 20.8914Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_577_7473">
                      <rect
                        width="40.6015"
                        height="40.6015"
                        fill="white"
                        transform="translate(0.744629 0.361328)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="">
              <h3 className="text-[32px] leading-8 mb-2.5 font-semibold">
                Ekonom-klass
              </h3>
              <p className="text-sm lg:text-base leading-6 lg:leading-[30px] font-inter font-normal">
                Ekonom-klassda har bir yo'lovchiga o'lchami 23x40x55 va
                og'irligi 8 kg dan oshmaydigan 1 dona kabina bagaji va har bir
                yo'lovchiga o'lchami 40x30x15 dan ortiq bo'lmagan yuk sifatida
                bitta shaxsiy buyumni olish mumkin.
              </p>
            </div>
          </div>
        </div>
        <div className="p-5 pt-10 lg:p-6 border rounded-large">
          <div className="flex flex-col md:flex-row gap-x-10 gap-y-4 md:items-center">
            <div className="flex items-center">
              <div className="w-[90px] lg:w-[135px] h-[90px] lg:h-[135px] bg-[#043785] rounded-full flex justify-center items-center">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  className="translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.225 5.07461C16.4797 5.07461 17.7062 5.44666 18.7494 6.14372C19.7926 6.84078 20.6057 7.83154 21.0859 8.99071C21.566 10.1499 21.6916 11.4254 21.4469 12.656C21.2021 13.8865 20.5979 15.0169 19.7107 15.9041C18.8235 16.7913 17.6932 17.3954 16.4626 17.6402C15.232 17.885 13.9565 17.7594 12.7974 17.2792C11.6382 16.7991 10.6474 15.986 9.95037 14.9428C9.25331 13.8995 8.88125 12.673 8.88125 11.4184C8.88125 9.73589 9.54961 8.12233 10.7393 6.93265C11.929 5.74297 13.5425 5.07461 15.225 5.07461ZM15.225 2.53711C13.4685 2.53711 11.7514 3.05799 10.2908 4.03387C8.83033 5.00975 7.692 6.39682 7.0198 8.01965C6.3476 9.64249 6.17172 11.4282 6.5144 13.151C6.85709 14.8738 7.70295 16.4563 8.94501 17.6983C10.1871 18.9404 11.7696 19.7863 13.4924 20.129C15.2152 20.4716 17.0009 20.2958 18.6237 19.6236C20.2465 18.9514 21.6336 17.813 22.6095 16.3525C23.5854 14.892 24.1063 13.1749 24.1063 11.4184C24.1063 9.06291 23.1706 6.80392 21.505 5.13837C19.8394 3.47281 17.5805 2.53711 15.225 2.53711Z"
                    fill="white"
                  />
                  <path
                    d="M27.9126 38.0629H25.3751V31.7191C25.3751 30.0367 24.7067 28.4231 23.5171 27.2334C22.3274 26.0437 20.7138 25.3754 19.0313 25.3754H11.4188C9.73638 25.3754 8.12282 26.0437 6.93314 27.2334C5.74345 28.4231 5.0751 30.0367 5.0751 31.7191V38.0629H2.5376V31.7191C2.5376 29.3637 3.4733 27.1047 5.13886 25.4391C6.80441 23.7736 9.06339 22.8379 11.4188 22.8379H19.0313C21.3868 22.8379 23.6458 23.7736 25.3113 25.4391C26.9769 27.1047 27.9126 29.3637 27.9126 31.7191V38.0629Z"
                    fill="white"
                  />
                  <path
                    d="M32.9873 11.418L30.9662 15.2242L26.6436 15.7495L29.8154 18.608L29.1811 22.8367L32.9873 20.4578L36.7936 22.8367L36.1592 18.608L39.3311 15.7495L34.8904 15.2242L32.9873 11.418Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="">
              <h3 className="text-[32px] leading-8 mb-2.5 font-semibold">
                Biznes-klass
              </h3>
              <p className="text-sm lg:text-base leading-6 lg:leading-[30px] font-inter font-normal">
                Biznes-klass yo'lovchilari, agar yukxalta o'lchamlari va
                og'irligi 23x40x55 va 8 kg (jami 16 kg) dan oshmasa, salonda
                ikkita yukxalta va har bir yo'lovchiga o'lchami 40x30x15 dan
                oshmasligi kerak bo'lgan bitta shaxsiy buyumni olib ketishlari
                mumkin.
              </p>
            </div>
          </div>
        </div>
      </section>
      {isEqual(weight, 0) ? (
        ""
      ) : (
        <div className="fixed md:static bottom-0 inset-x-0 z-50 bg-white bg-opacity-90  md:bg-[#F9F9F9] py-5 px-6 md:rounded-medium flex flex-col gap-y-4 md:flex-row justify-between  md:mb-8 shadow-[0px_-2px_4px_rgba(121,121,121,0.35)] md:shadow-none">
          <div>
            <h2 className="font-graphik text-[32px] leading-[44px] font-medium flex items-center gap-2">
              {weight} KG <span className="w-6 inline-block h-0.5 bg-black" />
              <NumericFormat
                value={Number(weight) * 13000}
                decimalSeparator="."
                displayType="text"
                thousandSeparator=" "
                type="text"
              />
              <span className=" opacity-40">UZS</span>
            </h2>
            <p className="font-inter text-xs leading-5">
              Qo’shimcha yuk miqdori. Siz qo’shimcha yuk uchun qo’shimcha pul
              to’laysiz.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              className=" border-2 border-black  rounded-default font-inter text-sm leading-4 font-semibold py-4 px-9"
              onClick={() => resetWeigt()}
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
      )}
    </Fragment>
  );
};

export default Index;
