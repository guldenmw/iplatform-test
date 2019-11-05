// Declare action types
export const RELEASES_SEARCH_TEXT_CHANGE = 'RELEASES_SEARCH_TEXT_CHANGE';
export const ARTISTS_SEARCH_TEXT_CHANGE = 'ARTISTS_SEARCH_TEXT_CHANGE';

export const RELEASES_SEARCH_SUCCESS = 'RELEASES_SEARCH_SUCCESS';
export const ARTISTS_SEARCH_SUCCESS = 'ARTISTS_SEARCH_SUCCESS';
export const ARTISTS_SEARCH_START = 'ARTISTS_SEARCH_START';


export const releasesSearchTextChange = (data: string) => {
  return {
    type: RELEASES_SEARCH_TEXT_CHANGE, data
  }
};

export const artistsSearchTextChange = (data: string) => {
  return {
    type: ARTISTS_SEARCH_TEXT_CHANGE, data
  }
};

export const artistsSearchStart = (data?) => {
  return {
    type: ARTISTS_SEARCH_START, data
  }
};


export const artistsSearchSuccess = (data) => {
  return {
    type: ARTISTS_SEARCH_SUCCESS, data
  }
};
