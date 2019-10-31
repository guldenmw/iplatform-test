import * as reducers from './reducers'
import * as types from './types';

const originalArtist = {
  id: '678ad54378fe6a427163dfa65957044ce9add7f1',
  name: 'Artist Name 1',
  image: '/some/url/'
};

const originalRelease = {
  id: '7a9fcb0b988f2c28bba235a5521ad295fb8d28d1',
  artist: 'Artist Name 1',
  title: 'Release Title 1',
  year: '1992',
  label: 'Some Label',
  tracks: 9
};

const initialState: types.AppState = {
  favorites: {
    artists: [
      originalArtist
    ],
    releases: [
      originalRelease
    ]
  },
  shortlist: {
    artists: [
      originalArtist
    ]
  }
};

const newArtist = {
  id: '494f8cd3491e6eda5743f467a30370bb2a5f45ff',
  name: 'Artist Name 2',
  image: '/some/other/url/'
};

const newRelease = {
  id: '0d10c006c1d1d0a11885306c4ef820d81fdc7519',
  artist: 'Artist Name 2',
  title: 'Release Title 2',
  year: '1995',
  label: 'Some Other Label',
  tracks: 5
};

describe('artist favorites reducer', () => {
  it('should add new artist to favorites', () => {
    expect(
      reducers.updateFavoriteArtists(initialState, {
        type: types.ADD_ARTIST_TO_FAVORITES, artist: newArtist
      })
    ).toStrictEqual({
      favorites: {
        releases: [originalRelease],
        artists: [newArtist, originalArtist]
      },
      shortlist: {
        artists: [originalArtist]
      }

    })
  });

  it('should remove original artist from favorites', () => {
    expect(
      reducers.updateFavoriteArtists(initialState, {
        type: types.REMOVE_ARTIST_FROM_FAVORITES, artist: originalArtist
      })
    ).toStrictEqual({
      favorites: {
        artists: [],
        releases: [originalRelease]
      },
      shortlist: {
        artists: [originalArtist]
      }

    })
  });
});

describe('artist shortlist reducer', () => {
  it('should add new artist to shortlist', () => {
    expect(
      reducers.updateShortlistArtists(initialState, {
        type: types.ADD_ARTIST_TO_SHORTLIST, artist: newArtist
      })
    ).toStrictEqual({
      shortlist: {
        artists: [newArtist, originalArtist]
      },
      favorites: {
        artists: [originalArtist],
        releases: [originalRelease]
      }

    })
  });

  it('should remove original artist from shortlist', () => {
    expect(
      reducers.updateShortlistArtists(initialState, {
        type: types.REMOVE_ARTIST_FROM_SHORTLIST, artist: originalArtist
      })
    ).toStrictEqual({
      shortlist: {
        artists: []
      },
      favorites: {
        artists: [originalArtist],
        releases: [originalRelease]
      }

    })
  });
});

describe('release favorites reducer', () => {
  it('should add new release to favorites', () => {
    expect(
      reducers.updateFavoriteReleases(initialState, {
        type: types.ADD_RELEASE_TO_FAVORITES, release: newRelease
      })
    ).toStrictEqual({
      favorites: {
        artists: [originalArtist],
        releases: [newRelease, originalRelease]
      },
      shortlist: {
        artists: [originalArtist]
      }

    })
  });

  it('should remove original release from favorites', () => {
    expect(
      reducers.updateFavoriteReleases(initialState, {
        type: types.REMOVE_RELEASE_FROM_FAVORITES, release: originalRelease
      })
    ).toStrictEqual({
      favorites: {
        artists: [originalArtist],
        releases: []
      },
      shortlist: {
        artists: [originalArtist]
      }

    })
  });
});
