import { get, map } from "lodash";
import Image from "next/image";
import React from "react";
import { Heading } from "../../..";

interface Props {
  setOpen: any;
  options: {}[];
}

const Index = ({ setOpen, options }: Props) => {
  return (
    <>
      <Heading
        title="Menyu"
        subTitle="Engage active clients at the right time and save time chasing unqualified leads"
      />
      <div className="grid grid-cols-12 gap-6">
        {map(options, (option) => (
          <div className="col-span-3" onClick={() => setOpen(true)}>
            <Image
              src={get(option, "image", "")}
              alt={"new Image"}
              layout={"responsive"}
              className="mb-5"
            />
            <Heading
              title="Sendvich va salatlar"
              titleClass="text-[20px] !font-bold leading-snug mb-1.5"
              subTitle="7 ta taom mavjud"
              subTitleClass="text-sm text-black"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Index;
