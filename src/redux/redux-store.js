import {combineReducers, createStore} from "redux";
import messageReducer from "./message-reducer";
import newsReducer from "./news-reducer";

let reducers = combineReducers({
    message:messageReducer,
    news:newsReducer
})

let store = createStore(reducers);


export default store;