import {
  ADD_FAVORITES_ARTIST,
  ADD_FAVORITES_RELEASE,
  REMOVE_FAVORITES_ARTIST,
  REMOVE_FAVORITES_RELEASE,
  SHOW_FAVORITE_RELEASES,
  HIDE_FAVORITE_RELEASES
} from '../actions';

import favouritesReducer, {IFavoritesReducerState} from './';
import {
  newArtist,
  newRelease,
  originalArtist,
  originalRelease
} from "../../testFixtures";


const initialState: IFavoritesReducerState = {
  releases: [
    originalRelease
  ],
  artists: [
    originalArtist
  ],
  showReleases: [originalArtist.mbid],
  isLoading: [originalRelease.id]
};


describe('artist favorites reducer', () => {
  it('should add new artist to favorites', () => {
    const expectedState = {
      releases: [originalRelease],
      artists: [
        originalArtist,
        {
          name: newArtist.name,
          mbid: newArtist.mbid,
        }
      ],
      showReleases: [originalArtist.mbid],
      isLoading: [originalRelease.id]
    };

    expect(
      favouritesReducer(initialState, {
        type: ADD_FAVORITES_ARTIST, data: newArtist
      })

    ).toStrictEqual(expectedState)
  });

  it('should not add a duplicate of original artist to favorites', () => {
    expect(
      favouritesReducer(initialState, {
        type: ADD_FAVORITES_ARTIST, data: originalArtist
      })

    ).toStrictEqual(initialState)
  });

  it('should remove original artist from favorites', () => {
    const expectedState = {
      releases: [originalRelease],
      artists: [],
      showReleases: [originalArtist.mbid],
      isLoading: [originalRelease.id]
    };

    expect(
      favouritesReducer(initialState, {
        type: REMOVE_FAVORITES_ARTIST, data: originalArtist
      })

    ).toStrictEqual(expectedState)
  });
});


describe('release favorites reducer', () => {
  it('should add new release to favorites', () => {
    const expectedState = {
      releases: [
        originalRelease,
        newRelease
      ],
      artists: [originalArtist],
      showReleases: [originalArtist.mbid],
      isLoading: [originalRelease.id]
    };

    expect(
      favouritesReducer(initialState, {
        type: ADD_FAVORITES_RELEASE, data: newRelease
      })

    ).toStrictEqual(expectedState)
  });

  it('should not add duplicate original release to favorites', () => {
    expect(
      favouritesReducer(initialState, {
        type: ADD_FAVORITES_RELEASE, data: originalRelease
      })

    ).toStrictEqual(initialState)
  });

  it('should remove original release from favorites', () => {
    const expectedState = {
      releases: [],
      artists: [originalArtist],
      showReleases: [originalArtist.mbid],
      isLoading: [originalRelease.id]
    };

    expect(
      favouritesReducer(initialState, {
        type: REMOVE_FAVORITES_RELEASE, data: originalRelease
      })

    ).toStrictEqual(expectedState)
  });
});

describe('showReleases favorites reducer', () => {
  it('should add new artist mbid to showReleases', () => {
    const expectedState = {
      releases: [originalRelease],
      artists: [originalArtist],
      showReleases: [
        originalArtist.mbid,
        newArtist.mbid,
      ],
      isLoading: [originalRelease.id]
    };

    expect(
      favouritesReducer(initialState, {
        type: SHOW_FAVORITE_RELEASES, data: newArtist.mbid
      })

    ).toStrictEqual(expectedState)
  });

  it('should not add duplicate of original artist mbid to showReleases', () => {
    expect(
      favouritesReducer(initialState, {
        type: SHOW_FAVORITE_RELEASES, data: originalArtist.mbid
      })

    ).toStrictEqual(initialState)
  });

  it('should remove original artist mbid from showReleases', () => {
    const expectedState = {
      releases: [originalRelease],
      artists: [originalArtist],
      showReleases: [],
      isLoading: [originalRelease.id]
    };

    expect(
      favouritesReducer(initialState, {
        type: HIDE_FAVORITE_RELEASES, data: originalArtist.mbid
      })

    ).toStrictEqual(expectedState)
  });
});

