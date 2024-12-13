import { useTranslation } from "react-i18next"
import { clsx } from "clsx"
import uzFlag from "../static/uz-flag.png"
import ruFlag from "../static/ru-flag.png"

const languages = [
    { id: 1, name: "uzbek", language: "uz", img: uzFlag },
    { id: 2, name: "russian", language: "ru", img: ruFlag },
]

export default function LanguageChanger() {
    const { t, i18n } = useTranslation()
    const currentLocale = i18n.language


    async function handleChange(newLocale: string) {
        await i18n.changeLanguage(newLocale)
        localStorage.setItem("language", newLocale)

        const elem = document.activeElement
        if (elem) (elem as HTMLElement).blur()
    }

    return (
        <div className="dropdown dropdown-bottom dropdown-end ">

            <div tabIndex={0} role="button" className="btn btn-sm px-1 rounded-full btn-ghost">
                {i18n.language == "uz" ? <img src={uzFlag} alt="" className="w-6 h-5 rounded-full" /> : <img src={ruFlag} alt="" className="w-6 h-5 rounded-full" />}
            </div>


            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-white rounded-lg w-24 shadow-xl">
                {languages.map((lang, index) => (
                    <li key={index} className="mb-0.5">
                        <button
                            tabIndex={0}
                            role="button"
                            onClick={() => handleChange(lang.language)}
                            className={clsx("flex items-center", lang.language === currentLocale && "bg-base-100")}
                        >
                            <img className="w-6 h-5" src={lang.img} alt="Uzbek flag" />
                            <span>{t(lang.name)}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    )
}
