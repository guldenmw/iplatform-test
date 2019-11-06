import {
  ADD_FAVORITES_ARTIST,
  ADD_FAVORITES_RELEASE,
  REMOVE_FAVORITES_ARTIST,
  REMOVE_FAVORITES_RELEASE,
  SHOW_FAVORITE_RELEASES,
  HIDE_FAVORITE_RELEASES
} from '../actions';

import ILastFMArtist from '../../search/lastfm/types/LastFMArtistsResults';
import IMusicBrainzRelease from '../../search/musicbrainz/types/MusicBrainzReleasesResults';
import {IFavoritesArtist} from '../types';


export interface IFavoritesReducerState {
  artists: IFavoritesArtist[];
  releases: IMusicBrainzRelease[];
  showReleases: string[];
  isLoading: string[];
}

const initialState: IFavoritesReducerState = {
  releases: [],
  artists: [],
  showReleases: [],
  isLoading: []
};


const favouritesReducer = (state = initialState, action): IFavoritesReducerState => {
  const { type, data } = action;
  switch (type) {

    case ADD_FAVORITES_ARTIST: {
      const { mbid, name }: ILastFMArtist = data;
      const artistStub = { mbid, name };

      return {
        ...state,
        artists: [
          ...state.artists,
          artistStub,
        ]
      }
    }

    case REMOVE_FAVORITES_ARTIST: {
      return {
        ...state,
        artists: state.artists.filter(item => item.mbid !== data.mbid)
      }
    }

    case ADD_FAVORITES_RELEASE: {
      const artist = {
        name: data['artist-credit'][0].artist.name,
        mbid: data['artist-credit'][0].artist.id,
      };

      let artistExist = state.artists.some(item => item.mbid === artist.mbid);

      if (!artistExist) {
        return {
          ...state,
          artists: [
            ...state.artists,
            artist
          ],
          releases: [
            ...state.releases,
            data,
          ]
        }
      }

      return {
        ...state,
        releases: [
          ...state.releases,
          data,
        ]
      }
    }

    case REMOVE_FAVORITES_RELEASE: {
      return {
        ...state,
        releases: state.releases.filter(item => item.id !== data.id)
      }
    }

    case SHOW_FAVORITE_RELEASES: {
      if (state.showReleases.includes(data)) {
        return state
      }

      return {
        ...state,
        showReleases: [
          ...state.showReleases,
          data
        ]
      }
    }

    case HIDE_FAVORITE_RELEASES: {
      if (!state.showReleases.includes(data)) {
        return state
      }

      return {
        ...state,
        showReleases: state.showReleases.filter(item => item !== data)
      }
    }

    default:
      return state;
  }
};

export default favouritesReducer;
