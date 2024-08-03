import React, { createContext, useState, useContext, ReactNode } from "react";
import en from "./en";
import bn from "./bn";
import fr from "./fr";
import de from "./de";
import es from "./es";
import tr from "./tr";
import sv from "./sv";

type Translations = {
    [key: string]: {
        [key: string]: string;
    };
};

const translations: Translations = {
    en,
    bn,
    fr,
    de,
    es,
    tr,
    sv,
};

type LocalizationContextType = {
    language: string;
    setLanguage: (language: string) => void;
    t: (key: string) => string;
};

const LocalizationContext = createContext<LocalizationContextType>({
    language: "en",
    setLanguage: () => {},
    t: (key: string) => key,
});

export const LocalizationProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [language, setLanguage] = useState("en");

    const t = (key: string) => {
        return translations[language]?.[key] || key;
    };

    return (
        <LocalizationContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LocalizationContext.Provider>
    );
};

export const useLocalization = () => useContext(LocalizationContext);
