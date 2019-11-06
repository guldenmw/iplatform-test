import IMusicBrainzRelease from "../../search/musicbrainz/types/MusicBrainzReleasesResults";

export const ADD_FAVORITES_ARTIST = 'ADD_FAVORITES_ARTIST';
export const REMOVE_FAVORITES_ARTIST = 'REMOVE_FAVORITES_ARTIST';

export const ADD_FAVORITES_RELEASE = 'ADD_FAVORITES_RELEASE';
export const REMOVE_FAVORITES_RELEASE = 'REMOVE_FAVORITES_RELEASE';

export const SHOW_FAVORITE_RELEASES= 'SHOW_FAVORITE_RELEASES';
export const HIDE_FAVORITE_RELEASES= 'HIDE_FAVORITE_RELEASES';


export const addFavoritesArtist = (data?: any) => ({
  type: ADD_FAVORITES_ARTIST, data,
});

export const removeFavoritesArtist = (data?: any) => ({
  type: REMOVE_FAVORITES_ARTIST, data,
});

export const addFavoritesRelease = (data?: IMusicBrainzRelease) => ({
  type: ADD_FAVORITES_RELEASE, data,
});

export const removeFavoritesRelease = (data?: IMusicBrainzRelease) => ({
  type: REMOVE_FAVORITES_RELEASE, data,
});

export const showFavoritesReleases = (data?) => {
  return {
    type: SHOW_FAVORITE_RELEASES, data
  }
};

export const hideFavoritesReleases = (data?) => {
  return {
    type: HIDE_FAVORITE_RELEASES, data
  }
};
