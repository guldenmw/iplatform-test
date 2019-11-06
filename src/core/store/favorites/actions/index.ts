export const ADD_FAVORITES_ARTIST = 'ADD_FAVORITES_ARTIST';
export const REMOVE_FAVORITES_ARTIST = 'REMOVE_FAVORITES_ARTIST';

export const ADD_FAVORITES_RELEASE = 'ADD_FAVORITES_RELEASE';
export const REMOVE_FAVORITES_RELEASE = 'REMOVE_FAVORITES_RELEASE';

export const SHOW_ARTIST_RELEASES= 'SHOW_ARTIST_RELEASES';
export const HIDE_ARTIST_RELEASES= 'HIDE_ARTIST_RELEASES';


export const addFavoritesArtist = (data?: any) => ({
  type: ADD_FAVORITES_ARTIST, data,
});

export const removeFavoritesArtist = (data?: any) => ({
  type: REMOVE_FAVORITES_ARTIST, data,
});

export const addFavoritesRelease = (data?: any) => ({
  type: ADD_FAVORITES_RELEASE, data,
});

export const removeFavoritesRelease = (data?: any) => ({
  type: REMOVE_FAVORITES_RELEASE, data,
});

export const showArtistReleases = (data?) => {
  return {
    type: SHOW_ARTIST_RELEASES, data
  }
};

export const hideArtistReleases = (data?) => {
  return {
    type: HIDE_ARTIST_RELEASES, data
  }
};
