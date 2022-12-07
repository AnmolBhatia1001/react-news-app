const reducerFn = (state, action)=>{
    switch (action.type) {
        case "GET_DATA_FROM_API":
            return {
                ...state,
                hits: action.payload.hits,
            };
        case "UPDATE_SEARCH":
            return{
                ...state,
                query: action.payload
            }
    }
    return state
}

export default reducerFn