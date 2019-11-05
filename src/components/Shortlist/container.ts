import { AppState } from '../../core/store';
import { getShortlist } from '../../core/store/shortlist/selectors';
import { addShortlistItem } from '../../core/store/shortlist/actions';

import ILastFMArtist from "../../core/store/search/lastfm/types/LastFMArtistsResults";

export const mapStateToProps = (state: AppState) => {
  const shortlist = getShortlist(state);
  return { shortlist };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addArtist: (artist: ILastFMArtist) => {
      dispatch(addShortlistItem(artist))
    }
  }
};
