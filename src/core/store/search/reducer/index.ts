import {
  ARTISTS_SEARCH_START,
  ARTISTS_SEARCH_SUCCESS,
  ARTISTS_SEARCH_TEXT_CHANGE,
  RELEASES_SEARCH_SUCCESS,
  RELEASES_SEARCH_TEXT_CHANGE,
} from '../actions';

import IArtistResult from '../types';

interface ISearchReducer {
  artists: {
    searchText: string;
    results: IArtistResult[];
    isLoading: boolean;
  };
  releases: {
    searchText: string;
    results: any[];
    isLoading: boolean;
  };
}

const initialState: ISearchReducer = {
  artists: {
    searchText: '',
    results: [],
    isLoading: false,
  },
  releases: {
    searchText: '',
    results: [],
    isLoading: false,
  }
};

const searchReducer = (state: ISearchReducer = initialState, action): ISearchReducer => {
  const { type, data } = action;
  switch (type) {
    case ARTISTS_SEARCH_TEXT_CHANGE: {
      return {
        ...state,
        artists: {
          ...state.artists,
          searchText: data,
        }
      }
    }
    case ARTISTS_SEARCH_START: {
      return {
        ...state,
        artists: {
          ...state.artists,
          isLoading: true,
        }
      }
    }
    case ARTISTS_SEARCH_SUCCESS: {
      return {
        ...state,
        artists: {
          ...state.artists,
          results: data,
          isLoading: false,
        }
      }
    }
    default:
      return state;
  }
};

export default searchReducer;
