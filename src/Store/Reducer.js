const initialState = {
    products : [],
    loading : false,
    error:null
}
export const reducer = (state = initialState,action)=> {
    switch(action.type) {
        case "FETCH_PRODUCTS_REQUEST":
            return {
                ...state,
                loading:true,
                error:null
            }
        case "FETCH_PRODUCTS_SUCCESS":
            return {
                ...state,
                products: [...action.payload],
                loading:false
            }
        case "FETCH_PRODUCTS_FAILURE":
            return {
                ...state,
                loading:false,
                error: action.payload
            }
        case "ADD":
            console.log(state.products)
            return {
                ...state,
                products:[...state.products,action.payload]
            }
            
        case "DELETE":
            console.log(action.payload)
            return {
                ...state,
                products: [...state.products].filter(item=>item.id !== action.payload)
            }
        case "UPDATE": 
            return {
                ...state,
                products:[...state.products].map(item=>item.id == action.payload.id ? {...item,...action.payload}:item)
            }
        default:
            return state
    }
}