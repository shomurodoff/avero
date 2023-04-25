import { MainPageLogo } from "../../../images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "../../../../UI";
import Language from "./language";

const Index: React.FC = () => {
  return (
    <div className={"bg-primary-blue"}>
      <Container>
        <div className="w-full relative py-[35px]">
          <nav className={"flex justify-start lg:justify-center"}>
            <div className="z-10">
              <Link href={"/"}>
                <Image
                  src={MainPageLogo}
                  alt="Logo Image"
                  className="z-[9999] w-2/3 md:w-auto"
                  quality={100}
                />
              </Link>
            </div>
          </nav>
          <div className="h-full items-center flex absolute right-0 bottom-0">
            <div className={"flex items-center gap-4"}>
              <a
                href={`tel:+998781000000`}
                className={
                  "text-sm md:text-xl font-montserrat font-semibold tracking-tighter text-white"
                }
              >
                +998 (78)-100-00-00
              </a>
              <Language />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Index;
