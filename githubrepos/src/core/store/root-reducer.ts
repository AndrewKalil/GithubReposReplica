import { combineReducers } from "redux";
import repositoryReducer from "./repositories/reducer";
import userReducer from "./user/reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  repos: repositoryReducer,
});
