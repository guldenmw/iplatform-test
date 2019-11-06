import {AppState} from "../../core/store";

import {
  addShortlistItem,
  removeShortlistItem,
} from '../../core/store/shortlist/actions';

import ILastFMArtist from '../../core/store/search/lastfm/types/LastFMArtistsResults';


export const mapStateToProps = (state: AppState) => {
  return {
    shortlist: state.shortlist
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addToShortlist: (shortlistItem: ILastFMArtist) => {
      dispatch(addShortlistItem(shortlistItem));
    },
    removeFromShortlist: (shortlistItem: ILastFMArtist) => {
      dispatch(removeShortlistItem(shortlistItem));
    },
  }
};
