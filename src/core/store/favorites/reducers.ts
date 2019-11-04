import {ActionTypes, Artist, ADD_ARTIST, REMOVE_ARTIST, ADD_RELEASE, REMOVE_RELEASE} from "./types";


const addReleaseToFavorites = (state, action) => {
  // make a copy of the object instead of mutating state directly
  const favorites = state.slice(0);

  // find the index to determine whether it already exists, if so, store it for later use
  const artistIndex = favorites.findIndex(art => art.name === action.release.artist);


  if (artistIndex > -1) {

    // this shouldn't really happen, but if the release has already been added, don't change anything
    if (favorites[artistIndex].releases.includes(action.release)) {
      return state
    }

    // add release to artist
    favorites[artistIndex].releases.unshift(action.release);

    return favorites

  } else {
    // if no index was found then simply add the new artist and releases to the front of the list
    const newRelease = {
      name: action.release.artist,
      releases: [action.release]
    };

    return [newRelease, ...state]
  }

};

const removeReleaseFromFavorites = (state, action) => {
  // make a copy of the object instead of mutating state directly
  const favorites = state.slice(0);

  // find the index to determine whether it already exists, if so, store it for later use
  const artistIndex = favorites.findIndex(art => art.name === action.artist);

  // this shouldn't really happen either, but better to be sure
  if (artistIndex === -1) {
    return state
  }
  // remove the release from the artist by it's title
  favorites[artistIndex].releases = favorites[artistIndex].releases.filter(release => release.title !== action.title);

  return favorites;
};

function updateFavorites(
  favoritesState = Array(),
  action: ActionTypes
): Artist[] {

  switch (action.type) {
    case ADD_ARTIST:

      // just to make sure we don't add duplicate entries
      if (favoritesState.find(art => art.name === action.artist)) {
        return favoritesState
      }

      const artist = {
        name: action.artist,
        releases: []
      };

      return [artist, ...favoritesState];

    case REMOVE_ARTIST:
      return [...favoritesState.filter((artist) => artist.name !== action.artist)];

    case ADD_RELEASE:
      return addReleaseToFavorites(favoritesState, action);

    case REMOVE_RELEASE:
      return removeReleaseFromFavorites(favoritesState, action);

    default:
      return favoritesState
  }
}
 export default updateFavorites;
