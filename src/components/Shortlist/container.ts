import { AppState } from '../../core/store';
import { getShortlist } from '../../core/store/shortlist/selectors';
import { addShortlistItem } from '../../core/store/shortlist/actions';

import IArtistResult from '../../core/store/search/types';

export const mapStateToProps = (state: AppState) => {
  const shortlist = getShortlist(state);
  return { shortlist };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addArtist: (artist: IArtistResult) => {
      dispatch(addShortlistItem(artist))
    }
  }
};
