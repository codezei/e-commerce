import {ACTION_LOAD_DATA} from './actions'
import {ACTION_UPDATE_REVIEWS} from './actions'


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

export {loadData, updateReviews}