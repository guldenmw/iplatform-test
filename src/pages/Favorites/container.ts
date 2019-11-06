import {AppState} from "../../core/store";


export const mapStateToProps = (state: AppState) => {
  const {
    favorites: {
      artists
    }
  } = state;

  return {
    favoriteArtists: artists
  }
};
