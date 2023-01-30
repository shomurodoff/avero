import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { PrimaryLogo, SecondaryLogo } from "../../../../assets/images/logos";

interface Props {
  rest?: {};
  primary?: boolean;
}
const Index: React.FC<Props> = ({ primary }) => {
  const router = useRouter();
  return (
    <header
      className={clsx(
        "font-inter text-2xl font-bold flex justify-center ",
        primary ? "bg-[#043785]" : "bg-[#F1F3F6]"
      )}
    >
      <Link href={"/"}>
        <Image
          src={primary ? PrimaryLogo : SecondaryLogo}
          alt="Logo"
          height={32}
          className="pt-8"
        />
      </Link>
    </header>
  );
};

export default Index;
