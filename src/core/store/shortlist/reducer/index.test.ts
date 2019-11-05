export default {};
// import updateShortlist from './'
// import {ADD_SHORTLIST_ITEM, REMOVE_SHORTLIST_ITEM} from '../actions';
//
//
// const originalArtist = {
//   mbid: '343tg2234f',
//   name: 'Artist Name 1',
//   listeners: 'kjdnfls',
//   streamable: '0',
//   url: 'fasdfadv',
//   image: [
//   ]
// };
//
// const newArtist = {
//   mbid: '343tg2234f',
//   name: 'Artist Name 2',
//   listeners: 'kjdnfls',
//   streamable: '0',
//   url: 'fasdfadv',
//   image: [
//     {}
//   ]
// };
//
//
// describe('artist shortlist reducer', () => {
//   it('should add new artist to shortlist', () => {
//
//     expect(
//       updateShortlist([originalArtist], {
//         type: ADD_SHORTLIST_ITEM, artist: newArtist
//       })
//     ).toStrictEqual([newArtist, originalArtist])
//   });
//
//   it('should not add duplicate original artist to shortlist', () => {
//     expect(
//       updateShortlist([originalArtist], {
//         type: ADD_SHORTLIST_ITEM, artist: originalArtist
//       })
//     ).toStrictEqual([originalArtist])
//   });
//
//   it('should remove original artist from shortlist', () => {
//     expect(
//       updateShortlist([originalArtist], {
//         type: REMOVE_SHORTLIST_ITEM, artist: originalArtist
//       })
//     ).toStrictEqual([])
//   });
// });
