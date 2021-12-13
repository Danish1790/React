import { combineReducers } from "redux";
import cakeReducer from './cake/Cakereducer'
import icecreamReducer from "./icecream/icecreamReducers";

const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer
})
export default rootReducer;