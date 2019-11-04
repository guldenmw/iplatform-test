import { connect } from 'react-redux';
import { addArtist } from '../store/favorites/actions';
import ArtistItem from '../components/ArtistItem';


const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(addArtist(ownProps.name))
    }
  }
};

const AddArtistToFavorites = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistItem);

export default AddArtistToFavorites