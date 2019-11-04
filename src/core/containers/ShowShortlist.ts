import { connect } from 'react-redux';
import {addArtist} from '../store/favorites/actions';
import Shortlist from '../components/Utility/Shortlist';


const mapStateToProps = (state) => {
  return {
    artists: state.updateShortlistArtists.shortlist.artists
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(addArtist(ownProps.name))
    }
  }
};

const ShowShortlist = connect(
  mapStateToProps,
  mapDispatchToProps
)(Shortlist);

export default ShowShortlist