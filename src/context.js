import { createContext } from "react";

const AppData = createContext()

const AppProvider = ({children})=>{
    return (
        <AppData.Provider value='test'>
            {children}
        </AppData.Provider>
    )
}

export {AppData, AppProvider}