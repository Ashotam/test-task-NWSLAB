import {connect} from "react-redux";
import { selectCategory} from "../store/actions/actions";

function Nav({selectCategory,selectedCategory}) {
    return(<p onClick={()=>{
        selectCategory(selectedCategory)
    }
    }>
        {selectedCategory.name}
    </p>)
}
export default connect(null, {selectCategory})(Nav)