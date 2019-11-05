import { connect } from 'react-redux';
import {addRelease, removeArtist, removeRelease} from '../store/favorites/actions';
import ArtistReleasesItem from "../../components/Releases/ArtistReleasesItem";


const mapDispatchToProps = (dispatch) => {
  return {
    handleRemoveArtist: (artist) => {
      dispatch(removeArtist(artist))
    },
    handleAddOrRemoveRelease: (release, remove=false) => {
      if (!remove) {
        dispatch(addRelease(release))
      } else {
        dispatch(removeRelease(release.artist, release.title))
      }
    }
  }
};

const ArtistReleasesItemContainer = connect(
  null,
  mapDispatchToProps
)(ArtistReleasesItem);

export default ArtistReleasesItemContainer