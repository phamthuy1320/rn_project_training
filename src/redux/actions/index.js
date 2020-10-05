import * as ActionTypes from '../ActionTypes';

export function setToken(user){
    return{
        type:ActionTypes.SET_TOKEN,
        payload:{
            user
        }
    }
}
export function removeToken(){
    return {
        type:ActionTypes.REMOVE_TOKEN,
    }
}