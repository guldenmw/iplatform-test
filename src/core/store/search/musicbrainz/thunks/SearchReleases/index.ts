import { releasesSearchStart, releasesSearchSuccess } from '../../actions';
import fetchMusicBrainzReleases from '../../api/SearchMusicBrainzReleases';

const searchReleases = (searchText: string) => {
  return async (dispatch, getState) => {
    dispatch(releasesSearchStart(searchText)); // This will set your loading state

    try {
      const releasesResults = await fetchMusicBrainzReleases(searchText);
      dispatch(releasesSearchSuccess({
        artistId: searchText,
        results: releasesResults
      }));

    } catch (ex) {
      console.error(ex);
      // dispatch(artistsSearchError(ex));
    }
  }
};

export default searchReleases;
