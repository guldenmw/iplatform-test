import React, {FC, useState} from 'react';
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { mapDispatchToProps } from './container';
import IMusicBrainzArtist from "../../core/store/search/musicbrainz/types/MusicBrainzArtistsResults";
import ReleasesTable from "../ReleasesTable";
import IMusicBrainzRelease from "../../core/store/search/musicbrainz/types/MusicBrainzReleasesResults";
import {hideArtistReleases} from "../../core/store/search/musicbrainz/actions";


interface IComponentProps {
  item: IMusicBrainzArtist;
  releases?: IMusicBrainzRelease[];
  showReleases?: string[];
  canEditArtist: boolean;
}

interface IContainerProps {
  removeFromFavorites?: (artist: IMusicBrainzArtist) => void;
  getReleases?: (artistId: string) => void;
  showArtistReleases?: (artistId: string) => void;
  hideArtistReleases?: (artistId: string) => void;
}

type IProps = IComponentProps & IContainerProps;


const ArtistReleasesItem: FC<IProps> = (props) => {
  const {
    item,
    releases,
    showReleases,
    canEditArtist,
    removeFromFavorites,
    getReleases,
    showArtistReleases,
    hideArtistReleases
  } = props;

  console.log(showReleases);

  const { name, id } = item;
  const displayReleases = showReleases.includes(id);

  const handleToggleReleases = async (event) => {
    getReleases(id);
    displayReleases ? hideArtistReleases(id) : showArtistReleases(id);
  };

  const handleRemoveArtist = (event) => {
    removeFromFavorites(item);
  };

  return (
    <tbody>
      <tr>
        {canEditArtist && (
          <td>
            <FontAwesomeIcon icon={faMinusCircle} onClick={handleRemoveArtist}/>
          </td>
        )}

        <td>{name}</td>
        <td>
          <Button onClick={handleToggleReleases}>
            {displayReleases ? "Hide Releases" : "Show Releases"}
          </Button>
        </td>
      </tr>

      {displayReleases && <ReleasesTable releases={releases}/>}
    </tbody>
  )
};

ArtistReleasesItem.defaultProps = {
  canEditArtist: false
};

export default connect(
  null,
  mapDispatchToProps
)(ArtistReleasesItem) as typeof ArtistReleasesItem;
