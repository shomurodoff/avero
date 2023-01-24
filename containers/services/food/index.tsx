import clsx from "clsx";
import { isNull } from "lodash";
import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  bannerIcon,
  foodBanner,
} from "../../../assets/images/services/food-services";
import { Banner, Modal } from "../../../components";
import {
  HeroSection,
  MealOption,
  MenuSection,
} from "../../../components/blocks/food-services";
import { foodOptions, foodsMenu } from "../../../mock/foods";

const Index = () => {
  const [isOpenModal, setOpenModal] = useState<null | boolean>(null);
  const menuRef = useRef<any>(null);
  const scrollToMenu = () => menuRef.current.scrollIntoView();

  useEffect(() => {
    if (!isNull(isOpenModal)) {
      scrollToMenu();
    }
  }, [isOpenModal]);

  return (
    <Fragment>
      <Banner
        title="Ovqatingizga oldindan buyurtma bering"
        subTitle="O'zingiz uchun eng yaxshi variantni tanlang!. Taomga ketishdan kamida 24 yoki 36 soat oldin buyurtma berishni unutmang*"
        image={foodBanner}
        icon={bannerIcon}
      />
      {/* <HeroSection scrollToMenu={scrollToMenu} /> */}
      {/* <div className={clsx("relative", isOpenModal && "hidden")}>
        <section ref={menuRef} className="px-[60px] py-32">
          <MenuSection options={foodsMenu} setOpen={setOpenModal} />
        </section>
      </div> */}
      {/* <Modal open={isOpenModal} setOpen={setOpenModal}>
        <MealOption foodOptions={foodOptions} />
      </Modal> */}
    </Fragment>
  );
};

export default Index;
