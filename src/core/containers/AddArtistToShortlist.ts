import { connect } from 'react-redux';
import { addArtistToShortlist } from '../actions';
import ArtistItem from '../components/ArtistItem';
import {AppState} from "../types";


const mapStateToProps = (state: AppState) => {
  return {
    shortlist: state.shortlist
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(addArtistToShortlist(ownProps.name))
    }
  }
};

const AddArtistToShortlist = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistItem);

export default AddArtistToShortlist