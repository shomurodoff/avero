import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import clsx from "clsx";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {usePostQuery} from "../../hooks";
import {KEYS} from "../../constants/keys";
import {URLS} from "../../constants/urls";
import ContentLoader from "../loader/content-loader";
import toast from "react-hot-toast";
import {useSettingsStore} from "../../store";
import {get} from "lodash";

const LoginForm = ({
                       setOpenLoginModal = () => {
                       }
                   }) => {
    const {t} = useTranslation()
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const {mutate: signInRequest, isLoading} = usePostQuery({listKeyId: KEYS.signIn})
    const setToken = useSettingsStore((state) => get(state, "setToken", () => {
    }));
    const setUser = useSettingsStore((state) => get(state, "setUser", () => {
    }));
    const signIn = () => {
        if (phone && password) {
            signInRequest({
                    url: URLS.signIn,
                    attributes: {
                        login: `+${phone}`,
                        password
                    }
                }, {
                    onSuccess: ({data: response}) => {
                        setToken(get(response, 'data.token.accessToken'))
                        setUser(get(response, 'data.userProfile'))
                        setOpenLoginModal(false);
                        reset();
                    }
                }
            )
        } else {
            toast.error(t("Please fill all fields"), {position: "top-right"})
        }
    }

    const reset = () => {
        setPassword('');
        setPhone('');
    }
    return (
        <div className={'relative'}>
            {isLoading && <ContentLoader/>}
            <h2 className={'mb-4 text-2xl font-semibold text-secondary-300 text-center'}>{t("Tizimga kirish")}</h2>
            <PhoneInput
                country={'uz'}
                value={phone}
                onChange={val => setPhone(val)}
            />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className={clsx(
                    "bg-white focus:outline-none border   font-inter   text-base  w-full  rounded border border-[#CACACA] h-10 mt-3 p-2",
                )}
                placeholder={t("Parol") || ''}
            />
            <button onClick={signIn} className="bg-primary-blue p-2 h-10 mt-6 w-full  rounded text-white">
                {t("Kirish")}
            </button>
        </div>
    );
};

export default LoginForm;