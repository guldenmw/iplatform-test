import {
  ARTISTS_SEARCH_START,
  ARTISTS_SEARCH_SUCCESS,
  ARTISTS_SEARCH_TEXT_CHANGE
} from '../actions';

import ILastFMArtist from '../types/LastFMArtistsResults';

interface ISearchReducer {
  searchText: string;
  results: ILastFMArtist[];
  isLoading: boolean;
}

const initialState: ISearchReducer = {
  searchText: '',
  results: [],
  isLoading: false
};


const lastFMReducer = (state: ISearchReducer = initialState, action): ISearchReducer => {
  const { type, data } = action;
  switch (type) {
    case ARTISTS_SEARCH_TEXT_CHANGE: {
      return {
        ...state,
        searchText: data
      }
    }

    case ARTISTS_SEARCH_START: {
      return {
        ...state,
        isLoading: true
      }
    }

    case ARTISTS_SEARCH_SUCCESS: {
      return {
        ...state,
        results: data,
        isLoading: false
      }
    }

    default:
      return state;
  }
};

export default lastFMReducer;
