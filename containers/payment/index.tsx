import React from "react";
import { Container } from "../../UI";
import { Card } from "../../components";
import { get, map } from "lodash";
import {
  CabinIcon,
  MealIcon,
  WieghtIcon,
  PaymeLogo,
  VisaLogo,
  MasterCardLogo,
  MirLogo,
  ClickLogo,
} from "../../assets/images/payment";
import Image, { StaticImageData } from "next/image";

const Index = () => {
  const buyList: {
    id: number;
    icon: StaticImageData;
    title: string;
    content: { id: number; title: string; description: string }[];
    totalSum: string;
    description: string;
  }[] = [
    {
      id: 1,
      icon: CabinIcon,
      title: "Samolyot o’rindig’i",
      content: [{ id: 1.1, title: "14A", description: "Sizning joyingiz" }],
      totalSum: "79 000",
      description: "O’rindiq narxi",
    },
    {
      id: 2,
      icon: MealIcon,
      title: "Taomnoma",
      content: [
        {
          id: 2.1,
          title: "Sendvich",
          description: "Osiyo ziravorlari qo‘shilgan go‘sht va baliqsiz taom.",
        },
        {
          id: 2.2,
          title: "Salatlar",
          description:
            "Sut mahsulotlaridan cheklangan miqdorda foydalanish bilan",
        },
      ],
      totalSum: "100 000",
      description: "Ovqatlar narxi",
    },
    {
      id: 3,
      icon: WieghtIcon,
      title: "Qo’shimcha yuk",
      content: [
        {
          id: 3.1,
          title: "10 KG",
          description: "Sizning qo’shimcha yukingiz",
        },
      ],
      totalSum: "560 000",
      description: "Qo’shimcha yuk uchun narx",
    },
  ];

  const paymentMethod = [
    {
      id: 1,
      content: (
        <div
          className={
            "col-span-6 md:col-span-3 border rounded-medium p-[18px] px-5"
          }
        >
          <div className={"flex items-start justify-between mb-7"}>
            <h5
              className={
                "font-inter font-medium text-[14px] leading-[18px]  max-w-[90px]"
              }
            >
              Payme orqali to’lang
            </h5>
            <input type={"radio"} />
          </div>
          <Image src={PaymeLogo} alt={"Visa Logo"} />
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div
          className={
            "col-span-6 md:col-span-3 border rounded-medium p-[18px] px-5"
          }
        >
          <div className={"flex items-start justify-between mb-7"}>
            <h5
              className={
                "font-inter font-medium text-[14px] leading-[18px]  max-w-[80px]"
              }
            >
              Click orqali to’lang
            </h5>
            <input type={"radio"} />
          </div>
          <Image src={ClickLogo} alt={"Visa Logo"} />
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div
          className={
            "col-span-12 md:col-span-4 border rounded-medium p-[18px] px-5"
          }
        >
          <div className={"flex items-start justify-between"}>
            <h5
              className={
                "font-inter font-medium text-[14px] leading-[18px] mb-7 max-w-[60px]"
              }
            >
              Chet-el kartalari
            </h5>
            <input type={"radio"} />
          </div>
          <div className={"flex items-center gap-4"}>
            <Image src={VisaLogo} alt={"Visa Logo"} />
            <Image src={MasterCardLogo} alt={"Mir Logo"} />
            <Image src={MirLogo} alt={"Visa Logo"} />
          </div>
        </div>
      ),
    },
  ];

  return (
    <Container className={"py-[60px] font-graphik"}>
      <h1 className={"text-[35px] leading-none font-semibold mb-[25px]"}>
        To'lash uchun
      </h1>
      <div className={"grid grid-cols-12 gap-6"}>
        <div className={"col-span-12 md:col-span-5"}>
          {map(buyList, (item) => (
            <Card
              className={
                "!rounded-medium bg-white px-4 md:px-[30px] py-7 mb-2.5"
              }
            >
              <div
                className={
                  "flex justify-between items-center gap-4 pb-7 border-b"
                }
              >
                <div className={"flex items-center gap-5"}>
                  <Image src={get(item, "icon", "")} alt={"Icon Image"} />
                  <h4
                    className={
                      "text-[18px] leading-none  text-[18px] leading-none font-semibold"
                    }
                  >
                    {get(item, "title", "")}
                  </h4>
                </div>
                <div className={"flex items-center gap-4"}>
                  <button
                    className={
                      "py-2 px-4 border-2 border-black rounded-large font-inter text-[13px] leading-[16px] font-medium hidden md:block"
                    }
                  >
                    O’zgartirish
                  </button>
                  <button>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_577_7854)">
                        <path
                          d="M15.728 9.68608L14.314 8.27208L5 17.5861V19.0001H6.414L15.728 9.68608ZM17.142 8.27208L18.556 6.85808L17.142 5.44408L15.728 6.85808L17.142 8.27208ZM7.242 21.0001H3V16.7571L16.435 3.32208C16.6225 3.13461 16.8768 3.0293 17.142 3.0293C17.4072 3.0293 17.6615 3.13461 17.849 3.32208L20.678 6.15108C20.8655 6.33861 20.9708 6.59292 20.9708 6.85808C20.9708 7.12325 20.8655 7.37756 20.678 7.56508L7.242 21.0001Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_577_7854">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <svg
                    className={"cursor-pointer"}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_577_5813)">
                      <path
                        d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_577_5813">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <ul className={""}>
                {map(get(item, "content", []), (item) => (
                  <li
                    className={"border-b border-black border-opacity-10 py-4"}
                  >
                    <h3
                      className={"text-[20px] leading-[18px] font-normal mb-2"}
                    >
                      {get(item, "title")}
                    </h3>
                    <p className={"text-[14px] leading-[18px] leading-[18px]"}>
                      {get(item, "description")}
                    </p>
                  </li>
                ))}
                <li className={"pt-4"}>
                  <h3 className={"text-[20px] leading-[18px] font-normal mb-2"}>
                    {get(item, "totalSum", "")} UZS
                  </h3>
                  <p className={"text-[14px] leading-[18px] leading-[18px]"}>
                    {get(item, "description", "")}
                  </p>
                </li>
              </ul>
            </Card>
          ))}
        </div>
        <div className={"col-span-12 md:col-span-7"}>
          <Card className={"bg-white p-4 pt-5 rounded-medium"}>
            <h4 className={"text-sm leading-[18px] font-normal"}>
              Jami to’lanadigan summa
            </h4>
            <h2 className={"text-[32px] font-medium mb-[30px]"}>639 000 UZS</h2>
            <div className={"grid grid-cols-12 gap-1"}>
              {map(paymentMethod, (value) => (
                <>{get(value, "content")}</>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Index;
