import {ActionTypes, ADD_ARTIST, REMOVE_ARTIST} from "./types";


function updateShortlist(
  shortlistState = Array(),
  action: ActionTypes
): string[] {

  switch (action.type) {
    case ADD_ARTIST:
      if (shortlistState.includes(action.artist)) {
        return shortlistState
      } else {

        return [action.artist, ...shortlistState]
      }

    case REMOVE_ARTIST:
      return [...shortlistState.filter((name) => name !== action.artist)];

    default:
      return shortlistState
  }
}

export default updateShortlist;