import { IPost, IUser } from '../types';
import * as actionType from './actionTypes'

let count = 0;

export const ActionUser = (users:IUser[])=>({
    type: actionType.ADD_USERS,
    payload: users
})

export const ActionPost = (posts:IPost[])=>({
    type: actionType.ADD_USER_POST,
    payload: posts
})

