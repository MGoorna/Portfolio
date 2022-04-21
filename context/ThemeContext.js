import { createContext, useState } from 'react'
import React from 'react'

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) =>{
  const [isLightTheme, setIsLightTheme] = useState(false)
  const [light, setLight] = useState({synetax: '#555', ui: '#ddd', bg: 'rgb(248, 249, 250)'})
  const [dark, setDark] = useState({synetax: '#ddd', ui: '#333', bg: 'cadetblue'})

  return(
    <ThemeContext.Provider value={{
      isLightTheme: isLightTheme,
      light: light,
      dark: dark
    }}>
      {children}
    </ThemeContext.Provider>
  )
}
