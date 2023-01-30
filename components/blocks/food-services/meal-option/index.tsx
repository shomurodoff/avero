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
    
  );
};

export default Index;
