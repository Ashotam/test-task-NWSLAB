import {GET_CATEGORIES, GET_CATS, SELECT_CATEGORY} from '../types'

const initialState = {
    categories:[],
    selectedCategory:{},
    cats:[]
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_CATEGORIES:
            return {
                ...state,
                categories:action.payload,
            }
        case SELECT_CATEGORY:return  {
            ...state,
            selectedCategory: action.payload
        }
        case GET_CATS:return {
            ...state,
            cats:action.payload
        }
        default: return state
    }

}