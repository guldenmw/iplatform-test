import { connect } from 'react-redux';
import { addArtist } from '../store/shortlist/actions';
import ArtistItem from '../components/Artists/ArtistItem';


const mapStateToProps = (state) => {
  return {
    shortlist: state.shortlist
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(addArtist(ownProps.name))
    }
  }
};

const AddArtistToShortlist = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistItem);

export default AddArtistToShortlist