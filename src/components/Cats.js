import {connect} from 'react-redux'
import {getCats} from '../store/actions/actions'
import  {useEffect} from "react"

function Cats({getCats,catsState}) {
useEffect(()=>{
    if(catsState.selectedCategory.id){
        getCats(catsState.selectedCategory.id)
    }

},[catsState.selectedCategory])
    return (
        <div className="cats-wrapper">{catsState && catsState.cats.length?
            catsState.cats.map((category,index)=>(
               <img src={category.url} className='cat-image'/>
            ))
            :<p> Please select category</p>
        }</div>

    )
}

const mapStateToProps  = (state) => ({catsState:state.categories})

export default connect(mapStateToProps, {getCats})(Cats)