import {
  AppState,
} from '../../core/store';

import { artistsSearchTextChange } from '../../core/store/search/actions';
import searchArtists from '../../core/store/search/thunks/SearchArtists';

export const mapStateToProps = (state: AppState) => {
  const {
    search: {
      artists: {
        isLoading,
        results,
        searchText,
      }
    }
  } = state;

  return {
    isLoading,
    results,
    searchText,
  };
};

export const mapDispatchToProps = dispatch => ({
  startSearch(searchText: string) {
    console.log('searching artists!');
    dispatch(searchArtists(searchText));
  },
  searchTextChange(searchText: string) {
    dispatch(artistsSearchTextChange(searchText))
  },
});
