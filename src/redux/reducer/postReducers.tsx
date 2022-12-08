import * as actionTypes from "../actionTypes";

interface IPostReducer {
  posts: number[];
}

const initialState = {
  posts: [],
};

type Action = {
  type: typeof actionTypes.ADD_TO_USER;
  payload: number;
};
export const postReducer = (
  state: IPostReducer = initialState,
  action: Action
) => {
  switch (action.type) {
    case actionTypes.ADD_TO_USER:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    default:
      return state;
  }
};
