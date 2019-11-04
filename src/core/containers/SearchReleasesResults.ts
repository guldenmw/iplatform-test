import { connect } from 'react-redux';
import {addRelease, removeArtist, removeRelease} from '../store/favorites/actions';
import ReleaseItems from "../components/ReleaseItems";


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleRemoveArtist: (artist) => {
      dispatch(removeArtist(artist))
    },
    handleAddRelease: (release) => {
      dispatch(addRelease(release))
    },
    handleRemoveRelease: (artist, release) => {
      dispatch(removeRelease(artist, release))
    }
  }
};

const SearchReleasesResults = connect(
  mapDispatchToProps
)(ReleaseItems);

export default SearchReleasesResults