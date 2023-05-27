import React, {Fragment, useEffect, useState} from "react";
import {Modal, PassengerFilter, SearchForm, Tab} from "../../components";
import SeatServices from "./seat";
import FoodServices from "./food";
import WeightServices from "./wieght";
import {
    tabCabin,
    tabCase,
    tabMeal,
    tabPlane,
} from "../../assets/images/service";
import Loader from "../../components/loader/loader";
import {useRouter} from "next/router";
import {get, head} from "lodash";
import clsx from "clsx";
import {useGetQuery} from "../../hooks";
import {KEYS} from "../../constants/keys";
import {URLS} from "../../constants/urls";
import {AIRLINE_TYPES} from "../../constants";
import {useTranslation} from "react-i18next";


const Index: React.FC = () => {
    const {t} = useTranslation()
    const [loading, setLoading] = useState<boolean>(true);
    const [opacity, setOpacity] = useState<boolean>(true);
    const [openForm, setOpenForm] = useState<boolean>(false);
    const [airplane, setAirplane] = useState<any>(null);
    const router = useRouter();
    const {code, family, ticketNumber, passportNumber} = router?.query;

    const {data} = useGetQuery({
        key: KEYS.getData,
        url: URLS.getData,
        method: 'post',
        params: code == AIRLINE_TYPES.CHARTER_FLIGHTS ? {
            airlinesType: code,
            ticketNumber,
            passportNumber
        } : {
            airlinesType: code,
            family,
            ticketNumber
        },
        enabled: !!(code && (family || passportNumber) && ticketNumber)
    })

    const tabs = [
        {
            id: 1,
            title: t("O’rindiq tanlash"),
            icon: tabCabin,
            content: <SeatServices serviceData={airplane}/>,
        },
        {
            id: 2,
            title: t("Ovqat buyurtma"),
            icon: tabMeal,
            content: <FoodServices serviceData={airplane}/>,
        },
        {
            id: 3,
            title: t("Yuklarni joylashtirish"),
            icon: tabCase,
            content: <WeightServices/>,
        },
        {
            id: 4,
            title: t("Aeroport xizmatlari"),
            icon: tabPlane,
            content: (
                <div className={"h-[80vh] flex justify-center items-center"}>
                    <h1 className="text-3xl">{t("Coming Soon")}</h1>
                </div>
            ),
        },
    ];

    setTimeout(() => {
        setOpacity(false);
    }, 8000);

    setTimeout(() => {
        setLoading(false);
    }, 9000);

    useEffect(() => {
        if (get(data, 'data.data', [])?.length == 1) {
            setAirplane(head(get(data, 'data.data', [])))
        }
    }, [get(data, 'data.data', [])])

    return (
        <Fragment>
            <div
                className={clsx(
                    "transition-opacity duration-1000 opacity-100",
                    !loading && "hidden",
                    !opacity && "opacity-0"
                )}
            >
                <Loader airway={get(router, "query.airways")}/>
            </div>
            <PassengerFilter selectedId={get(airplane, 'rtiId')} setItem={setAirplane}
                             items={get(data, 'data.data', [])} setOpenForm={setOpenForm}/>
            <Tab data={tabs} activeContent={Number(get(router, "query.services"))}/>
            <Modal open={openForm} setOpen={setOpenForm}>
                <div
                    className="bg-[#FFFFFF] md:bg-opacity-90 backdrop-blur-[20px] shadow-[0px_-20px_30px_rgba(0, 0, 0, 0.19)] rounded-t-[20px] md:rounded-[20px] pb-7 pt-5  p-[15px] md:p-[25px] md:pb-28">
                    <div className="hidden md:flex justify-end mb-10">
                        <button
                            className="p-[17px] bg-white rounded-default"
                            onClick={() => setOpenForm(false)}
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
                    <div>
                        <h2 className="text-center text-xl lg:text-[40px]  leading-[30px] lg:leading-[60px] font-semibold font-montserrat mb-[30px] lg:mb-11 max-w-5xl mx-auto">
                            {t(" Joy band qiling, mos ovqat tanlang va boshqalar xizmatlardan\n" +
                                "                            foydalaning")}
                        </h2>
                    </div>
                    <SearchForm onClose={() => setOpenForm(false)} airplane={airplane} modal/>
                </div>
            </Modal>

        </Fragment>
    );
};

export default Index;
