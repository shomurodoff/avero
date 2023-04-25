import React, { useEffect, useState } from "react";
import { filter, get, isEqual, map, toLower } from "lodash";
import clsx from "clsx";
import { languages } from "../../../constants";
import { useStore } from "../../../../store";
import storage from "../../../../services/storage";
import Image from "next/image";
import { FlagUzb } from "../../../images";

const Language: React.FC<any> = () => {
  const [isOpenLanguage, setOpenLanguage] = useState(false);
  const language = useStore((state) => get(state, "lang"));
  const setLanguage = useStore((state) => get(state, "setLang", () => {}));

  const [activeLanguage, setActiveLanguage] = useState({
    id: 123213,
    title: "O'z",
    code: "uz",
    icon: FlagUzb,
  });

  const changeLang = (code: string) => {
    setLanguage();
    storage.set(language, code);
  };

  useEffect(() => {
    changeLang(toLower(get(activeLanguage, "title")));
  }, [activeLanguage]);

  return (
    <div
      className={
        "flex items-center gap-1.5 px-2 md:px-3  border rounded-3xl cursor-pointer order-3 py-2 relative border-gray-200  border-opacity-40 "
      }
      onClick={() => setOpenLanguage((prevState) => !prevState)}
    >
      <Image
        src={get(activeLanguage, "icon")}
        alt={"Image Flag"}
        className={"rounded-md  w-4 h-4  md:w-6 md:h-6 block"}
      />
      <span className={clsx("hidden md:block md:w-6 text-white")}>
        {get(activeLanguage, "title", "")}
      </span>
      <div
        className={clsx(
          "absolute top-full translate-y-1 bg-white w-full left-0 z-40  shadow-2xl rounded-2xl transition-all duration-500",
          isOpenLanguage ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <ul className={"flex flex-col items-center"}>
          {map(
            filter(
              languages,
              (lang) =>
                !isEqual(get(lang, "title"), get(activeLanguage, "title"))
            ),
            (value) => (
              <li
                className={
                  "flex gap-2 w-full hover:bg-green-100 justify-center p-2 md:py-1 first:rounded-t-2xl last:rounded-b-2xl"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLanguage(value);
                }}
              >
                <Image
                  src={get(value, "icon")}
                  alt={"Image Flag"}
                  className={"rounded-md w-4 h-4  md:w-6 md:h-6"}
                />
                <span className={"hidden md:block"}>{get(value, "title")}</span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Language;
