import React from "react";

import SeatServices from "../../../../containers/services/seat";
import FoodServices from "../../../../containers/services/food";
import WeightServices from "../../../../containers/services/wieght";
import { PassengerFilter, Tab } from "../../components";
import { tabCabin, tabMeal, tabCase, tabPlane } from "../../images";

const Index = () => {
  const tabs = [
    {
      id: 1,
      title: "O’rindiq tanlash",
      icon: tabCabin,
      content: <SeatServices />,
    },
    {
      id: 2,
      title: "Ovqat buyurtma",
      icon: tabMeal,
      content: <FoodServices />,
    },
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

  return (
    <div>
      <PassengerFilter />
      <Tab data={tabs} />
    </div>
  );
};

export default Index;
