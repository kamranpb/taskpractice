import { postReducer } from "./reducer/postReducers";
import { createStore } from "redux";

const store = createStore(postReducer);

export default store;
