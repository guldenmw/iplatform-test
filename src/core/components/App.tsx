import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "react-bootstrap";
import store from '../store';
import SearchArists from "./Artists/SearchArtists";
import SearchReleases from "./Releases/SearchReleases";
import ListFavorites from "../containers/ListFavorites";


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
              <ListFavorites/>
          </Route>
          <Route path="/search_artists">
              <SearchArists/>
          </Route>
          <Route path="/search_releases">
              <SearchReleases/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
