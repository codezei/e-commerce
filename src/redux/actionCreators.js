import {ACTION_LOAD_DATA} from './actions'
import {ACTION_UPDATE_REVIEWS} from './actions'
import {ACTION_ADD_PRODUCT} from './actions'
import {ACTION_ADD_FAVORITE} from './actions'
import {ACTION_ADD_RECENT} from './actions'


const loadData = (data)=>{
    return {
        type: ACTION_LOAD_DATA,
        payload: data
    }
}
const updateReviews = (reviews)=>{
    return {
        type: ACTION_UPDATE_REVIEWS,
        payload: reviews
    }
}
const addProduct = (product)=>{
    return {
        type: ACTION_ADD_PRODUCT,
        payload: product
    }
}

const addToFavList = (product)=>{
    return {
        type: ACTION_ADD_FAVORITE,
        payload: product
    }
}

const addToRecentList = (product)=>{
    return {
        type: ACTION_ADD_RECENT,
        payload: product
    }
}

export {loadData, updateReviews, addProduct, addToFavList, addToRecentList}