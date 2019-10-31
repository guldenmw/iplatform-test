import React from 'react';
import './App.css';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "react-bootstrap";
import {updateFavoriteArtists, updateShortlistArtists, updateFavoriteReleases} from '../reducers'
import AddArtistToShortlist from "../containers/AddArtistToShortlist";
import SearchArists from "./SearchArtists";


const rootReducer = combineReducers({
  updateFavoriteArtists,
  updateShortlistArtists,
  updateFavoriteReleases
});

const store = createStore(rootReducer, composeWithDevTools());

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar bg="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Link to="/my_artists">My Artists</Link>
            <Link to="/search_artists">Search Artists</Link>
            <Link to="/search_releases">Search Releases</Link>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/my_artists">
              <SearchArists/>
          </Route>
          <Route path="/search_artists">
              <AddArtistToShortlist artist={''}/>
          </Route>
          <Route path="/search_releases">
              <div>"search_releases"</div>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
