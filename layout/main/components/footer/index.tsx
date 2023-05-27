import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import clsx from "clsx";
import {MainPageLogo} from "../../../images";
import {get, map} from "lodash";
import {footer, footerLinks} from "../../../../mock/footer";
import {Container} from "../../../../UI";
import {useTranslation} from "react-i18next";
import {Modal} from "../../../../components";
import LoginForm from "../../../../components/login-form"

const Index: React.FC = () => {
    const {t} = useTranslation()
    const currentYear = dayjs().year();
    const [open, setOpen] = useState<number | null>(null);
    const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);

    return (
        <Container className="pb-8">
            <footer className="grid grid-cols-12 gap-4 lg:gap-6 ">
                <div
                    className="col-span-12 lg:col-span-5 xl:col-span-4 bg-primary-gray xl:px-14 pt-14 pb-7 text-white rounded-2xl flex flex-col items-center">
                    <Link href={"/"} className="w-1/2 xl:w-2/3">
                        <Image src={MainPageLogo} alt={"logo"}/>
                    </Link>
                    <p className="mb-3 mt-6 md:mt-14 text-center">
                        {t("Mijozlarga xizmat ko‘rsatish bo‘limi")}
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
                                <Image src={get(link, "image")} alt="social icon"/>
                            </li>
                        ))}
                    </ul>
                    <Link href="/" className="text-[#979797] text-sm">
                        &copy; aviahelp.uz, {currentYear}
                    </Link>
                </div>
                <div
                    className="col-span-12  lg:col-span-7 xl:col-span-8 bg-[#F9F9F9] rounded-2xl px-5 md:px-14 pt-8 md:pt-14 pb-7 text-[#202020] flex flex-col h-full justify-between">
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
                                    {t(get(item, "title"))}
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
                          <rect width="24" height="24" fill="white"/>
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
                                            onClick={() => {
                                                if (get(child, "id") == 33) {
                                                    setOpenLoginModal(true);
                                                }
                                            }}
                                            className="mb-2 max-w-[250px] text-[#202020] text-lg cursor-pointer"
                                            key={get(child, "title")}
                                        >
                                            {t(get(child, "title"))}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <ul className="flex justify-between md:justify-start md:gap-[30px]  text-[#979797] text-sm leading-4 font-inter font-normal mt-5 lg:mt-0">
                        <li>
                            <a href="#">{t("Maxfiylik siyosati")}</a>
                        </li>
                        <li>
                            <a href="#">{t("Shartnoma taklifi")}</a>
                        </li>
                        <li>
                            <a href="#">{t("To'lov")}</a>
                        </li>
                    </ul>
                </div>
            </footer>
            <Modal classNames={'!max-w-[475px]'} open={openLoginModal} setOpen={setOpenLoginModal}>
                <div
                    className="bg-[#FFFFFF] md:bg-opacity-90 backdrop-blur-[20px] shadow-[0px_-20px_30px_rgba(0, 0, 0, 0.19)] rounded-t-[20px] md:rounded-[20px] pb-7 pt-5  p-[15px] md:p-[25px] md:pb-28">
                    <div className="hidden md:flex justify-end mb-10">
                        <button
                            className="p-[17px] bg-white rounded-default"
                            onClick={() => setOpenLoginModal(false)}
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.99992 6.23242L14.1874 0.0449219L15.9549 1.81242L9.76742 7.99992L15.9549 14.1874L14.1874 15.9549L7.99992 9.76742L1.81242 15.9549L0.0449219 14.1874L6.23242 7.99992L0.0449219 1.81242L1.81242 0.0449219L7.99992 6.23242Z"
                                    fill="black"
                                />
                            </svg>
                        </button>
                    </div>
                    <LoginForm setOpenLoginModal={setOpenLoginModal} />
                </div>
            </Modal>
        </Container>

    );
};

export default Index;
