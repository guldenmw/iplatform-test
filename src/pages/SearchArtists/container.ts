import { AppState } from '../../core/store';

import { artistsSearchTextChange } from '../../core/store/search/lastfm/actions';
import searchArtists from '../../core/store/search/lastfm/thunks/SearchArtists';

export const mapStateToProps = (state: AppState) => {
  const {
    lastFM: {
      isLoading,
      results,
      searchText,
    },
    shortlist
  } = state;

  return {
    isLoading,
    results,
    searchText,
    shortlist
  };
};

export const mapDispatchToProps = dispatch => ({
  startSearch(searchText: string) {
    dispatch(searchArtists(searchText));
  },
  searchTextChange(searchText: string) {
    dispatch(artistsSearchTextChange(searchText))
  },
});
