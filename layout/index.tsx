import { isEqual } from "lodash";
import { useRouter } from "next/router";
import React, { ReactNode, ReactElement, Fragment } from "react";
import { getLayoutName } from "./utils";
import MainLayout from "./main";
import ServicesLayout from "./services";
import PaymentLayout from "./payment";
interface Props {
  children?: ReactNode | ReactElement;
}

const Index: React.FC<Props> = ({ children }) => {
  const { pathname } = useRouter();

  if (isEqual(getLayoutName(pathname), "main")) {
    return <MainLayout>{children}</MainLayout>;
  } else if (isEqual(getLayoutName(pathname), "services")) {
    return <ServicesLayout>{children}</ServicesLayout>;
  } else if (isEqual(getLayoutName(pathname), "payment")) {
    return (
      <PaymentLayout>
        <div className={"bg-[#F1F3F6]"}>{children}</div>
      </PaymentLayout>
    );
  } else {
    return <MainLayout>{children}</MainLayout>;
  }
};

export default Index;
