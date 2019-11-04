import { connect } from 'react-redux';
import {removeArtist, removeRelease} from '../store/favorites/actions';
import Favorites from "../components/Favorites";


const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleRemoveArtist: () => {
      dispatch(removeArtist(ownProps.name))
    },
    handleRemoveRelease: () => {
      dispatch(removeRelease(ownProps.artist, ownProps.title))
    }
  }
};

const ListFavorites = connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);

export default ListFavorites