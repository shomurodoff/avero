import { get, map } from "lodash";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Heading } from "../../../../../../components";
import { Container } from "../../../../../../UI";
import { newsOne, newsThree, newsTwo } from "../../../../images/news-section";

const newsData: {
  id: number;
  title: string;
  releaseTime: string;
  image: StaticImageData;
}[] = [
  {
    id: 1,
    title: "Yangi havo sayohati - yangi imkoniyatlar",
    releaseTime: "12 Sen, 2022",
    image: newsOne,
  },
  {
    id: 2,
    title: "Visit Dubai kompaniyasi bilan hamkorlikda tanlovi",
    releaseTime: "12 Sen, 2022",
    image: newsTwo,
  },
  {
    id: 3,
    title: "Yangi xizmatlarimizdan foydalanib ko’ring",
    releaseTime: "12 Sen, 2022",
    image: newsThree,
  },
];

const Index = () => {
  return (
    <div>
      <Container className="mt-[100px] md:mt-[120px]">
        <Heading
          title="Yangiliklar"
          subTitle="Engage active clients at the right time and save time chasing unqualified leads"
          titleClass="text-[32px] leading-[45px] md:text-[45px] mb-2"
          className="mb-6 md:mb-[30px]"
        />
        <div className="grid grid-cols-12 gap-6">
          {map(newsData, (news) => (
            <div
              className="col-span-12 md:col-span-4"
              key={get(news, "id", "")}
            >
              <Image
                src={get(news, "image", "")}
                alt={"new Image"}
                layout={"responsive"}
                className="mb-6 rounded-large"
              />
              <Heading
                title={get(news, "title", "")}
                titleClass="!text-[18px] md:!text-[25px] !font-semibold !leading-snug mb-2.5 md:mb-6"
                subTitle={get(news, "releaseTime", "")}
                subTitleClass="text-sm text-black"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Index;
