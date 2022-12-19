import * as actionType from './actionTypes'

export interface stateType {
    users: any ,
    posts: any
}


const initialState:stateType = {
    users : [],
    posts: []
}


export const Reducer = (state=initialState, action:any) =>{


switch(action.type){
case actionType.ADD_USERS:
    return {...state,
        users: action.payload
    }

case actionType.ADD_USER_POST:
    return {
        ...state,
        posts: action.payload
    }

default: 
return state


}
}