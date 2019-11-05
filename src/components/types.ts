import {Artist, Release} from "../core/store/favorites/types";

export interface ArtistReleasesItemType {
  artist: Artist;
  canEditArtists: boolean;
  context: string;
  handleRemoveArtist(artist: string): void;
  handleAddOrRemoveRelease(release: Release, favorite: boolean): void;
}

export interface ReleaseItemType {
  release: Release;
  context: string;
  handleAddOrRemoveRelease(release: Release, favorite: boolean): void;
}
