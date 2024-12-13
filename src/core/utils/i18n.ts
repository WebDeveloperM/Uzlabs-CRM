import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import localeUz from "@core/utils/locales/uz.json"
import localeRu from "@core/utils/locales/ru.json"

const resources = {
    uz: { translation: localeUz },
    ru: { translation: localeRu }
}

i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    resources,
    lng: "uz",
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
})

i18n.changeLanguage(localStorage.language || "uz")

export default i18n
