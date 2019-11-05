import { AppState } from '../../../';

const getShortList = (state: AppState) => {
  try {
    return state.shortlist;
  } catch (ex) {
    console.error(ex);
    return [];
  }
};

export default getShortList;
