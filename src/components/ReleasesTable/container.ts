import { AppState } from '../../core/store';

export const mapStateToProps = (state: AppState) => {
  const {
    musicBrainz: {
      releases: {
        isLoading
      }
    }
  } = state;

  return {
    isLoading
  };
};
