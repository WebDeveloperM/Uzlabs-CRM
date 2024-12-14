import { useTranslation } from "react-i18next"
import uzFlag from "../static/uz-flag.png"
import ruFlag from "../static/ru-flag.png"

export default function LanguageChange() {
    const { i18n } = useTranslation()

    async function handleChange(newLocale: string) {
        await i18n.changeLanguage(newLocale)
        localStorage.setItem("language", newLocale)

        const elem = document.activeElement
        if (elem) (elem as HTMLElement).blur()
    }


    return (
        <div className="dropdown">
            <a className="dropdown-toggle header-icon" href="#!" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                {i18n.language == "uz" ? <img src={uzFlag} className="header-country-flag" alt="Bootstrap Dashboards" /> : <img src={ruFlag} className="header-country-flag" alt="Bootstrap Dashboards" />}
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-mini">
                <div className="country-container">
                    <a  className="py-2 cursor-pointer" onClick={() => handleChange("uz")}>
                        <img src={uzFlag} alt="Admin Panel" />
                    </a>
                    <a  className="py-2 cursor-pointer" onClick={() => handleChange("ru")}>
                        <img src={ruFlag} alt="Admin Panels" />
                    </a>
                </div>
            </div>
        </div>
    )
}


