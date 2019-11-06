import { AppState } from '../../core/store';

import { addFavoritesRelease, removeFavoritesRelease } from '../../core/store/favorites/actions';
import IMusicBrainzRelease from '../../core/store/search/musicbrainz/types/MusicBrainzReleasesResults';


export const mapStateToProps = (state: AppState, ownProps) => {
  const {
    favorites: {
      releases
    }
  } = state;

  return {
    isFavorite: releases.some(item => item.id === ownProps.item.id)
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {

    addToFavorites: (release: IMusicBrainzRelease) => {
      dispatch(addFavoritesRelease(release));
    },

    removeFromFavorites: (release: IMusicBrainzRelease) => {
      dispatch(removeFavoritesRelease(release));
    }
  }
};
