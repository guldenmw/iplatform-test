import {combineReducers, createStore} from "redux";
import favorites from "./favorites/reducers";
import shortlist from "./shortlist/reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
  favorites,
  shortlist
});

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(
  rootReducer,
  composeWithDevTools()
);
