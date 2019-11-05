// import { addArtist } from '../../core/store/shortlist/actions';
// import { AppState } from '../../../core/store';

import {
  addShortlistItem,
  removeShortlistItem,
} from '../../core/store/shortlist/actions';

import IArtistResult from '../../core/store/search/types';

// export const mapStateToProps = (state: AppState) => {
//   return {
//     shortlist: state.shortlist
//   }
// };

export const mapDispatchToProps = (dispatch) => {
  return {
    addToShortlist: (shortlistItem: IArtistResult) => {
      dispatch(addShortlistItem(shortlistItem));
    },
    removeFromShortlist: (shortlistItem: IArtistResult) => {
      dispatch(removeShortlistItem(shortlistItem));
    },
  }
};
