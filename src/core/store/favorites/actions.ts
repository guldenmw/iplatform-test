import {Release, ADD_ARTIST, REMOVE_ARTIST, ADD_RELEASE, REMOVE_RELEASE} from "./types";


export function addArtist(name: string) {
    return {
        type: ADD_ARTIST,
        artist: name
    }
}

export function removeArtist(name: string) {
    return {
        type: REMOVE_ARTIST,
        artist: name
    }
}

export function addRelease(release: Release) {
    return {
        type: ADD_RELEASE,
        release: release
    }
}

export function removeRelease(artist: string, title: string) {
    return {
        type: REMOVE_RELEASE,
        artist: artist,
        title: title
    }
}