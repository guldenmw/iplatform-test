import {AppState} from "../../core/store";

import {removeFavoritesArtist} from "../../core/store/favorites/actions";
import IMusicBrainzArtist from "../../core/store/search/musicbrainz/types/MusicBrainzArtistsResults";
import searchReleases from "../../core/store/search/musicbrainz/thunks/SearchReleases";
import {hideArtistReleases, showArtistReleases} from "../../core/store/search/musicbrainz/actions";


export const mapStateToProps = (state: AppState) => {
  const {
    musicBrainz: {
      releases,
      artists: {
        showReleases
      }
    }
  } = state;

  return {
    releases,
    showReleases
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    removeFromFavorites: (artist: IMusicBrainzArtist) => {
      dispatch(removeFavoritesArtist(artist));
    },

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
