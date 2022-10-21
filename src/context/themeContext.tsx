import { createContext } from "react";

interface ThemeProps {
    theme: any;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}


export const ThemeContext = createContext({} as ThemeProps);

export const ThemeProvider = ({ children } : any) => {

    const theme = {};

    const setDarkTheme = () => {
        console.log('DARK');
    }

    const setLightTheme = () => {
        console.log('LIGHT');
    }

    return(
        <ThemeContext.Provider
            value={{
                theme,
                setDarkTheme,
                setLightTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}