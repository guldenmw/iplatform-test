import {AppState} from "../../core/store";

import {
  removeFavoritesArtist,
  hideFavoritesReleases,
  showFavoritesReleases
} from "../../core/store/favorites/actions";

import {IFavoritesArtist} from "../../core/store/favorites/types";


export const mapStateToProps = (state: AppState) => {
  const {
    favorites: {
      releases,
      showReleases,
      isLoading
    },
  } = state;

  return {
    releases,
    showReleases,
    isLoading
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    removeFromFavorites: (artist: IFavoritesArtist) => {
      dispatch(removeFavoritesArtist(artist));
    },

    showFavoritesReleases: (artistId: string) => {
      console.log(artistId);
      dispatch(showFavoritesReleases(artistId))
    },

    hideFavoritesReleases: (artistId: string) => {
      console.log(artistId);
      dispatch(hideFavoritesReleases(artistId))
    }
  }
};
