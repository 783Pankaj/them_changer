import React, { createContext, useContext } from 'react'

export const ThemContext =  createContext({
    themMode : "ligth",
    darkThem: ()=>{},
    ligthThem: ()=>{}
})


export const ThemProvider = ThemContext.Provider

export default function useTheme(){
   return useContext(ThemContext)
}