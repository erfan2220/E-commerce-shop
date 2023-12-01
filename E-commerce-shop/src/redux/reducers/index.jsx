import handleCart from "./handleCart.jsx";
import {combineReducers} from "redux";


const rootReducers = combineReducers({
    cart:handleCart,
})

export default rootReducers;
