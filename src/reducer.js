const reducerFn = (state, action)=>{
    switch (action.type) {
        case "GET_DATA_FROM_API":
            return {
                ...state,
                hits: action.payload.hits,
                query: action.payload.query
            }
    }
    return state
}

export default reducerFn