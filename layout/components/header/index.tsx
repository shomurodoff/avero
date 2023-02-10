import { MainPageLogo, ServicesPageLogo } from "../../images";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardButton from "./card-button";
import { Container } from "../../../UI";

interface Props {
  main?: boolean;
  payment?: boolean;
}

const Index: React.FC<Props> = ({ main, payment }) => {
  return (
    <div
      className={clsx(
        payment ? "bg-white" : main ? "bg-primary-blue" : "bg-[#F1F3F6]"
      )}
    >
      <Container>
        <div className="w-full relative py-[35px]">
          {payment && (
            <div>
              <div className="h-full items-center flex md:absolute md:left-0 md:bottom-0">
                <button
                  className={
                    "flex gap-2.5 items-center font-poppins font-medium text-[16px] leading-[24px]"
                  }
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
                  Orqaga
                </button>
              </div>
              <h2
                className={
                  "font-graphik text-[32px] leading-[32px] font-semibold mt-4"
                }
              >
                To'lash uchun
              </h2>
            </div>
          )}
          <nav
            className={clsx(
              "flex justify-start md:justify-center",
              payment && "hidden md:block"
            )}
          >
            <Link href={"/"}>
              <Image
                src={main ? MainPageLogo : ServicesPageLogo}
                alt="Logo Image"
                className="z-[9999]"
              />
            </Link>
          </nav>
          {!payment && (
            <div className="h-full items-center flex absolute right-0 bottom-0">
              <CardButton main={main} />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Index;
