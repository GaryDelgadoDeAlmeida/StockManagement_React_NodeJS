import { ADD_PRODUCT_ACTION, UPDATE_PRODUCT_ACTION, DELETE_PRODUCT_ACTION, SEARCH_PRODUCT_ACTION } from "../actions"

export const addProductAction = (product) => {
    return {
        type: ADD_PRODUCT_ACTION,
        payload: product
    }
}

export const updateProductAction = (productID, product) => {
    return {
        type: UPDATE_PRODUCT_ACTION,
        payload: {
            id: productID,
            product: product
        }
    }
}

export const deleteProductAction = (productID) => {
    return {
        type: DELETE_PRODUCT_ACTION,
        payload: parseInt(productID)
    }
}

export const searchProductAction = (value) => {
    return {
        type: SEARCH_PRODUCT_ACTION,
        payload: value
    }
}