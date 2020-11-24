import { combineReducers } from "redux";
import mode from "./mode";
import world from "./language";
import posts from "./posts";
import region from "./region";

const rootReducer = combineReducers({
  mode,
  world,
  posts,
  region,
});

export default rootReducer;
