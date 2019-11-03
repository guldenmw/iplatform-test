import * as types from "./types";
import {createHash} from "crypto";

const initialState: types.AppState = {
  favorites: {
    artists: [],
  },
  shortlist: {
    artists: []
  }
};

export function updateFavoriteArtists(
  state = initialState,
  action: types.ArtistFavoritesActionTypes
): types.AppState {

  switch (action.type) {
    case types.ADD_ARTIST_TO_FAVORITES:

      return {
        ...state,
        favorites: {
          ...state.favorites,
          artists: [action.name, ...state.favorites.artists]
        }
      };

    case types.REMOVE_ARTIST_FROM_FAVORITES:

      return {
        ...state,
        favorites: {
          ...state.favorites,
          artists: state.favorites.artists.filter((name) => name !== action.name)
        }
      };

    default:
      return state
  }
}

export function updateShortlistArtists(
  state = initialState,
  action: types.ArtistShortlistActionTypes
): types.AppState {

  switch (action.type) {
    case types.ADD_ARTIST_TO_SHORTLIST:
      if (state.shortlist.artists.includes(action.name)) {
        return state
      } else {

        return {
          ...state,
          shortlist: {
            artists: [action.name, ...state.shortlist.artists]
          }
        }
      }

    case types.REMOVE_ARTIST_FROM_SHORTLIST:

      return {
        ...state,
        shortlist: {
          artists: state.shortlist.artists.filter((name) => name !== action.name),
        }
      };

    default:
      return state
  }
}

export function updateFavoriteReleases(
  state = initialState,
  action: types.ReleaseFavoritesActionTypes
): types.AppState {
  let artists = state.favorites.artists.slice(0);

  let artist = artists.find(artist => {
    return artist.name === action.release.artist
  });

  let artistIndex = artist ? artists.indexOf(artist) : 0;

  switch (action.type) {
    case types.ADD_RELEASE_TO_FAVORITES:

      if (artist) {
        if (artist.releases.includes(action.release)) {
          return state

        }
        artist.releases.unshift(action.release);

        artists.splice(artistIndex, 1, artist);

      } else {
        artist = {
          'name': action.release.artist,
          releases: [action.release]
        };

        artists.unshift(artist);
      }

      return {
        ...state,
        favorites: {
          artists
        }
      };

    case types.REMOVE_RELEASE_FROM_FAVORITES:
      if (!artist) {
        return state
      }

      artists[artistIndex].releases = artists[artistIndex].releases.filter(
        (release) => release.title !== action.release.title
      );

      return {
        ...state,
        favorites: {
          artists
        }
      };

    default:
      return state
  }
}