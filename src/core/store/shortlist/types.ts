export const ADD_ARTIST= 'ADD_ARTIST';
export const REMOVE_ARTIST= 'REMOVE_ARTIST';

interface AddArtist{
  type: typeof ADD_ARTIST;
  artist: string;
}

interface RemoveArtist{
  type: typeof REMOVE_ARTIST;
  artist: string;
}

export type ActionTypes = AddArtist| RemoveArtist;
