// Declare action types
export const ARTISTS_RELEASES_SEARCH_TEXT_CHANGE = 'ARTISTS_RELEASES_SEARCH_TEXT_CHANGE';

export const RELEASES_SEARCH_START = 'RELEASES_SEARCH_START';
export const ARTISTS_RELEASES_SEARCH_START = 'ARTISTS_RELEASES_SEARCH_START';

export const RELEASES_SEARCH_SUCCESS = 'RELEASES_SEARCH_SUCCESS';
export const ARTISTS_RELEASES_SEARCH_SUCCESS = 'ARTISTS_RELEASES_SEARCH_SUCCESS';

export const SHOW_ARTIST_RELEASES= 'SHOW_ARTIST_RELEASES';
export const HIDE_ARTIST_RELEASES= 'HIDE_ARTIST_RELEASES';


export const releasesSearchStart = (data?) => {
  return {
    type: RELEASES_SEARCH_START, data
  }
};

export const releasesSearchSuccess = (data) => {
  return {
    type: RELEASES_SEARCH_SUCCESS, data
  }
};

export const artistsReleasesSearchTextChange = (data: string) => {
  return {
    type: ARTISTS_RELEASES_SEARCH_TEXT_CHANGE, data
  }
};

export const artistsReleasesSearchStart = (data?) => {
  return {
    type: ARTISTS_RELEASES_SEARCH_START, data
  }
};


export const artistsReleasesSearchSuccess = (data) => {
  return {
    type: ARTISTS_RELEASES_SEARCH_SUCCESS, data
  }
};

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