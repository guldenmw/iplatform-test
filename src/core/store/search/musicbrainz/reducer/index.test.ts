import musicBrainzReducer from './'

import {
  ARTISTS_RELEASES_SEARCH_START,
  ARTISTS_RELEASES_SEARCH_SUCCESS,
  ARTISTS_RELEASES_SEARCH_TEXT_CHANGE,
  RELEASES_SEARCH_START,
  RELEASES_SEARCH_SUCCESS,
  SHOW_ARTIST_RELEASES,
  HIDE_ARTIST_RELEASES
} from '../actions';

import { IMusicBrainzSearchReducer } from './'
import {newArtist, newRelease, originalArtist, originalRelease} from "../../../testFixtures";


const initialState: IMusicBrainzSearchReducer = {
  artists: {
    searchText: '',
    results: [],
    isLoading: false,
  },

  releases: {
    searchText: '',
    results: [],
    isLoading: [originalArtist.mbid]
  },

  showReleases: [originalArtist.mbid]
};

describe('musicbrainz artist search reducer', () => {
  it('should update searchText', () => {
    const newSearchText = "New Search Text";

    const expectedState = {
      artists: {
        searchText: newSearchText,
        results: [],
        isLoading: false,
      },

      releases: {
        searchText: '',
        results: [],
        isLoading: [originalArtist.mbid]
      },

      showReleases: [originalArtist.mbid]
    };

    expect(
      musicBrainzReducer(initialState, {
        type: ARTISTS_RELEASES_SEARCH_TEXT_CHANGE, data: newSearchText
      })
    ).toStrictEqual(expectedState)
  });

  it('should update isLoading to true on artist search start', () => {
    const expectedState = {
      artists: {
        searchText: '',
        results: [],
        isLoading: true,
      },

      releases: {
        searchText: '',
        results: [],
        isLoading: [originalArtist.mbid]
      },

      showReleases: [originalArtist.mbid]
    };

    expect(
      musicBrainzReducer(initialState, {
        type: ARTISTS_RELEASES_SEARCH_START, data: {}
      })
    ).toStrictEqual(expectedState)
  });

  it('should update results to passed data', () => {
    const expectedState = {
      artists: {
        searchText: '',
        results: [originalArtist, newArtist],
        isLoading: false,
      },

      releases: {
        searchText: '',
        results: [],
        isLoading: [originalArtist.mbid]
      },

      showReleases: [originalArtist.mbid]
    };

    expect(
      musicBrainzReducer(initialState, {
        type: ARTISTS_RELEASES_SEARCH_SUCCESS, data: [originalArtist, newArtist]
      })

    ).toStrictEqual(expectedState)
  });
});

describe('musicbrainz release search reducer', () => {
  it('should add new release id to isLoading', () => {
    const expectedState = {
      artists: {
        searchText: '',
        results: [],
        isLoading: false,
      },

      releases: {
        searchText: '',
        results: [],
        isLoading: [originalArtist.mbid, newArtist.mbid]
      },

      showReleases: [originalArtist.mbid]
    };

    expect(
      musicBrainzReducer(initialState, {
        type: RELEASES_SEARCH_START, data: newArtist.mbid
      })
    ).toStrictEqual(expectedState)
  });

  it('should update results to passed data', () => {
    const expectedState = {
      artists: {
        searchText: '',
        results: [],
        isLoading: false,
      },

      releases: {
        searchText: '',
        results: [originalRelease, newRelease],
        isLoading: []
      },

      showReleases: [originalArtist.mbid]
    };

    const data = {
      artistId: originalArtist.mbid,
      results: [originalRelease, newRelease]
    };

    expect(
      musicBrainzReducer(initialState, {
        type: RELEASES_SEARCH_SUCCESS, data: data
      })

    ).toStrictEqual(expectedState)
  });
});

describe('showReleases musicbrainz reducer', () => {
  it('should add new artist mbid to showReleases', () => {
    const expectedState = {
      artists: {
        searchText: '',
        results: [],
        isLoading: false,
      },

      releases: {
        searchText: '',
        results: [],
        isLoading: [originalArtist.mbid]
      },

      showReleases: [originalArtist.mbid, newArtist.mbid]
    };

    expect(
      musicBrainzReducer(initialState, {
        type: SHOW_ARTIST_RELEASES, data: newArtist.mbid
      })

    ).toStrictEqual(expectedState)
  });

  it('should not add duplicate of original artist mbid to showReleases', () => {
    expect(
      musicBrainzReducer(initialState, {
        type: SHOW_ARTIST_RELEASES, data: originalArtist.mbid
      })

    ).toStrictEqual(initialState)
  });

  it('should remove original artist mbid from showReleases', () => {
    const expectedState = {
      artists: {
        searchText: '',
        results: [],
        isLoading: false,
      },

      releases: {
        searchText: '',
        results: [],
        isLoading: [originalArtist.mbid]
      },

      showReleases: []
    };

    expect(
      musicBrainzReducer(initialState, {
        type: HIDE_ARTIST_RELEASES, data: originalArtist.mbid
      })

    ).toStrictEqual(expectedState)
  });
});
