import React, { Fragment } from "react";
import {
  bannerIcon,
  weightBanner,
} from "../../../assets/images/weight-services";
import { Banner } from "../../../components";

const Index = () => {
  return (
    <Fragment>
      <Banner
        title="Qo’shimcha yuklaringiz xavfsizligi"
        subTitle="Engage active clients at the right time and save time chasing unqualified leads.  clients at the right time and save time chasingunqualified leads."
        image={weightBanner}
        icon={bannerIcon}
      />
    </Fragment>
  );
};

export default Index;
