import { AddTransactionReducer } from "./reducers";
import { combineReducers } from "redux";


const rootreducers = combineReducers({
    Addtrans: AddTransactionReducer
});

export default rootreducers;
