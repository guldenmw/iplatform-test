import { AppState } from "../../core/store";

import searchReleases from "../../core/store/search/musicbrainz/thunks/SearchReleases";
import {hideArtistReleases, showArtistReleases} from "../../core/store/search/musicbrainz/actions";


export const mapStateToProps = (state: AppState) => {
  const {
    musicBrainz: {
      releases: {
        results
      },
      showReleases
    }
  } = state;

  return {
    releases: results,
    showReleases
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getReleases: (artistId: string) => {
      dispatch(searchReleases(artistId));
    },

    showArtistReleases: (artistId: string) => {
      dispatch(showArtistReleases(artistId))
    },

    hideArtistReleases: (artistId: string) => {
      dispatch(hideArtistReleases(artistId))
    }
  }
};
