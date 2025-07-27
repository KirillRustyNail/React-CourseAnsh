import {ThemeContext} from './ThemeContextProvider'
import {useContext} from "react";

export const useTheme = () => useContext(ThemeContext)