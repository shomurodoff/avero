import { ServicesPageLogo} from "../../../images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "../../../../UI";
import Language from "./language";
import { clsx } from "clsx";
import {useRouter} from "next/router";

const Index: React.FC = () => {
  const router = useRouter()
  const toBack = {
    pathname: '/',
    query: router.query
  }
  return (
    <div className={"bg-[#F1F3F6]"}>
      <Container>
        <div className="w-full relative py-[35px]">
          <nav className={clsx("flex justify-start lg:justify-center")}>
            <div className="z-10">
              <Link href={toBack}>
                <Image
                  src={ServicesPageLogo}
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
                className={clsx(
                  "md:text-xl font-montserrat font-semibold tracking-tighter"
                )}
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
