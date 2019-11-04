import { connect } from 'react-redux';
import {removeArtist, removeRelease} from '../store/favorites/actions';
import Favorites from "../components/Utility/Favorites";


const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRemoveArtist: (artist) => {
      dispatch(removeArtist(artist))
    }
  }
};

const ListFavorites = connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);

export default ListFavorites