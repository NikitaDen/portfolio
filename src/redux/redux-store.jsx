import {combineReducers, createStore} from "redux";
import mainReducer from "./info-reducer";


const reducers = combineReducers({
    mainInfo: mainReducer,
});

const store = createStore(reducers);

export default store;