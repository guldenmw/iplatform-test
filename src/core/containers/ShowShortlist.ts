import { connect } from 'react-redux';
import {addArtistToFavorites} from '../actions';
import Shortlist from '../components/Shortlist';
import {AppState} from "../types";


const mapStateToProps = (state) => {
  return {
    artists: state.updateShortlistArtists.shortlist.artists
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(addArtistToFavorites(ownProps.name))
    }
  }
};

const ShowShortlist = connect(
  mapStateToProps,
  mapDispatchToProps
)(Shortlist);

export default ShowShortlist