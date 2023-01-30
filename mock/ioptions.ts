import { StaticImageData } from "next/image";
import {
  uzAirwayOption,
  asiaAirwayOption,
  iranAirwayOption,
  astanaAirwayOption,
  indiaAirwayOption,
} from "../assets/images/options";

export const options: { id: number; title: string; icon: StaticImageData }[] = [
  {
    id: 1,
    title: "Uzairways",
    icon: uzAirwayOption,
  },
  {
    id: 2,
    title: "AirAsia",
    icon: asiaAirwayOption,
  },
  {
    id: 3,
    title: "Iran Air",
    icon: iranAirwayOption,
  },
  {
    id: 4,
    title: "Air Astana",
    icon: astanaAirwayOption,
  },
  {
    id: 5,
    title: "Air India",
    icon: indiaAirwayOption,
  },
];
