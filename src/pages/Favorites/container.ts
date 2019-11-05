import { connect } from 'react-redux';
import {removeArtist, removeRelease} from '../../core/store/favorites/actions';


export const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    handleRemoveArtist: (artist) => {
      dispatch(removeArtist(artist))
    }
  }
};
