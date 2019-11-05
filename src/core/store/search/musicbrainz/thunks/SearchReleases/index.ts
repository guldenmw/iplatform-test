import { releasesSearchStart, releasesSearchSuccess } from '../../actions';
import fetchMusicBrainzReleases from '../../api/SearchMusicBrainzReleases';

const searchReleases = (searchText: string) => {
  console.log("Searching for releases of id: ", searchText)
  return async (dispatch, getState) => {
    dispatch(releasesSearchStart()); // This will set your loading state

    try {
      const artistResults = await fetchMusicBrainzReleases(searchText);
      dispatch(releasesSearchSuccess(artistResults));

    } catch (ex) {
      console.error(ex);
      // dispatch(artistsSearchError(ex));
    }
  }
};

export default searchReleases;
