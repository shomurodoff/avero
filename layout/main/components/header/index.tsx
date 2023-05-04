import { MainPageLogo } from "../../../images";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "../../../../UI";
import { useRouter } from "next/router";
import Language from "./language";

interface Props {
  main?: boolean;
  payment?: boolean;
}

const Index: React.FC<Props> = ({ main, payment }) => {
  const router = useRouter();
  return (
    <div className={clsx("bg-primary-blue")}>
      <Container>
        <div className="w-full relative py-[35px]">
          <nav className={clsx("flex justify-start md:justify-center")}>
            <div className="z-10">
              <Link href={"/"}>
                <Image
                  src={MainPageLogo}
                  alt="Logo Image"
                  className="z-[9999]"
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
                  "md:text-xl font-montserrat  tracking-tighter text-white"
                )}
              >
                +998 (78)-100-00-00
              </a>
              <Language main={main} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Index;
