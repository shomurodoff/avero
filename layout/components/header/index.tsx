import { MainPageLogo, ServicesPageLogo } from "../../images";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardButton from "./card-button";
import { Container } from "../../../UI";

interface Props {
  main?: boolean;
}

const Index: React.FC<Props> = ({ main }) => {
  return (
    <div className={clsx(main ? "bg-primary-blue" : "bg-[#F1F3F6]")}>
      <Container>
        <div className="w-full relative py-[35px]">
          <nav className="flex justify-start md:justify-center">
            <Link href={"/"}>
              <Image
                src={main ? MainPageLogo : ServicesPageLogo}
                alt="Logo Image"
                className="z-[9999]"
              />
            </Link>
          </nav>
          <div className="h-full items-center flex absolute right-0 bottom-0">
            <CardButton main={main} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Index;
