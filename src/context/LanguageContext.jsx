import {createContext, useContext, useState} from "react";

const LanguageContext = createContext();

function LanguageProvider({children}) {
    const [chosenLanguage, setChosenLanguage] = useState("auto")

    return <LanguageContext.Provider value={{
        chosenLanguage,
        setChosenLanguage
    }}>
        {children}
    </LanguageContext.Provider>
}

function useChosenLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) throw new Error("LanguageContext was used outside of LanguageProvider");
    return context;
}

export {LanguageProvider, useChosenLanguage};