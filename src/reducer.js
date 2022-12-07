const reducerFn = (state, action)=>{
    switch (action.type) {
        case "GET_DATA_FROM_API":
            return {
                ...state,
                hits: action.payload.hits,
                page: action.payload.page,
                nbPages: action.payload.nbPages,
            };
        case "UPDATE_SEARCH":
            return{
                ...state,
                query: action.payload
            }
        case "UPDATE_PAGE":
            return{
                ...state,
                page: action.payload
            }
    }
    return state
}

export default reducerFn