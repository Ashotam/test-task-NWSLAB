import {GET_CATEGORIES, GET_CATS, SELECT_CATEGORY} from '../types'
import catsManager from '../../manager/catsManager'

export const getCategories = () => async dispatch => {

    try{
        const res = await catsManager.getCategories()
        dispatch( {
            type: GET_CATEGORIES,
            payload: res.data
        })
    }
    catch(e){
      console.log(e)
    }

}
export const selectCategory= (selectedCategory)=>async dispatch=>{
    dispatch( {
        type: SELECT_CATEGORY,
        payload: selectedCategory
    })
}
export const getCats = (selectedCategory) => async dispatch => {

    try{
        const res = await catsManager.getCats(selectedCategory)
        dispatch( {
            type: GET_CATS,
            payload: res.data
        })
    }
    catch(e){
        console.log(e)
    }

}