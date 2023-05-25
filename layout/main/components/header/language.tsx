import React, {useState} from "react";
import {filter, find, get, isEqual, map} from "lodash";
import clsx from "clsx";
import {languages} from "../../../constants";
import {useSettingsStore} from "../../../../store";
import Image from "next/image";
import {useTranslation} from "react-i18next";
import {config} from "../../../../config";

const Language = ({main}: any) => {
    const [isOpenLanguage, setOpenLanguage] = useState(false);
    const language:any =useSettingsStore((state:any) => get(state, "lang", config.DEFAULT_APP_LANG));
    const setLanguage:any = useSettingsStore((state) => get(state, "setLang", () => {}));
    const { i18n } = useTranslation()

    const changeLang = (code: string) => {
        // @ts-ignore
        setLanguage(code);
        i18n.changeLanguage(code)
    };
    const getActiveLangData = () =>{
        return find(languages,(_lang)=>get(_lang,'code') == language)
    }

    return (
        <div
            className={clsx(
                "flex items-center gap-1.5 px-2 md:px-3  border rounded-3xl cursor-pointer order-3 py-2 relative border-gray-200  border-opacity-40 "
            )}
            onClick={() => setOpenLanguage((prevState) => !prevState)}
        >
            <Image
                src={get(getActiveLangData(), "icon")}
                alt={"Image Flag"}
                className={"rounded-md w-6 h-6 block"}
            />
            <span className={clsx("hidden md:block md:w-6 text-white")}>
        {get(getActiveLangData(), "title", "")}
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
                                !isEqual(get(lang, "code"), get(getActiveLangData(), "code"))
                        ),
                        (value) => (
                            <li
                                className={
                                    "flex gap-2 w-full hover:bg-green-100 justify-center p-2 md:py-1 first:rounded-t-2xl last:rounded-b-2xl"
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    changeLang(get(value,'code'));
                                }}
                            >
                                <Image
                                    src={get(value, "icon")}
                                    alt={"Image Flag"}
                                    className={"rounded-md w-6 h-6"}
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
