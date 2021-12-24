import { combineReducers } from "redux";
import cakeReducer from './cake/Cakereducer'
import icecreamReducer from "./icecream/icecreamReducers";
import userReducer from "./user/UserReducer";


const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer,
    user:userReducer
})
export default rootReducer;