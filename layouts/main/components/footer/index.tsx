import React, { useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import clsx from "clsx";
import { PrimaryLogo } from "../../../../assets/images/logos";
import { get, map } from "lodash";
import { footer, footerLinks } from "../../../../mock/footer";

const Index: React.FC = () => {
  const currentYear = dayjs().year();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <footer className="grid grid-cols-12 gap-4 lg:gap-6 pb-8 px-[15px] md:px-8 xl:px-[60px]">
      <div className="col-span-12 lg:col-span-5 xl:col-span-4 bg-primary-gray xl:px-14 pt-14 pb-7 text-white rounded-2xl flex flex-col items-center">
        <div className="w-1/2 xl:w-full">
          <Image src={PrimaryLogo} alt={"logo"} />
        </div>
        <p className="mb-3 mt-6 md:mt-14 text-center">
          Mijozlarga xizmat ko‘rsatish bo‘limi
        </p>
        <a
          className="px-6 py-3 bg-[#31393E] rounded-[10px] font-semibold text-base md:text-lg lg:text-2xl mb-4 md:mb-10 cursor-pointer"
          href="tel:+998997275098"
        >
          (+998 78) 100-00-00
        </a>
        <ul className="inline-flex gap-7 mb-5 md:mb-14">
          {map(footerLinks, (link) => (
            <li key={get(link, "id")} className="cursor-pointer">
              <Image src={get(link, "image")} alt="social icon" />
            </li>
          ))}
        </ul>
        <a href="/" className="text-[#979797] text-sm">
          &copy; aviahelp.uz, {currentYear}
        </a>
      </div>
      <div className="col-span-12  lg:col-span-7 xl:col-span-8 bg-[#F9F9F9] rounded-2xl px-5 md:px-14 pt-8 md:pt-14 pb-7 text-[#202020] flex flex-col h-full justify-between">
        <div className="flex flex-col md:flex-row md:justify-between flex-wrap gap-4">
          {map(footer, (item, index) => (
            <div key={get(item, "title")} className="w-full lg:w-auto">
              <h3
                className={clsx(
                  "text-2xl font-bold lg:mb-7 flex items-center justify-between",
                  open === index ? "mb-3" : "mb-0"
                )}
                onClick={() => {
                  if (open !== index) {
                    setOpen(index);
                  } else {
                    setOpen(null);
                  }
                }}
              >
                {get(item, "title")}
                <span className="lg:hidden">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_577_9700)">
                      <path
                        d="M12.0002 13.1727L16.9502 8.22266L18.3642 9.63666L12.0002 16.0007L5.63623 9.63666L7.05023 8.22266L12.0002 13.1727Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_577_9700">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </h3>
              <ul
                className={clsx(
                  "flex flex-col",
                  index !== open && "hidden lg:block"
                )}
              >
                {map(get(item, "children"), (child) => (
                  <li
                    className="mb-2 max-w-[250px] text-[#202020] text-lg cursor-pointer"
                    key={get(child, "title")}
                  >
                    {get(child, "title")}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <ul className="flex justify-between  text-[#979797] text-sm leading-4 font-inter font-normal mt-5 lg:mt-0">
          <li>
            <a href="#">Maxfiylik siyosati</a>
          </li>
          <li>
            <a href="#">Shartnoma taklifi </a>
          </li>
          <li>
            <a href="#">To'lov</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Index;
