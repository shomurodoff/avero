import React, { Fragment, useState } from "react";
import { PassengerFilter, Tab, VideoLoader } from "../../components";
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
  const [loading, setLoading] = useState<boolean>(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  if (loading) {
    return <VideoLoader />;
  }
  return (
    <Fragment>
      <PassengerFilter />
      <Tab data={tabs} />
    </Fragment>
  );
};

export default Index;
