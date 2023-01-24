import { StaticImageData } from "next/image";
import {
  mealImage1,
  mealImage2,
  mealImage3,
  mealImage4,
  mealOption1,
  mealOption2,
  mealOption3,
  mealOption4,
} from "../assets/images/services/food-services";

export const foodsMenu: {
  id: number;
  title: string;
  image: StaticImageData;
  optionQuantity: number;
}[] = [
  {
    id: 1,
    title: "Sendvich va salatlar",
    image: mealImage1,
    optionQuantity: 7,
  },
  {
    id: 2,
    title: "Qo’shimcha gazaklar",
    image: mealImage2,
    optionQuantity: 10,
  },
  {
    id: 3,
    title: "Taomlar",
    image: mealImage3,
    optionQuantity: 8,
  },
  {
    id: 4,
    title: "Ichimliklar",
    image: mealImage4,
    optionQuantity: 12,
  },
];

export const foodOptions: {
  id: number;
  title: string;
  description: string;
  price: number;
  image: StaticImageData;
}[] = [
  {
    id: 1,
    title: "Set of cold meats with additions PLN 29",
    description:
      "Tapas of blue cheese, radamer, grana padano and camembert combined with walnuts, grapes, dried apricots and crackers",
    price: 65_000,
    image: mealOption1,
  },
  {
    id: 2,
    title: "Set of cold meats with additions PLN 29",
    description:
      "Tapas of matured ham, Kraków sausage, kaba nos sausage sticks and roast beef combined with melon, olives stuffed",
    price: 65_000,
    image: mealOption2,
  },
  {
    id: 3,
    title: "Set of cold meats with additions PLN 29",
    description:
      "Tapas of blue cheese, radamer, grana padano and camembert combined with walnuts, grapes, dried apricots and crackers",
    price: 65_000,
    image: mealOption3,
  },
  {
    id: 4,
    title: "Set of cold meats with additions PLN 29",
    description:
      "Tapas of blue cheese, radamer, grana padano and camembert combined with walnuts, grapes, dried apricots and crackers",
    price: 65_000,
    image: mealOption4,
  },
];
