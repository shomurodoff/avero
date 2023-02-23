import React, { Fragment, ReactNode, useEffect, useState } from "react";
import { filter, find, get, isEqual, map } from "lodash";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import ReactSelect from "react-select";
import { Container } from "../../UI";

interface Props {
  data: {
    id: number;
    title: string;
    icon: StaticImageData;
    content: ReactNode;
  }[];
  activeContent?: number;
}
const Index: React.FC<Props> = ({ data, activeContent }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    setActiveTab(activeContent ? activeContent : 0);
  }, []);

  return (
    <Fragment>
      <div className="hidden md:block bg-[#F1F3F6]">
        <Container>
          <nav className="bg-[#F1F3F6] px-[15px] md:px-8 xl:px-[60px] xl:pt-[30px] md:pt-5 relative before:absolute before:h-full before:w-[15px] md:before:w-[32px] xl:before:w-[60px] before:content-[attr(before)] before:bg-[#F1F3F6]  before:bottom-0 before:left-0 before:z-[90]  before:rounded-br-2xl after:absolute after:h-full  after:w-[15px] md:after:w-[32px] xl:after:w-[60px] after:content-[attr(after)] after:bg-[#F1F3F6]  after:bottom-0 after:right-0 after:z-10 after:rounded-bl-2xl">
            <ul className={"flex justify-between"}>
              {map(data, (tab, index) => (
                <li
                  key={get(tab, "id")}
                  className={clsx(
                    isEqual(index, activeTab)
                      ? "bg-white rounded-t-2xl text-black relative after:absolute after:h-1/2 after:w-5 after:content-[attr(after)] after:bg-white after:z-10 after:bottom-0 after:-right-2.5 before:absolute before:h-1/2 before:w-5 before:content-[attr(before)] before:bg-white before:z-10 before:bottom-0 before:-left-2.5"
                      : "bg-[#F1F3F6] rounded-b-2xl z-50",
                    activeTab !== index &&
                      activeTab - index !== 1 &&
                      activeTab - index !== -1
                      ? ""
                      : " ",
                    "w-full flex justify-center py-2 md:py-3 xl:py-6 cursor-pointer items-center gap-1 lg:gap-2"
                  )}
                  onClick={() => setActiveTab(index)}
                >
                  <div
                    className={clsx(
                      isEqual(index, activeTab)
                        ? "bg-primary-red"
                        : "bg-gray-300",
                      "lg:h-8 h-6 lg:w-8 w-6 flex justify-center items-center rounded-full p-0.5"
                    )}
                  >
                    <Image
                      src={get(tab, "icon")}
                      alt={"Icon"}
                      className={"text-black"}
                    />
                  </div>
                  <p
                    className={clsx(
                      isEqual(index, activeTab) ? " " : "text-black opacity-40",
                      "font-semibold  text-xs  lg:text-base xl:text-lg font-inter"
                    )}
                  >
                    {get(tab, "title")}
                  </p>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
      <div className="block md:hidden  bg-[#F1F3F6] pt-0.5">
        <nav className="px-[15px] pb-4">
          <ReactSelect
            isSearchable={false}
            onChange={(value) => {
              setActiveTab(get(value, "value", 0));
            }}
            defaultValue={{
              value: get(data[activeContent ? activeContent : 0], "id", 1) - 1,
              label: get(data[activeContent ? activeContent : 0], "title", ""),
              image: get(data[activeContent ? activeContent : 0], "icon", ""),
            }}
            options={map(data, (item, index) => {
              return {
                value: index,
                label: get(item, "title"),
                image: get(item, "icon"),
              };
            })}
            formatOptionLabel={(item) => (
              <div className="flex items-center gap-3">
                <span className="bg-primary-red p-2.5 rounded-full">
                  <Image src={get(item, "image", "")} alt="country-image" />
                </span>
                <span>{get(item, "label")}</span>
              </div>
            )}
            className="react-select-container"
            classNamePrefix="react-select"
            classNames={{
              control: (state) => {
                return state.isFocused
                  ? "p-[15px] !rounded-[15px] !border-primary-red !shadow-none"
                  : "p-[15px] !rounded-[15px] !border-[transparent] !shadow-none";
              },
              valueContainer: (state) => {
                return "text-lg font-bold";
              },
              indicatorsContainer: (state) => {
                return "text-lg font-bold text-black";
              },
              menu: (state) => {
                return "!rounded-[15px]";
              },
              menuList: (state) => {
                return "text-lg font-bold text-black !p-0 !rounded-[15px]";
              },
              option: (state) => {
                return state.isSelected
                  ? "!bg-primary-red"
                  : state.isFocused
                  ? "!bg-primary-red !bg-opacity-20"
                  : "";
              },
            }}
            components={{
              IndicatorSeparator: () => null,
            }}
          />
        </nav>
      </div>
      <Container>{get(data[activeTab], "content")}</Container>
    </Fragment>
  );
};

export default Index;
