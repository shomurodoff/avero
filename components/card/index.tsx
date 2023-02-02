import React, { ReactElement, ReactNode } from "react";
import clsx from "clsx";

interface CartProps {
  className?: string;
  children: ReactNode | ReactElement;
  rest?: any;
}

const Index = ({ children, className, ...rest }: CartProps) => {
  return (
    <div className={clsx(className, "rounded-[25px]")} {...rest}>
      {children}
    </div>
  );
};

export default Index;
