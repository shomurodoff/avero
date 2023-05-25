import React, { Fragment } from "react";
import clsx from "clsx";

interface Props {
  title?: React.ReactElement | string | null;
  subTitle: string;
  className?: string;
  titleClass?: string;
  subTitleClass?: string;
}

const Index: React.FC<Props> = ({
  title,
  subTitle,
  className,
  titleClass,
  subTitleClass,
}) => {
  return (
    <div className={clsx(className, "max-w-md mb-10")}>
      <h3
        className={clsx(
          titleClass,
          "font-bold font-montserrat text-[45px]  leading-[45px] mb-2.5"
        )}
      >
        {title}
      </h3>
      <p className={clsx(subTitleClass, "text-[#7C7C7C] font-inter text-base")}>
        {subTitle}
      </p>
    </div>
  );
};

export default Index;
