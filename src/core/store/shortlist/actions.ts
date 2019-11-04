import {ADD_ARTIST, REMOVE_ARTIST} from "./types";


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
