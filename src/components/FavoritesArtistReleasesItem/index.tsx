import React, { FC } from 'react';
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { mapStateToProps, mapDispatchToProps } from './container';
import IMusicBrainzArtist from "../../core/store/search/musicbrainz/types/MusicBrainzArtistsResults";
import ReleasesTable from "../ReleasesTable";
import IMusicBrainzRelease from "../../core/store/search/musicbrainz/types/MusicBrainzReleasesResults";


interface IComponentProps {
  item: IMusicBrainzArtist;
  releases?: IMusicBrainzRelease[];
  showReleases?: string[];
}

interface IContainerProps {
  removeFromFavorites?: (artist: IMusicBrainzArtist) => void;
  showArtistReleases?: (artistId: string) => void;
  hideArtistReleases?: (artistId: string) => void;
}

type IProps = IComponentProps & IContainerProps;


const FavoritesArtistReleasesItem: FC<IProps> = (props) => {
  const {
    item,
    releases,
    showReleases,
    removeFromFavorites,
    showArtistReleases,
    hideArtistReleases
  } = props;

  const { name, id } = item;

  let artistReleases = [];

  if (releases) {
    artistReleases = releases.filter(item => {
      return item["artist-credit"][0].artist.name === name
    })
  }

  const displayReleases = showReleases && showReleases.includes(id);

  const handleToggleReleases = async (event) => {
    displayReleases ? hideArtistReleases(id) : showArtistReleases(id);
  };

  const handleRemoveArtist = (event) => {
    removeFromFavorites(item);
  };

  return (
    <tbody>
      <tr>
        <td>
          <FontAwesomeIcon icon={faMinusCircle} onClick={handleRemoveArtist}/>
        </td>

        <td>{name}</td>
        <td>
          <Button onClick={handleToggleReleases}>
            {displayReleases ? "Hide Releases" : "Show Releases"}
          </Button>
        </td>
      </tr>

      {displayReleases && <ReleasesTable releases={artistReleases}/>}
    </tbody>
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesArtistReleasesItem) as typeof FavoritesArtistReleasesItem;
