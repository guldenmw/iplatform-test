export const ARTISTS_SEARCH_TEXT_CHANGE = 'ARTISTS_SEARCH_TEXT_CHANGE';
export const ARTISTS_SEARCH_START = 'ARTISTS_SEARCH_START';
export const ARTISTS_SEARCH_SUCCESS = 'ARTISTS_SEARCH_SUCCESS';


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
