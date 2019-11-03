import { connect } from 'react-redux';
import { removeArtistFromFavorites } from '../actions';
import {AppState} from "../types";
import Favorites from "../components/Favorites";


const mapStateToProps = (state: AppState) => {
  return {
    favorites: state.favorites
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleRemoveArtist: () => {
      dispatch(removeArtistFromFavorites(ownProps.name))
    }
  }
};

const ListFavorites = connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);

export default ListFavorites