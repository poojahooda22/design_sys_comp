'use client'

import React, {useContext, createContext} from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function ThemeProvider({children} : any)  {
    const [darkTheme, setDarkTheme] = React.useState(true)

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <ThemeCont value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider> 
        </ThemeCont

    )
}
