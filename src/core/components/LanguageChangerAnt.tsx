import { useTranslation } from "react-i18next"
import uzFlag from "../static/uz-flag.png"
import ruFlag from "../static/ru-flag.png"
import { Space, Dropdown, Button } from "antd"
import type { MenuProps } from 'antd';

export default function LanguageChangerAnt() {
    const { t, i18n } = useTranslation()

    async function handleChange(newLocale: string) {
        await i18n.changeLanguage(newLocale)
        localStorage.setItem("language", newLocale)

        const elem = document.activeElement
        if (elem) (elem as HTMLElement).blur()
    }


    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <button
                    tabIndex={0}
                    role="button"
                    className="flex items-center justify-center gap-1"
                    onClick={() => handleChange("uz")}
                >
                    <img className="w-6 h-5" src={uzFlag} alt="Uzbek flag" />
                    <span>{t("uzbek")}</span>
                </button>
            ),
        },
        {
            key: '2',
            label: (
                <button
                    tabIndex={0}
                    role="button"
                    onClick={() => handleChange("ru")}
                    className="flex items-center justify-center gap-1"
                >
                    <img className="w-6 h-5" src={ruFlag} alt="Russian flag" />
                    <span>{t("russian")}</span>
                </button>
            ),
        },

    ];

    return (
        <Space direction="vertical" className="">
            <Space wrap>
                <Dropdown menu={{ items }} placement="bottomRight" arrow>
                    <Button className="btn-ghost border-none btn-circle m-0">
                        {i18n.language == "uz" ? <img src={uzFlag} alt="" className="w-6 h-6 rounded-full" /> : <img src={ruFlag} alt="" className="w-6 h-6 rounded-full" />}
                    </Button>
                </Dropdown>
            </Space>
        </Space>
    )
}
