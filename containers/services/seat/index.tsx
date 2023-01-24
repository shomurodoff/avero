import React, { Fragment } from "react";
import {
  seatBannerIcon,
  seatBannerImage,
} from "../../../assets/images/services/seat-services";
import { Banner } from "../../../components";

const Index = () => {
  return (
    <Fragment>
      <Banner
        title="O’zingiz uchun qulay o‘rindiq tanlang"
        subTitle="Engage active clients at the right time and save time chasing unqualified leads. clients at the right time and save time"
        image={seatBannerImage}
        icon={seatBannerIcon}
      />
    </Fragment>
  );
};

export default Index;
