import {AppState} from '../../core/store';

import {
  removeFavoritesArtist,
  hideFavoritesReleases,
  showFavoritesReleases
} from '../../core/store/favorites/actions';

import {IFavoritesArtist} from '../../core/store/favorites/types';


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
      dispatch(showFavoritesReleases(artistId))
    },

    hideFavoritesReleases: (artistId: string) => {
      dispatch(hideFavoritesReleases(artistId))
    }
  }
};
