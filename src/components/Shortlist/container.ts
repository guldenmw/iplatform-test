import { AppState } from '../../core/store';

import ILastFMArtist from "../../core/store/search/lastfm/types/LastFMArtistsResults";
import { addFavoritesArtist, removeFavoritesArtist } from "../../core/store/favorites/actions";

export const mapStateToProps = (state: AppState) => {
  const {
    favorites: {
      artists
    },
    shortlist
  } = state;

  return {
    shortlist,
    favoriteArtists: artists
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addArtistToFavorites: (artist: ILastFMArtist) => {
      dispatch(addFavoritesArtist(artist))
    },

    removeArtistFromFavorites: (artist: ILastFMArtist) => {
      dispatch(removeFavoritesArtist(artist))
    }
  }
};
