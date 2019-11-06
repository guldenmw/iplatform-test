import {AppState} from "../../core/store";


export const mapStateToProps = (state: AppState) => {
  const {
    favorites: {
      artists
    }
  } = state;
  console.log(artists);

  return {
    favoriteArtists: artists
  }
};
