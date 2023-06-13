import {createContext} from "react";
interface IThemeContext {
    theme: string,
    changeTheme: (theme: string) => void
}
export const ThemeContext = createContext<IThemeContext>({
    theme: '',
    changeTheme: () => {}
})