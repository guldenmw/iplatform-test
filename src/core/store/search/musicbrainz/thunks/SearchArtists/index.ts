import { artistsReleasesSearchStart, artistsReleasesSearchSuccess } from '../../actions';
import fetchMusicBrainzArtists from '../../api/SearchMusicBrainzArtists';

const searchArtists = (searchText: string) => {
  return async (dispatch, getState) => {
    dispatch(artistsReleasesSearchStart()); // This will set your loading state

    try {
      const artistResults = await fetchMusicBrainzArtists(searchText);
      dispatch(artistsReleasesSearchSuccess(artistResults));

    } catch (ex) {
      console.error(ex);
      // dispatch(artistsSearchError(ex));
    }
  }
};

export default searchArtists;
