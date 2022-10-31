import { actionTypes } from  '../constants/action-types'

export const setProducts = (products) => {
    return {
        type : actionTypes.SET_PRODUCTS,
        payload : products
    }
}

export const selectProducts = (product) => {
    return {
        type : actionTypes.SELECTED_PRODUCT,
        payload : product
    }
}

export const deleteProducts = (product) => {
    return {
        type : actionTypes.REMOVE_PRODUCT
    }
}
