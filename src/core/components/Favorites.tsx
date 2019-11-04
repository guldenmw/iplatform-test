import React, {FC} from 'react';
import {Artist, Release} from "../store/favorites/types";


interface FavoritesComponentType {
  artists: Artist[];
  releases: Release[];
  handleRemoveArtist(name: string): void;
  handleRemoveRelease(title: string): void;
}

const Favorites: FC<FavoritesComponentType> = ({artists, releases, handleRemoveArtist}) => (
  <div>

  </div>
);

export default Favorites