import React, { Fragment, useState } from "react";
import { Modal, PassengerFilter, SearchForm, Tab } from "../../components";
import SeatServices from "./seat";
import FoodServices from "./food";
import WeightServices from "./wieght";
import {
  tabCabin,
  tabCase,
  tabMeal,
  tabPlane,
} from "../../assets/images/service";
import Loader from "../../components/loader/loader";
import { useRouter } from "next/router";
import { get } from "lodash";
import { updateReturn } from "typescript";
import clsx from "clsx";

const Index: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [opacity, setOpacity] = useState<boolean>(true);
  const [openForm, setOpenForm] = useState<boolean>(false);
  const router = useRouter();

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
      content: (
        <div className={"h-[80vh] flex justify-center items-center"}>
          <h1 className="text-3xl">Coming Soon</h1>
        </div>
      ),
    },
  ];

  setTimeout(() => {
    setOpacity(false);
  }, 8000);

  setTimeout(() => {
    setLoading(false);
  }, 9000);

  return (
    <Fragment>
      <div
        className={clsx(
          "transition-opacity duration-1000 opacity-100",
          !loading && "hidden",
          !opacity && "opacity-0"
        )}
      >
        <Loader airway={get(router, "query.airways")} />
      </div>
      <PassengerFilter setOpenForm={setOpenForm} />
      <Tab data={tabs} activeContent={Number(get(router, "query.services"))} />
      <Modal open={openForm} setOpen={setOpenForm}>
        <div className="bg-[#FFFFFF] md:bg-opacity-90 backdrop-blur-[20px] shadow-[0px_-20px_30px_rgba(0, 0, 0, 0.19)] rounded-t-[20px] md:rounded-[20px] pb-7 pt-5  p-[15px] md:p-[25px] md:pb-28">
          <div className="hidden md:flex justify-end mb-10">
            <button
              className="p-[17px] bg-white rounded-default"
              onClick={() => setOpenForm(false)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99992 6.23242L14.1874 0.0449219L15.9549 1.81242L9.76742 7.99992L15.9549 14.1874L14.1874 15.9549L7.99992 9.76742L1.81242 15.9549L0.0449219 14.1874L6.23242 7.99992L0.0449219 1.81242L1.81242 0.0449219L7.99992 6.23242Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div>
            <h2 className="text-center text-xl lg:text-[40px]  leading-[30px] lg:leading-[60px] font-semibold font-montserrat mb-[30px] lg:mb-11 max-w-5xl mx-auto">
              Joy band qiling, mos ovqat tanlang va boshqalar xizmatlardan
              foydalaning
            </h2>
          </div>
          <SearchForm modal />
        </div>
      </Modal>
    </Fragment>
  );
};

export default Index;
