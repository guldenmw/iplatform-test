import updateShortlist from './reducers'
import {ADD_ARTIST, REMOVE_ARTIST} from './types';


const originalArtist = 'Artist Name 1';

const newArtist = 'Artist Name 2';


describe('artist shortlist reducer', () => {
  it('should add new artist to shortlist', () => {

    expect(
      updateShortlist([originalArtist], {
        type: ADD_ARTIST, artist: newArtist
      })
    ).toStrictEqual([newArtist, originalArtist])
  });

  it('should not add duplicate original artist to shortlist', () => {
    expect(
      updateShortlist([originalArtist], {
        type: ADD_ARTIST, artist: originalArtist
      })
    ).toStrictEqual([originalArtist])
  });

  it('should remove original artist from shortlist', () => {
    expect(
      updateShortlist([originalArtist], {
        type: REMOVE_ARTIST, artist: originalArtist
      })
    ).toStrictEqual([])
  });
});
