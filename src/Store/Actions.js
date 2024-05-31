export default function fetchData() {
    return async (dispatch) => {
        dispatch(fetchProductsRequest)
        try {
            const response = await fetch("https://661c69bce7b95ad7fa6a4ed9.mockapi.io/v1/products")
            if(!response.ok)
                throw new Error("failed to fetch response")
            const data = await response.json()
            dispatch(fetchProductsSuccess(data))
        }
        catch (error) {
            dispatch(fetchProductsFailure(error.message))
            console.log(error.message)
        }
    }
}


const fetchProductsRequest = {
    type:"FETCH_PRODUCTS_REQUEST"
}

const fetchProductsSuccess = (data)=> {
    return {
        type:"FETCH_PRODUCTS_SUCCESS",
        payload:data
    }
}

const fetchProductsFailure = (error)=> {
    return {
        type: "FETCH_PRODUCTS_FAILURE",
        payload : error
    }
}

export const addProduct = (item) => {
    return {
        type:"ADD",
        payload : item
    }
}

export const deleteProduct = id => {
    return {
        type:"DELETE",
        payload: id
    }
}

export const updateProduct = (item) => {
    return{ 
        type:"UPDATE",
        payload : item
    }
}