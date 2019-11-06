import {combineReducers, createStore, applyMiddleware} from "redux";
import favorites from "./favorites/reducer";
import musicBrainzReducer from "./search/musicbrainz/reducer";
import lastFMReducer from "./search/lastfm/reducer";
import shortlist from "./shortlist/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
  favorites,
  lastFM: lastFMReducer,
  musicBrainz: musicBrainzReducer,
  shortlist,
});


export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;
