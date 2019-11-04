export const ADD_ARTIST = 'ADD_ARTIST';
export const REMOVE_ARTIST = 'REMOVE_ARTIST';
export const ADD_RELEASE = 'ADD_RELEASE';
export const REMOVE_RELEASE = 'REMOVE_RELEASE';

export interface Release {
  artist: string;
  title: string;
  year: string;
  labels: string[];
  tracks: number;
  favorite?: boolean;
}

export interface Artist {
  name: string;
  releases: Release[];
}

interface AddArtist {
  type: typeof ADD_ARTIST
  artist: string
}

interface RemoveArtist {
  type: typeof REMOVE_ARTIST
  artist: string;
}

interface AddRelease {
  type: typeof ADD_RELEASE;
  release: Release;
}

interface RemoveRelease {
  type: typeof REMOVE_RELEASE;
  artist: string;
  release: Release;
}

export type ActionTypes = AddArtist| RemoveArtist| AddRelease| RemoveRelease;
