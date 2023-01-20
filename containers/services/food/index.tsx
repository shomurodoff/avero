import clsx from "clsx";
import { isNull } from "lodash";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Modal } from "../../../components";
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
      <div className={clsx("relative", isOpenModal && "hidden")}>
        <HeroSection scrollToMenu={scrollToMenu} />
        <section ref={menuRef} className="px-[60px] py-32">
          <MenuSection options={foodsMenu} setOpen={setOpenModal} />
        </section>
      </div>
      <Modal open={isOpenModal} setOpen={setOpenModal}>
        <MealOption foodOptions={foodOptions} />
      </Modal>
    </Fragment>
  );
};

export default Index;
