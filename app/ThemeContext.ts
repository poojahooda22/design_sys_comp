'use client'

import React, {useContext, createContext} from 'react';

const ThemeContext 
const ThemeUpdateContext = React.createConte

export function ThemeProvider({children} : any)  {
    const [darkTheme, setDarkTheme] = React.useState(true)

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (       
    )
}

