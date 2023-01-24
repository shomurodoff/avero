import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Banner, Modal, PassengerFilter, Tab } from "../../components";
import { MainLayout } from "../../layouts";
import clsx from "clsx";
import { isNull } from "lodash";
import { foodOptions, foodsMenu } from "../../mock/foods";
import {
  HeroSection,
  MealOption,
  MenuSection,
} from "../../components/blocks/food-services";
import { ServicesContainer } from "../../containers";

const Index = () => {
  return (
    <ServicesContainer />
    // <MainLayout>
    //   <PassengerFilter />
    //   <Tab />
    //   <div className={clsx(isOpenModal && "hidden")}>
    //     <HeroSection scrollToMenu={scrollToMenu} />
    //     <section ref={menuRef} className="px-[60px] py-32">
    //       <MenuSection options={foodsMenu} setOpen={setOpenModal} />
    //     </section>
    //   </div>
    //   <Modal open={isOpenModal} setOpen={setOpenModal}>
    //     <MealOption foodOptions={foodOptions} />
    //   </Modal>
    // </MainLayout>
    // <div className="container mx-auto">
  );
};

export default Index;
