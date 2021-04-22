import {ACTION_LOAD_DATA} from './actions'


const loadData = (data)=>{
    return {
        type: ACTION_LOAD_DATA,
        payload: data
    }
}


export {loadData}