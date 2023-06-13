import {FC, ReactNode, useState} from "react";
import {ThemeContext} from "../context/ThemeContext";

interface IThemeProvider {
    children: ReactNode
}

export const ThemeProvider: FC<IThemeProvider> = ({children, ...props}) => {
    const [theme, setTheme] = useState<string>('light')

    const changeTheme = (theme: string) => {
        setTheme(theme)
    }

    return <ThemeContext.Provider value={{theme, changeTheme}}{...props}>
        {children}
    </ThemeContext.Provider>
}