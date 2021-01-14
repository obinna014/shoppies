import { combineReducers } from 'redux';
import rootReducer from './movieReducer';


export default combineReducers({
    movie: rootReducer
});