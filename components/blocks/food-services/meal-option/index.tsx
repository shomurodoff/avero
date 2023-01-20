import { get, map } from "lodash";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { NumericFormat } from "react-number-format";
import { Heading } from "../../..";

interface Props {
  foodOptions: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: StaticImageData;
  }[];
}

const Index = ({ foodOptions }: Props) => {
  return (
    <div className="grid grid-cols-12 gap-6">
      {map(foodOptions, (option) => (
        <div className="col-span-3">
          <div className="relative">
            <Image
              src={get(option, "image", "")}
              alt={"new Image"}
              layout={"responsive"}
              className="mb-5"
            />
          </div>
          <Heading
            title={get(option, "title", "")}
            titleClass="text-lg !font-bold leading-snug mb-2.5"
            subTitle={get(option, "description", "")}
            subTitleClass="text-sm !text-black"
          />
          <div className="flex gap-5 items-center">
            <button className="flex items-center gap-3 border-2 border-black font-inter font-bold rounded-[10px]  py-3 px-[22px] text-sm leading-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_429_1457)">
                  <path
                    d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_429_1457">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Tanlash
            </button>
            <NumericFormat
              value={get(option, "price", 0)}
              decimalSeparator="."
              displayType="text"
              thousandSeparator=" "
              suffix=" so’m"
              className="text-lg leading-6 font-inter font-medium"
              type="text"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;
