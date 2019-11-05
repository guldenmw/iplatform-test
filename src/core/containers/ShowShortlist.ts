import { connect } from 'react-redux';
import {addArtist} from '../store/favorites/actions';
import Shortlist from '../../components/Shortlist';


const mapStateToProps = (state) => {
  return {
    artists: state.updateShortlistArtists.shortlist.artists
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (artist) => {
      dispatch(addArtist(artist))
    }
  }
};

const ShowShortlist = connect(
  mapStateToProps,
  mapDispatchToProps
)(Shortlist);

export default ShowShortlist