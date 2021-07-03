import {Axios} from "./AxiosInstance"

export default {
 getCategories (){
         return Axios(process.env.NEXT_PUBLIC_APP_BASE_URL).get(
             `/categories`,
         )
     },
    getCats (selectedCategory){
        return Axios(process.env.NEXT_PUBLIC_APP_BASE_URL).get(
            `/images/search?limit=10&page=1&category_ids=${selectedCategory}`,
        )
    },
}