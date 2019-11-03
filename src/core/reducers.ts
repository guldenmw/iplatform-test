import * as types from "./types";
import {createHash} from "crypto";

const initialState: types.AppState = {
  favorites: {
    artists: [],
    releases: []
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
          artists: [action.artist, ...state.favorites.artists]
        }
      };

    case types.REMOVE_ARTIST_FROM_FAVORITES:

      return {
        ...state,
        favorites: {
          ...state.favorites,
          artists: state.favorites.artists.filter((name) => name !== action.artist)
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
      if (state.shortlist.artists.includes(action.artist)) {
        return state
      } else {

        return {
          ...state,
          shortlist: {
            artists: [action.artist, ...state.shortlist.artists]
          }
        }
      }

    case types.REMOVE_ARTIST_FROM_SHORTLIST:

      return {
        ...state,
        shortlist: {
          artists: state.shortlist.artists.filter((name) => name !== action.artist),
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
  let releaseId = '';

  switch (action.type) {
    case types.ADD_RELEASE_TO_FAVORITES:
      releaseId = createHash('sha1').update(action.release.title).digest('hex');
      const release = {...action.release, 'id': releaseId};

      return {
        ...state,
        favorites: {
          ...state.favorites,
          releases: [release, ...state.favorites.releases]
        }
      };

    case types.REMOVE_RELEASE_FROM_FAVORITES:
      releaseId = createHash('sha1').update(action.release.title).digest('hex');

      return {
        ...state,
        favorites: {
          ...state.favorites,
          releases: state.favorites.releases.filter((release) => release.id !== releaseId)
        }
      };

    default:
      return state
  }
}