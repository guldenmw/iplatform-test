import produce from 'immer';
import IMusicBrainzArtist from '../../search/musicbrainz/types/MusicBrainzArtistsResults';
import IMusicBrainzRelease from '../../search/musicbrainz/types/MusicBrainzReleasesResults';

import {
  ADD_FAVORITES_ARTIST,
  ADD_FAVORITES_RELEASE,
  REMOVE_FAVORITES_ARTIST,
  REMOVE_FAVORITES_RELEASE
} from '../actions';

interface IFavouritesReducerState {
  releases: any[];
  artists: any[];
}

const initialState: IFavouritesReducerState = {
  releases: [],
  artists: [],
};

const favouritesReducer = (state = initialState, action): IFavouritesReducerState => {
  const { type, data } = action;
  switch (type) {
    case ADD_FAVORITES_ARTIST: {
      const { id, name }: IMusicBrainzArtist = data;
      const artistStub = { id, name };
      return {
        ...state,
        artists: [
          ...state.artists,
          artistStub,
        ]
      }
    }

    case REMOVE_FAVORITES_ARTIST: {
      const { id, name }: IMusicBrainzArtist = data;
      const artistStub = { id, name };
      return {
        ...state,
        artists: [
          ...state.artists,
          artistStub,
        ]
      }
    }

    case ADD_FAVORITES_RELEASE: {
      const { id, title, date, 'track-count': tracks,  }: IMusicBrainzRelease = data;
      const releaseStub = { id, title, date, tracks };
      return {
        ...state,
        releases: [
          ...state.releases,
          releaseStub,
        ]
      }
    }

    case REMOVE_FAVORITES_RELEASE: {
      const { id, title }: IMusicBrainzRelease = data;
      const releaseStub = { id, name };
      return {
        ...state,
        releases: [
          ...state.releases,
          releaseStub,
        ]
      }
    }
    default:
      return state;
  }
};

export default favouritesReducer;
