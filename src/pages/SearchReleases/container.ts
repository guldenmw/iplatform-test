import {AppState} from "../../core/store";
import { artistsReleasesSearchTextChange } from '../../core/store/search/musicbrainz/actions';

import searchReleasesArtists from "../../core/store/search/musicbrainz/thunks/SearchArtists";

export const mapStateToProps = (state: AppState) => {
  const {
    musicBrainz: {
      artists: {
        isLoading,
        results,
        searchText
      }
    }
  } = state;

  return {
    isLoading,
    results,
    searchText
  };
};

export const mapDispatchToProps = dispatch => ({
  startSearch(searchText: string) {
    dispatch(searchReleasesArtists(searchText));
  },

  searchTextChange(searchText: string) {
    dispatch(artistsReleasesSearchTextChange(searchText))
  }
});