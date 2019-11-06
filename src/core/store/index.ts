import {combineReducers, createStore, applyMiddleware} from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import favorites from "./favorites/reducer";
import musicBrainzReducer from "./search/musicbrainz/reducer";
import lastFMReducer from "./search/lastfm/reducer";
import shortlist from "./shortlist/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  favorites,
  lastFM: lastFMReducer,
  musicBrainz: musicBrainzReducer,
  shortlist,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

// export const persistor = persistStore(store);

