import { connect } from 'react-redux';
import { addArtistToFavorites } from '../actions';
import ArtistItem from '../components/ArtistItem';
import {AppState} from "../types";


const mapStateToProps = (state: AppState) => {
  return {
    favorites: state.favorites
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(addArtistToFavorites(ownProps.name))
    }
  }
};

const AddArtistToFavorites = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistItem);

export default AddArtistToFavorites