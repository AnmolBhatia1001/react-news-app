import { createContext, useEffect, useReducer } from "react";
import reducerFn from "./reducer";
const AppData = createContext()
const API = 'http://hn.algolia.com/api/v1/search?query=';

const AppProvider = ({children})=>{
    const fetchAPIData = async (url)=>{
        try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({
                type: 'GET_DATA_FROM_API',
                payload : {
                    hits: data.hits,
                    query: data.query
                }
            })
        } catch (error) {
            console.log(error)
        }
    };
    
    useEffect(()=>{
        fetchAPIData(`${API}${initialState.query}`)
    }, [])   


    const initialState= {
        hits: [],
        query: 'css'
    }

    

    const [state, dispatch] = useReducer(reducerFn , initialState)
    return (
        <AppData.Provider value={{...state} }>
            {children}
        </AppData.Provider>
    )
}

export {AppData, AppProvider}