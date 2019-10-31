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

  let artistId = '';

  switch (action.type) {
    case types.ADD_ARTIST_TO_FAVORITES:
      artistId = createHash('sha1').update(action.artist.name).digest('hex');
      const artist = {'id': artistId, ...action.artist};

      return {
        ...state,
        favorites: {
          ...state.favorites,
          artists: [artist, ...state.favorites.artists]
        }
      };

    case types.REMOVE_ARTIST_FROM_FAVORITES:
      artistId = createHash('sha1').update(action.artist.name).digest('hex');

      return {
        ...state,
        favorites: {
          ...state.favorites,
          artists: state.favorites.artists.filter((artist) => artist.id !== artistId)
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

  let artistId = '';

  switch (action.type) {
    case types.ADD_ARTIST_TO_SHORTLIST:
      artistId = createHash('sha1').update(action.artist).digest('hex');
      const artist = {'name': action.artist, 'id': artistId};

      return {
        ...state,
        shortlist: {
          artists: [artist, ...state.shortlist.artists]
        }
      };

    case types.REMOVE_ARTIST_FROM_SHORTLIST:
      artistId = createHash('sha1').update(action.artist).digest('hex');

      return {
        ...state,
        shortlist: {
          artists: state.shortlist.artists.filter((artist) => artist.id !== artistId),
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