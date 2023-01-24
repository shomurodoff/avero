import { clsx } from "clsx";
import Image from "next/image";
import React, { Fragment } from "react";
import {
  foodBanner,
  foodCloud,
  foodServing,
} from "../../../../assets/images/services/food-services";
import { tabMeal } from "../../../../assets/images/icons";
import Banner from "../../../banner";
import Card from "../../../card";

interface Props {
  scrollToMenu: any;
}

const Index = ({ scrollToMenu }: Props) => {
  return (
    <section>
      <Fragment>
        <Banner
          title="Ovqatingizga oldindan buyurtma bering"
          subTitle="O'zingiz uchun eng yaxshi variantni tanlang!. Taomga ketishdan kamida 24 yoki 36 soat oldin buyurtma berishni unutmang*"
          image={foodBanner}
          icon={tabMeal}
        />
      </Fragment>
      <div className="px-[60px]">
        <Card className=" !bg-primary-blue h-[400px] w-full !rounded-2xl p-11 pt-20 food-serving-bg">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="font-bold font-montserrat text-[80px] leading-none text-white">
                32
              </h2>
              <p className="font-medium text-[32px] leading-[42px] text-white max-w-xs">
                dan ortiq taom va ichimliklar
              </p>
            </div>
            <div>
              <button
                type="button"
                className="bg-primary-red px-9 py-5 rounded-2xl text-white font-medium text-lg z-10 cursor-pointer"
                onClick={scrollToMenu}
              >
                Menyu tanlash
              </button>
            </div>
            <div className="relative">
              <div className="absolute right-0 -translate-y-2/3 z-10">
                <Image
                  src={foodServing}
                  alt="Girl seving food"
                  width={450}
                  height={450}
                />
              </div>
              <div className="absolute left-[40%] -translate-y-96 z-10">
                <Image src={foodCloud} alt="Girl seving food" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Index;
