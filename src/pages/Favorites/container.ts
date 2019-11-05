import { connect } from 'react-redux';
import {removeFavoritesArtist} from '../../core/store/favorites/actions';
import IMusicBrainzArtist from "../../core/store/search/musicbrainz/types/MusicBrainzArtistsResults";


export const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    handleRemoveArtist: (artist: IMusicBrainzArtist) => {
      dispatch(removeFavoritesArtist(artist))
    }
  }
};
