import { combineReducers } from "redux";
import CartReducer from './CartReducer';
import LogReducer from './isLogged';

const reducers = combineReducers({
    CartReducer,
    LogReducer
});

export default reducers;