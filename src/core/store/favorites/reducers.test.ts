import updateFavorites from './/reducers'
import {ADD_ARTIST, REMOVE_ARTIST, ADD_RELEASE, REMOVE_RELEASE} from './types';


const originalArtist = 'Artist Name 1';

const originalRelease = {
  artist: originalArtist,
  title: 'Release Title 1',
  year: '1992',
  labels: ['Some Label'],
  tracks: 9
};

const initialState = [
  {
    name: originalArtist,
    releases: [originalRelease]
  }
];

const newArtist = 'Artist Name 2';

const newReleaseSameArtist = {
  artist: originalArtist,
  title: 'Release Title 2',
  year: '1995',
  labels: ['Some Other Label'],
  tracks: 5
};

const newReleaseNewArtist = {
  artist: newArtist,
  title: 'Release Title 2',
  year: '1995',
  labels: ['Some Other Label'],
  tracks: 5
};

describe('artist favorites reducer', () => {
  it('should add new artist to favorites', () => {
    const initialState = [
      {
        name: originalArtist,
        releases: [originalRelease]
      }
    ];

    expect(
      updateFavorites(initialState, {
        type: ADD_ARTIST, artist: newArtist
      })

    ).toStrictEqual([
        {
          name: newArtist,
          releases: []
        },
        {
          name: originalArtist,
          releases: [originalRelease]
        }
      ]
    )
  });

  it('should not add a duplicate of original artist to favorites', () => {
    const initialState = [
      {
        name: originalArtist,
        releases: [originalRelease]
      }
    ];

    expect(
      updateFavorites(initialState, {
        type: ADD_ARTIST, artist: originalArtist
      })

    ).toStrictEqual([
        {
          name: originalArtist,
          releases: [originalRelease]
        }
      ]
    )
  });

  it('should remove original artist from favorites', () => {
    const initialState = [
      {
        name: originalArtist,
        releases: [originalRelease]
      }
    ];

    expect(
      updateFavorites(initialState, {
        type: REMOVE_ARTIST, artist: originalArtist
      })
    ).toStrictEqual([])
  });
});

describe('release favorites reducer', () => {
  it('should add new release to favorites under original artist', () => {
    const initialState = [
      {
        name: originalArtist,
        releases: [originalRelease]
      }
    ];

    expect(
      updateFavorites(initialState, {
        type: ADD_RELEASE, release: newReleaseSameArtist
      })
    ).toStrictEqual([
        {
          name: originalArtist,
          releases: [newReleaseSameArtist, originalRelease]
        }
      ]
    )
  });

  it('should add new release to favorites under new artist', () => {
    const initialState = [
      {
        name: originalArtist,
        releases: [originalRelease]
      }
    ];

    expect(
      updateFavorites(initialState, {
        type: ADD_RELEASE, release: newReleaseNewArtist
      })
    ).toStrictEqual([
        {
          name: newArtist,
          releases: [newReleaseNewArtist]
        },
        {
          name: originalArtist,
          releases: [originalRelease]
        }
      ])
  });

  it('should not add duplicate original release to favorites under original artist', () => {
    const initialState = [
      {
        name: originalArtist,
        releases: [originalRelease]
      }
    ];

    expect(
      updateFavorites(initialState, {
        type: ADD_RELEASE, release: newReleaseSameArtist
      })
    ).toStrictEqual([
        {
          name: originalArtist,
          releases: [newReleaseSameArtist, originalRelease]
        }
      ]
    )
  });

  it('should remove original release from original artist in favorites', () => {
    const initialState = [
      {
        name: originalArtist,
        releases: [originalRelease]
      }
    ];

    expect(
      updateFavorites(initialState, {
        type: REMOVE_RELEASE, release: originalRelease, artist: originalArtist
      })
    ).toStrictEqual([
        {
          name: originalArtist,
          releases: []
        }
      ]
    )
  });
});
