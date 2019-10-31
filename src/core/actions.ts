import * as types from "./types";

export function addArtistToFavorites(artist: string) {
    return {
        type: types.ADD_ARTIST_TO_FAVORITES,
        artist: artist
    }
}

export function removeArtistFromFavorites(artist: string) {
    return {
        type: types.REMOVE_RELEASE_FROM_FAVORITES,
        artist: artist
    }
}

export function removeArtistFromShortlist(artist: string) {
    return {
        type: types.REMOVE_ARTIST_FROM_SHORTLIST,
        artist: artist
    }
}

export function addArtistToShortlist(artist: string) {
    return {
        type: types.ADD_ARTIST_TO_SHORTLIST,
        artist: artist
    }
}

export function addReleaseToFavorites(release: types.Release) {
    return {
        type: types.ADD_RELEASE_TO_FAVORITES,
        release: release
    }
}

export function removeReleaseFromFavorites(release: types.Release) {
    return {
        type: types.REMOVE_ARTIST_FROM_FAVORITES,
        title: release.title
    }
}