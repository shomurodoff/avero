import { ServicesPageLogo } from "../../../images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "../../../../UI";
import Language from "./language";
import clsx from "clsx";
import { useRouter } from "next/router";
import {useTranslation} from "react-i18next";

const Index: React.FC = () => {
  const {t} = useTranslation()
  const router = useRouter();
  return (
    <div className={"bg-white"}>
      <Container>
      <div className="">
            <div className={"flex items-center justify-between gap-4 pt-4 md:hidden"}>
            <Image
                  src={ServicesPageLogo}
                  alt="Logo Image"
                  className="z-[9999] w-2/3 md:w-auto"
                  quality={100}
                />
              <Language />
            </div>
          </div> 
        <div className="w-full relative py-[35px]">
          <div>
            <div className="h-full items-center flex md:absolute md:left-0 md:bottom-0">
              <button
                className={
                  "flex gap-2.5 items-center font-poppins font-medium text-[16px] leading-[24px]"
                }
                onClick={() => router.back()}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_577_5810)">
                    <path
                      d="M10.828 11.9997L15.778 16.9497L14.364 18.3637L8 11.9997L14.364 5.63574L15.778 7.04974L10.828 11.9997Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_577_5810">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {t("Orqaga")}
              </button>
            </div>
            <h2
              className={
                "font-graphik text-[32px] leading-[32px] font-semibold mt-4 md:hidden"
              }
            >
              {t("To'lash uchun")}
            </h2>
          </div>
          <nav className={clsx("hidden md:flex justify-center")}>
            <div className="z-10">
              <div className={'cursor-pointer'} onClick={()=>router.back()}>
                <Image
                  src={ServicesPageLogo}
                  alt="Logo Image"
                  className="z-[9999] w-2/3 md:w-auto"
                  quality={100}
                />
              </div>
            </div>
          </nav>
          {/* <div className="h-full items-center flex absolute right-0 bottom-0">
            <div className={"flex items-center gap-4"}>
              <a
                href={`tel:+998781000000`}
                className={clsx(
                  "md:text-xl font-montserrat font-semibold tracking-tighter"
                )}
              >
                +998 (78)-100-00-00
              </a>
              <Language />
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Index;
