import { StaticImageData } from "next/image";
import {
  uzAirwayOption,
  asiaAirwayOption,
  iranAirwayOption,
  astanaAirwayOption,
  indiaAirwayOption,
} from "../assets/images/options";

export const options: { id: number; title: string; icon: StaticImageData,code:string }[] = [
  {
    id: 1,
    title: "Uzairways",
    icon: uzAirwayOption,
    code:'UZ_AIRWAYS'
  },
  {
    id: 1,
    title: "Chapter flights",
    icon: uzAirwayOption,
    code:'CHARTER_FLIGHTS'
  },
  // {
  //   id: 2,
  //   title: "Qatarairways",
  //   icon: asiaAirwayOption,
  // },
  // {
  //   id: 3,
  //   title: "Iran Air",
  //   icon: iranAirwayOption,
  // },
  // {
  //   id: 4,
  //   title: "Air Astana",
  //   icon: astanaAirwayOption,
  // },
  // {
  //   id: 5,
  //   title: "Air India",
  //   icon: indiaAirwayOption,
  // },
];
