import { artistsSearchStart, artistsSearchSuccess } from '../../actions';
import fetchLastfmArtists from '../../api/SearchLastfmArtists';

const searchArtists = (searchText: string) => {
  return async (dispatch, getState) => {
    dispatch(artistsSearchStart()); // This will set your loading state
    try {
      const artistResults = await fetchLastfmArtists(searchText);
      dispatch(artistsSearchSuccess(artistResults));
    } catch (ex) {
      console.error(ex);
      // dispatch(artistsSearchError(ex));
    }
  }
};

export default searchArtists;
