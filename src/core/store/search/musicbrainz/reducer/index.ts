import {
  ARTISTS_RELEASES_SEARCH_START,
  ARTISTS_RELEASES_SEARCH_SUCCESS,
  ARTISTS_RELEASES_SEARCH_TEXT_CHANGE,
  RELEASES_SEARCH_START,
  RELEASES_SEARCH_SUCCESS,
  SHOW_ARTIST_RELEASES,
  HIDE_ARTIST_RELEASES
} from '../actions';

import ILastFMArtist from '../types/LastFMArtistsResults';

export interface IMusicBrainzSearchReducer {
  artists: {
    searchText: string;
    results: ILastFMArtist[];
    isLoading: boolean;
  };

  releases: {
    searchText: string;
    results: any[];
    isLoading: string[];
  };

  showReleases: any[];
}

const initialState: IMusicBrainzSearchReducer = {
  artists: {
    searchText: '',
    results: [],
    isLoading: false,
  },

  releases: {
    searchText: '',
    results: [],
    isLoading: []
  },

  showReleases: []
};

const musicBrainzReducer = (state: IMusicBrainzSearchReducer = initialState, action): IMusicBrainzSearchReducer => {
  const { type, data } = action;
  switch (type) {
    case ARTISTS_RELEASES_SEARCH_TEXT_CHANGE: {
      return {
        ...state,
        artists: {
          ...state.artists,
          searchText: data
        }
      }
    }

    case ARTISTS_RELEASES_SEARCH_START: {
      return {
        ...state,
        artists: {
          ...state.artists,
          isLoading: true
        }
      }
    }

    case ARTISTS_RELEASES_SEARCH_SUCCESS: {
      return {
        ...state,
        artists: {
          ...state.artists,
          results: data,
          isLoading: false
        }
      }
    }

    case RELEASES_SEARCH_START: {
      return {
        ...state,
        releases: {
          ...state.releases,
          isLoading: [
            ...state.releases.isLoading,
            data
          ]
        }
      }
    }

    case RELEASES_SEARCH_SUCCESS: {
      return {
        ...state,
        releases: {
          ...state.releases,
          results: [
            ...state.releases.results,
            ...data.results
          ],
          isLoading: state.releases.isLoading.filter(item => item !== data.artistId)
        }
      }
    }

    case SHOW_ARTIST_RELEASES: {
      if ( state.showReleases.includes(data) ) {
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

    case HIDE_ARTIST_RELEASES: {
      if ( !state.showReleases.includes(data) ) {
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

export default musicBrainzReducer;
