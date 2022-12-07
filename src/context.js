import { createContext, useEffect, useReducer } from "react";
import reducerFn from "./reducer";

const AppData = createContext()

const API = 'http://hn.algolia.com/api/v1/search?';

const initialState= {
    isLoading : true,
    hits: [],
    query: '',
    page: 0,
    nbPages: 0
}

const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducerFn , initialState)

    const fetchAPIData = async (url)=>{
        try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({
                type: 'GET_DATA_FROM_API',
                payload : {
                    hits: data.hits,
                    page: data.page,
                    nbPages: data.nbPages,

                }
            });
            state.isLoading = false ;
        } catch (error) {
            console.log(error)
        }
    };
    
    const handleChange = (event ,newValue)=>{
        dispatch({type: 'UPDATE_SEARCH', payload:  newValue})
    }

    const handlePageChange = (event , newValue)=>{
        dispatch({type: 'UPDATE_PAGE', payload:  newValue})
    }

    useEffect(()=>{
        fetchAPIData(`${API}query=${state.query}&page=${state.page}`)
    }, [state.query, state.page])   

    return (
        <AppData.Provider value={{ ...state,handleChange, handlePageChange }}>
            {children}
        </AppData.Provider>
    )
}

export {AppData, AppProvider}