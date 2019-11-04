import { connect } from 'react-redux';
import SearchReleases from "../components/SearchReleases";


const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
};

const SearchReleasesContainer = connect(
  mapStateToProps,
)(SearchReleases);

export default SearchReleasesContainer