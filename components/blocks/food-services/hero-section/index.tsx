import { clsx } from "clsx";
import Image from "next/image";
import React from "react";
import {
  foodBanner,
  foodCloud,
  foodServing,
} from "../../../../assets/images/food-services";
import { tabMeal } from "../../../../assets/images/icons";
import Card from "../../../card";

interface Props {
  scrollToMenu: any;
}

const Index = ({ scrollToMenu }: Props) => {
  return (
    <section>
      <div className={clsx("py-10 px-[60px] grid grid-cols-12 gap-6 ")}>
        <Card className="col-span-4 relative">
          <div className="py-12 pl-11 pr-20 flex flex-col justify-between h-full">
            <h3 className="text-[45px] leading-[60px] font-montserrat font-bold">
              Ovqatingizga oldindan buyurtma bering
            </h3>
            <p className="text-[#90A18B] text-base">
              O&apos zingiz uchun eng yaxshi variantni tanlang!. Taomga
              ketishdan kamida 24 yoki 36 soat oldin buyurtma berishni unutmang*
            </p>
          </div>
          <div className="absolute bg-primary-red p-16 rounded-full top-1/2 -translate-y-1/2 left-1/2 translate-x-2/4 z-10">
            <Image src={tabMeal} width={75} height={75} alt="meal icon" />
          </div>
        </Card>
        <Card className="col-span-8 relative">
          <Image
            src={foodBanner}
            alt="Image"
            height={500}
            layout={"responsive"}
          />
        </Card>
      </div>
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
