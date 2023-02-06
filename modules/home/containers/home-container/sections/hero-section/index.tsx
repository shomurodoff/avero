import Image from "next/image";
import React from "react";
import { borderBottom } from "../../../../../../assets/images/hero";
import { SearchForm } from "../../../../../../components";
import { Container } from "../../../../../../UI";
import { BgBottom, BgTop } from "../../../../images/hero-section";
import CabinIcon from "./CabinIcon";

const Index: React.FC = () => {
  return (
    <header className="font-inter text-2xl font-bold bg-[#043785] relative -z-0 text-white">
      <Container className="py-28 md:py-[90px]">
        <div className="text-center  mb-10">
          <h1 className="text-[44px] leading-[60px] md:text-[80px] md:leading-[90px] lg:text-[110px] lg:leading-[120px] font-bold font-montserrat !wider-tracking mb-2.5 max-w-xs md:max-w-4xl  mx-auto">
            Qulay{" "}
            <span className="relative">
              <span className="italic text-primary-red h-full  items-center inline-flex gap-2">
                <span className="bg-primary-red p-[9.5px] md:p-[17.5px] rounded-full">
                  <CabinIcon />
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
        <SearchForm />
      </Container>
      <Image
        src={BgBottom}
        alt="Background Image"
        className="absolute bottom-0 right-0 -z-0 w-56 md:w-72 lg:w-96"
      />
      <Image
        src={BgTop}
        alt="Background Image"
        className="absolute  -top-20 left-0 -z-10  w-56 md:w-72 lg:w-96"
      />
    </header>
  );
};

export default Index;
