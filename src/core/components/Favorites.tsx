import React, {FC} from 'react';
import {Artist, Release} from "../types";


interface FavoritesComponentType {
  artists: Artist[];
  releases: Release[];
  handleRemoveArtist(artist: Artist): void;
}

const Favorites: FC<FavoritesComponentType> = ({artists, releases, handleRemoveArtist}) => (
  <div>

  </div>
);

export default Favorites