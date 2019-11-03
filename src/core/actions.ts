import * as types from "./types";

export function addArtistToFavorites(name: string) {
    return {
        type: types.ADD_ARTIST_TO_FAVORITES,
        name: name
    }
}

export function removeArtistFromFavorites(name: string) {
    return {
        type: types.REMOVE_RELEASE_FROM_FAVORITES,
        name: name
    }
}

export function removeArtistFromShortlist(name: string) {
    return {
        type: types.REMOVE_ARTIST_FROM_SHORTLIST,
        name: name
    }
}

export function addArtistToShortlist(name: string) {
    return {
        type: types.ADD_ARTIST_TO_SHORTLIST,
        name: name
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