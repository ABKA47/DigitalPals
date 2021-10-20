import * as actionTypes from './actionTypes'
import axios from 'axios'
import privateAxios from '../../axios'

export const fetchProducts = (products) => {
    return {
        type: actionTypes.FETCHPRODUCTS,
        products: products
    }
}

export const productFavoriteStatus = (id) => {
    return {
        type: actionTypes.PRODUCTFAVORITESTATUS,
        id: id
    }
}
export const removeFavoriteStatus = (id) => {
    return {
        type: actionTypes.REMOVEFAVORITESTATUS,
        id: id
    }
}
export const fetchFavoriteProduct = (product) => {
    return {
        type: actionTypes.FETCHFAVORITEPRODUCT,
        product: product
    }
}

export const addToCart = (id) => {
    return {
        type: actionTypes.ADDTOCART,
        id: id
    }
}

export const removeFromCart = (id) => {
    return {
        type: actionTypes.REMOVEFROMCART,
        id: id
    }
}
export const fetchAllProducts = () => {
    return dispatch => {
        axios.get('https://fakestoreapi.com/products').then(response => {
            dispatch(fetchProducts(response.data))
        })
    }
}
export const addFavorite = (id, favoriteStatus) => {
    return dispatch => {
        privateAxios.post('product/addfavorite', { id, favoriteStatus })
        dispatch(productFavoriteStatus(id))
    }
}
export const removeFavorite = (id) => {
    return dispatch => {
        privateAxios.delete(`product/removefavorite/${id}`)
        dispatch(removeFavoriteStatus(id))
    }
}

export const getFavoriteProduct = () => {
    return dispatch => {
        privateAxios.get('/product/favorite').then(response => {
            dispatch(fetchFavoriteProduct(response.data))

        })
    }
}