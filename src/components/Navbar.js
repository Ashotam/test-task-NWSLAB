import  {useEffect} from "react"
import {connect} from 'react-redux'
import {getCategories} from '../store/actions/actions'
import Nav from './Nav'

function NavBar({getCategories,catsState}) {
    useEffect(()=>{
       getCategories()
    },[])
    return (
        <>
            <div className="nav-bar">{ catsState && catsState.categories.length?
                catsState.categories.map((category,index)=>(
                <Nav key={`${index} ${category.id}`} selectedCategory={category}/>
                ))
            :null
            }</div>
        </>
    )
}

const mapStateToProps  = (state) => ({catsState:state.categories})

export default connect(mapStateToProps, {getCategories})(NavBar)