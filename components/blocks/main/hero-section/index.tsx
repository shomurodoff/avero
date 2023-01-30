import Image from "next/image";
import React from "react";
import { cabinCareIcon } from "../../../../assets/images/icons";
import { borderBottom, bgRight, bgLeft } from "../../../../assets/images/hero";

const Index: React.FC = () => {
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
          <label className="text-sm font-normal mb-1 ">Turi</label>
          <input
            type="text"
            className="bg-transparent focus:outline-none placeholder:text-white text-lg  z-50"
            placeholder={"Chipta"}
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
        <div className="col-span-12 md:col-span-2 flex flex-col px-5 py-4 bg-[#ffffff40] z-20">
          <label className="text-sm font-normal mb-1 ">Familya</label>
          <input
            type="text"
            className="bg-transparent focus:outline-none placeholder:text-white text-lg z-50"
            placeholder={"Kurbanov"}
          />
        </div>
        <div className="col-span-12 md:col-span-2 flex flex-col px-5 py-4 bg-[#ffffff40] rounded-b-[15px] md:rounded-bl-none  md:rounded-r-[15px] z-20">
          <label className="text-sm font-normal mb-1 ">Aeroport</label>
          <input
            type="text"
            className="bg-transparent focus:outline-none placeholder:text-white text-lg z-50"
            placeholder={"Uzairways"}
          />
        </div>
        <div className="col-span-12 md:col-span-2">
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
