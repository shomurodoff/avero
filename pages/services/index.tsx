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
  );
};

export default Index;
