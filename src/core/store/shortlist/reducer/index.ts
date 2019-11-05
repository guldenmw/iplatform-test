import {
  ADD_SHORTLIST_ITEM,
  REMOVE_SHORTLIST_ITEM,
} from '../actions'
import ILastFMArtist from "../../search/lastfm/types/LastFMArtistsResults";


const initialState: ILastFMArtist[] = [];

export default (state = initialState, action: { type: string, data: ILastFMArtist }) => {
  const { type, data } = action;
  switch(type) {
    case ADD_SHORTLIST_ITEM: {
      // Don't add to the shortlist if the item's ID already exists
      if (state.some(item => item.mbid === data.mbid)) {
        return state;
      }
      return [
        ...state,
        data,
      ];
    }
    case REMOVE_SHORTLIST_ITEM: {
      const { mbid } = data;
      return state.filter(item => item.mbid !== mbid);
    }
    default:
      return state;
  }
}
