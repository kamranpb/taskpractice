import { IPost, IUser } from "../../types";
import * as actionTypes from "../actionTypes";
let newId = 0;

export interface Id {
  id: number;
  title: string;
}

export const PostAction = ({ title, id }: Id) => {
  return {
    type: actionTypes.ADD_TO_USER,
    payload: {
      id,
      title,
      actionId: newId++,
    },
  };
};
