'use client'

import React, {useContext, createContext} from 'react';

const ThemeContext 
const ThemeUpdateContext = React.e

export function ThemeProvider({children} : any)  {
    const [darkTheme, setDarkTheme] = React.useState(true)

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (       
    )
}

