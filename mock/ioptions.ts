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
    id: 2,
    title: "Charter flights",
    icon: astanaAirwayOption,
    code:'CHARTER_FLIGHTS'
  }
];
