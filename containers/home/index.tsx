import Head from "next/head";
import React, { Fragment } from "react";
import {
  HeroSection,
  ServicesSection,
  NewsSection,
} from "../../components/blocks/main";

const Index: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Avero || Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <ServicesSection />
      <NewsSection />
    </Fragment>
  );
};

export default Index;
