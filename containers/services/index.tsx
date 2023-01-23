import React, { useState } from "react";
import { PassengerFilter, Tab } from "../../components";
import { MainLayout } from "../../layouts";
import SeatServices from "./seat";
import FoodServices from "./food";
import WeightServices from "./wieght";
import {
  tabCabin,
  tabCase,
  tabMeal,
  tabPlane,
} from "../../assets/images/icons";

const tabs = [
  {
    id: 1,
    title: "O’rindiq tanlash",
    icon: tabCabin,
    content: <SeatServices />,
  },
  { id: 2, title: "Ovqat buyurtma", icon: tabMeal, content: <FoodServices /> },
  {
    id: 3,
    title: "Yuklarni joylashtirish",
    icon: tabCase,
    content: <WeightServices />,
  },
  {
    id: 4,
    title: "Aeroport xizmatlari",
    icon: tabPlane,
    content: <SeatServices />,
  },
];

const Index: React.FC = () => {
  const [activeServices, setActiveServices] = useState<number>(0);
  return (
    <MainLayout>
      <PassengerFilter />
      <Tab data={tabs} />
    </MainLayout>
  );
};

export default Index;
