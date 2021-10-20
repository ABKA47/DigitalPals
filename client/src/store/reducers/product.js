import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../utility'

const initialState = {
    productList: [],
    favProducts: [],
    cart: [],
    selectedProductId: [],
    exist: []
}

export const fetchProducts = (state, action) => {

    return updatedObject(state, { productList: action.products })
}

export const productFavoriteStatus = (state, action) => {
    return updatedObject(state, { selectedProductId: [...state.selectedProductId, action.id] })
}
export const removeFavoriteStatus = (state, action) => {
    let removedFavorite = state.selectedProductId.filter(element => parseInt(element.id) !== action.id)

    return updatedObject(state, { selectedProductId: removedFavorite })
}
export const fetchFavoriteProduct = (state, action) => {
    return updatedObject(state, { favProducts: action.product, selectedProductId: action.product })
}
export const addToCart = (state, action) => {
    let existObj = state.cart.map(items => items.id)
    let exist = existObj.includes(action.id)
    if (exist) {
        state.exist.push(existObj)
    } else {
        let cartItem = state.productList.filter(product => product.id === action.id)
        cartItem.map(item => {
            state.cart.push(item)
        })
    }
    return updatedObject(state, { cart: [...state.cart], exist: [...state.exist] })
}
export const removeFromCart = (state, action) => {
    let removedCart = state.cart.filter(element => parseInt(element.id) !== action.id)    
    return updatedObject(state, { cart: removedCart })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHPRODUCTS: return fetchProducts(state, action)
        case actionTypes.PRODUCTFAVORITESTATUS: return productFavoriteStatus(state, action)
        case actionTypes.FETCHFAVORITEPRODUCT: return fetchFavoriteProduct(state, action)
        case actionTypes.REMOVEFAVORITESTATUS: return removeFavoriteStatus(state, action)
        case actionTypes.REMOVEFROMCART: return removeFromCart(state, action)
        case actionTypes.ADDTOCART: return addToCart(state, action)
        default: return state
    }
}

export default reducer