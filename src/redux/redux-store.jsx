import {combineReducers, createStore} from "redux";
import mainReducer from "./info-reducer";
import configReducer from "./config-reducer";


const reducers = combineReducers({
    mainInfo: mainReducer,
    config: configReducer,
});

const store = createStore(reducers);

export default store;