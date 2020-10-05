import * as ActionTypes from '../ActionTypes';
import {combineReducers} from 'redux';

const initialToken = null
const reducer = (state = initialToken, action) =>{
    switch (action.type) {
        case ActionTypes.SET_TOKEN:
            return action.payload.user;
        case ActionTypes.REMOVE_TOKEN:
            return initialToken;
        default:
            return state;
    }
}
const reducers = combineReducers({reducer});

export default reducers;
