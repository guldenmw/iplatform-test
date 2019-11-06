import {AppState} from "../../core/store";

import {removeFavoritesArtist} from "../../core/store/favorites/actions";
import IMusicBrainzArtist from "../../core/store/search/musicbrainz/types/MusicBrainzArtistsResults";
import {hideArtistReleases, showArtistReleases} from "../../core/store/search/musicbrainz/actions";


export const mapStateToProps = (state: AppState) => {
  const {
    favorites: {
      releases,
      showReleases
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

    showArtistReleases: (artistId: string) => {
      dispatch(showArtistReleases(artistId))
    },

    hideArtistReleases: (artistId: string) => {
      dispatch(hideArtistReleases(artistId))
    }
  }
};
