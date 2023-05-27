import {MainPageLogo} from "../../../images";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {Container} from "../../../../UI";
import {useRouter} from "next/router";
import Language from "./language";
import {Home, LogOut, Mail, Phone, User} from "react-feather";
import {useSettingsStore} from "../../../../store";
import {get} from "lodash";
import {useTranslation} from "react-i18next";

interface Props {
    main?: boolean;
    payment?: boolean;
}

const Index: React.FC<Props> = ({main, payment}) => {
    const router = useRouter();
    const {t} = useTranslation()
    const user: any = useSettingsStore((state: any) => get(state, "user"));
    const setToken = useSettingsStore((state) => get(state, "setToken", () => {
    }));
    const setUser = useSettingsStore((state) => get(state, "setUser", () => {
    }));
    const logout = () => {
        setToken(null);
        setUser(null)
    }
    return (
        <div className={clsx("bg-primary-blue")}>
            <Container>
                <div className="w-full relative py-[35px]">
                    <nav className={clsx("flex justify-start md:justify-center")}>
                        <div className="z-10">
                            <Link href={"/"}>
                                <Image
                                    src={MainPageLogo}
                                    alt="Logo Image"
                                    className="z-[9999]"
                                    quality={100}
                                />
                            </Link>
                        </div>
                    </nav>
                    <div className="h-full items-center flex absolute right-0 bottom-0">
                        <div className={"flex items-center gap-4"}>
                            <a
                                href={`tel:+998781000000`}
                                className={clsx(
                                    "md:text-xl font-montserrat  tracking-tighter text-white"
                                )}
                            >
                                +998 (78)-100-00-00
                            </a>
                            <Language main={main}/>
                            {user && <div className={'relative group'}>
                                <User className={'cursor-pointer group'} size={32} color={'#fff'}/>
                                <div
                                    className={'absolute hidden top-full left-1/2 -translate-x-1/2  group-hover:block z-50 bg-white p-3 rounded w-[225px] '}>
                                    <ul className={'text-[#7C7C7C]'}>
                                        <li className={'flex items-center mb-2'}><Home className={'mr-1.5'} size={18}/>
                                            <span className={'text-sm font-medium'}>{get(user, 'agentName')}</span></li>
                                        <li className={'flex items-center mb-1.5'}><User className={'mr-1.5'}
                                                                                         size={18}/> <span
                                            className={'text-sm font-medium'}>{get(user, 'fullName')}</span></li>
                                        <li className={'flex items-center mb-1.5'}><Mail className={'mr-1.5'}
                                                                                         size={18}/> <span
                                            className={'text-sm font-medium'}>{get(user, 'email')}</span></li>
                                        <li className={'flex items-center mb-1.5'}><Phone className={'mr-1.5'}
                                                                                          size={18}/> <span
                                            className={'text-sm font-medium'}>{get(user, 'phoneNumber')}</span></li>
                                        <li onClick={logout}
                                            className={'flex items-center mt-3 cursor-pointer text-[#FF354D]'}><LogOut
                                            className={'mr-1.5'} size={24}/> <span
                                            className={' font-medium'}>{t("Logout")}</span></li>
                                    </ul>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Index;
