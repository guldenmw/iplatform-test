
export interface Artist {
    id: string;
    name: string;
}

export interface Release {
    id: string;
    artist: string;
    title: string;
    year: string;
    label: string;
    tracks: number;
}

export interface AppState {
    favorites: Favorites;
    shortlist: ShortList;
}

export interface ShortList {
    artists: Artist[];
}

export interface Favorites {
    artists: Artist[];
    releases: Release[];
}

// Artist Favorites actions
export const ADD_ARTIST_TO_FAVORITES = 'ADD_ARTIST_TO_FAVORITES';
export const REMOVE_ARTIST_FROM_FAVORITES = 'REMOVE_ARTIST_FROM_FAVORITES';

interface AddArtistToFavoritesAction {
    type: typeof ADD_ARTIST_TO_FAVORITES
    artist: Artist
}

interface RemoveArtistFromFavoritesAction {
    type: typeof REMOVE_ARTIST_FROM_FAVORITES
    artist: Artist;
}

export type ArtistFavoritesActionTypes = AddArtistToFavoritesAction | RemoveArtistFromFavoritesAction;

// Artist Shortlist actions
export const ADD_ARTIST_TO_SHORTLIST = 'ADD_ARTIST_TO_SHORTLIST';
export const REMOVE_ARTIST_FROM_SHORTLIST = 'REMOVE_ARTIST_FROM_SHORTLIST';

interface AddArtistToShortlistAction {
    type: typeof ADD_ARTIST_TO_SHORTLIST;
    artist: string;
}

interface RemoveArtistFromShortlistAction {
    type: typeof REMOVE_ARTIST_FROM_SHORTLIST;
    artist: string;
}

export type ArtistShortlistActionTypes = AddArtistToShortlistAction | RemoveArtistFromShortlistAction;

// Release Favorites actions
export const ADD_RELEASE_TO_FAVORITES = 'ADD_RELEASE_TO_FAVORITES';
export const REMOVE_RELEASE_FROM_FAVORITES = 'REMOVE_RELEASE_FROM_FAVORITES';

interface AddReleaseToFavoritesAction {
    type: typeof ADD_RELEASE_TO_FAVORITES;
    release: Release;
}

interface RemoveReleaseFromFavoritesAction {
    type: typeof REMOVE_RELEASE_FROM_FAVORITES;
    release: Release;
}

export type ReleaseFavoritesActionTypes = AddReleaseToFavoritesAction | RemoveReleaseFromFavoritesAction;
