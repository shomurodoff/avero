import React, { Fragment, ReactNode, useState } from "react";
import { get, isEqual, map } from "lodash";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

interface Props {
  data: {
    id: number;
    title: string;
    icon: StaticImageData;
    content: ReactNode;
  }[];
}
const Index: React.FC<Props> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <Fragment>
      <nav className="bg-[#F1F3F6] px-[60px] relative before:absolute before:h-full before:w-[60px] before:content-[attr(before)] before:bg-[#F1F3F6]  before:bottom-0 before:left-0 before:z-[90]  before:rounded-br-2xl after:absolute after:h-full after:w-[60px] after:content-[attr(after)] after:bg-[#F1F3F6]  after:bottom-0 after:right-0 after:z-10 after:rounded-bl-2xl">
        <ul className={"flex justify-between"}>
          {map(data, (tab, index) => (
            <li
              key={get(tab, "id")}
              className={clsx(
                isEqual(index, activeTab)
                  ? "bg-white rounded-t-2xl text-black relative after:absolute after:h-1/2 after:w-10 after:content-[attr(after)] after:bg-white after:z-10 after:bottom-0 after:-right-5 before:absolute before:h-1/2 before:w-10 before:content-[attr(before)] before:bg-white before:z-10 before:bottom-0 before:-left-5"
                  : "bg-[#F1F3F6]  rounded-b-2xl z-50",
                activeTab !== index &&
                  activeTab - index !== 1 &&
                  activeTab - index !== -1
                  ? ""
                  : " ",
                "w-full flex justify-center py-6 cursor-pointer items-center gap-2"
              )}
              onClick={() => setActiveTab(index)}
            >
              <div
                className={clsx(
                  isEqual(index, activeTab) ? "bg-primary-red" : "bg-gray-300",
                  "h-8 w-8 flex justify-center items-center rounded-full"
                )}
              >
                <Image
                  src={get(tab, "icon")}
                  alt={""}
                  className={"text-black"}
                />
              </div>
              <p
                className={clsx(
                  isEqual(index, activeTab) ? " " : "text-black opacity-40",
                  "font-semibold text-lg font-inter"
                )}
              >
                {get(tab, "title")}
              </p>
            </li>
          ))}
        </ul>
      </nav>
      {data[activeTab].content}
    </Fragment>
  );
};

export default Index;
