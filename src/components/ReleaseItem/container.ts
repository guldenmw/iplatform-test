import {AppState} from "../../core/store";

import {removeFavoritesRelease} from "../../core/store/favorites/actions";
import IMusicBrainzRelease from "../../core/store/search/musicbrainz/types/MusicBrainzReleasesResults";


export const mapStateToProps = (state: AppState) => {
  const {
    musicBrainz: {
      releases
    }
  } = state;

  return {
    releases
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    removeFromFavorites: (release: IMusicBrainzRelease) => {
      dispatch(removeFavoritesRelease(release));
    }
  }
};
