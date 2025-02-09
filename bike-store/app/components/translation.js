import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/translation.css";

export default function TranslationMenu() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsOpen(false);
    };

    const languageNames = {
        en: "English",
        pl: "Polski",
        de: "Deutsch",
        fr: "Français",
        es: "Español",
        ru: "Русский",
        jp: "日本語",
        ko: "한국어",
        zh: "中文",
        ar: "عربي",
    };

    return (
        <div className="translation-menu">
            <button onClick={() => setIsOpen(!isOpen)} className="translation-button">
                <img src="/images/languageGlobe.png" alt="Earth icon" className="earth-icon" />
            </button>
            {isOpen && (
                <div className="translation-dropdown">
                    {Object.keys(languageNames).map((lang) => (
                        <button
                            key={lang}
                            onClick={() => changeLanguage(lang)}
                            className="translation-option"
                        >
                            {languageNames[lang]}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
