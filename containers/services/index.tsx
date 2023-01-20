import React, { Fragment, useState } from "react";
import { PassengerFilter, Tab } from "../../components";
import { MainLayout } from "../../layouts";
import SeatServices from "./seat";
import FoodServices from "./food";
import { isEqual, map } from "lodash";

const services = [
  { id: 1, content: <SeatServices /> },
  { id: 2, content: <FoodServices /> },
  { id: 3, content: <FoodServices /> },
  { id: 4, content: <FoodServices /> },
];

const Index: React.FC = () => {
  const [activeServices, setActiveServices] = useState<number>(0);

  console.log(activeServices, "activeServices");

  return (
    <MainLayout>
      <PassengerFilter />
      <Tab setActive={setActiveServices} />
      {map(services, (service, index) => {
        return index === activeServices && service.content;
        if (isEqual(index, activeServices)) {
          return service.content;
        }
      })}
    </MainLayout>
  );
};

export default Index;
