import lastFMReducer from './'

import {
  ARTISTS_SEARCH_TEXT_CHANGE,
  ARTISTS_SEARCH_START,
  ARTISTS_SEARCH_SUCCESS
} from '../actions';

import { ILastFMSearchReducer } from './'
import { newArtist, originalArtist } from "../../../testFixtures";


const initialState: ILastFMSearchReducer = {
  searchText: '',
  results: [],
  isLoading: false
};

describe('lastfm search reducer', () => {
  it('should update searchText', () => {
    const newSearchText = "New Search Text";

    const expectedState = {
      searchText: newSearchText,
      results: [],
      isLoading: false
    };

    expect(
      lastFMReducer(initialState, {
        type: ARTISTS_SEARCH_TEXT_CHANGE, data: newSearchText
      })
    ).toStrictEqual(expectedState)
  });

  it('should update isLoading to true on artist search start', () => {
    const expectedState = {
      searchText: '',
      results: [],
      isLoading: true
    };

    expect(
      lastFMReducer(initialState, {
        type: ARTISTS_SEARCH_START, data: {}
      })
    ).toStrictEqual(expectedState)
  });

  it('should update results to passed data', () => {
    const expectedState = {
      searchText: '',
      results: [originalArtist, newArtist],
      isLoading: false
    };

    expect(
      lastFMReducer(initialState, {
        type: ARTISTS_SEARCH_SUCCESS, data: [originalArtist, newArtist]
      })

    ).toStrictEqual(expectedState)
  });
});
