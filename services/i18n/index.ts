import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {config} from "../../config";
// @ts-ignore
import storage, {loadState} from "../storage";


// @ts-ignore
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: loadState('i18nextLng'),
        fallbackLng: loadState('i18nextLng'),
        backend: {
            loadPath: `${config.API_URL}api/v1/localization/get-by-lang/{{lng}}`,
            addPath: `${config.API_URL}api/v1/localization/add`,
        },
        debug: false,
        keySeparator: false,
        saveMissing: true,
        react: {
            useSuspense: false,
            wait: true
        },
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        }
    })

export default i18n
