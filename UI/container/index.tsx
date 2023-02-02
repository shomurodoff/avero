import { clsx } from "clsx";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Index: React.FC<Props> = ({ children, className }) => {
  return <div className={clsx("container mx-auto", className)}>{children}</div>;
};

export default Index;
