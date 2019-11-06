import updateShortlist from './'
import { ADD_SHORTLIST_ITEM, REMOVE_SHORTLIST_ITEM } from '../actions';
import {newArtist, originalArtist, originalArtistComplete} from "../../testFixtures";


describe('artist shortlist reducer', () => {
  it('should add new artist to shortlist', () => {

    expect(
      updateShortlist([originalArtistComplete], {
        type: ADD_SHORTLIST_ITEM, data: newArtist
      })
    ).toStrictEqual([newArtist, originalArtistComplete])
  });

  it('should not add duplicate original artist to shortlist', () => {
    expect(
      updateShortlist([originalArtistComplete], {
        type: ADD_SHORTLIST_ITEM, data: originalArtistComplete
      })
    ).toStrictEqual([originalArtistComplete])
  });

  it('should remove original artist from shortlist', () => {
    expect(
      updateShortlist([originalArtistComplete], {
        type: REMOVE_SHORTLIST_ITEM, data: originalArtistComplete
      })
    ).toStrictEqual([])
  });
});
