import { createContext,useReducer } from "react";
import { ThemeState, themeReducer, lightTheme } from './themeReducer';

interface ThemeProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}


export const ThemeContext = createContext({} as ThemeProps);

export const ThemeProvider = ({ children } : any) => {

    const [theme, dispatch] = useReducer(themeReducer, lightTheme)

    const setDarkTheme = () => {
        dispatch({ type:'dark_theme' })
    }

    const setLightTheme = () => {
        dispatch({ type:'light_theme' })
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