import React, { FC } from 'react';
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap';
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
  getReleases?: (artistId: string) => void;
  showArtistReleases?: (artistId: string) => void;
  hideArtistReleases?: (artistId: string) => void;
}

type IProps = IComponentProps & IContainerProps;


const SearchArtistReleasesItem: FC<IProps> = (props) => {
  const {
    item,
    releases,
    showReleases,
    getReleases,
    showArtistReleases,
    hideArtistReleases
  } = props;

  const { name, id } = item;

  let artistReleases = [];

  if (releases) {
    artistReleases = releases.filter(item => {
      console.log(item);
      return item["artist-credit"][0].artist.name === name
    });
  }

  const displayReleases = showReleases && showReleases.includes(id);

  const handleToggleReleases = async (event) => {
    getReleases(id);
    displayReleases ? hideArtistReleases(id) : showArtistReleases(id);
  };

  return (
    <tbody>
      <tr>
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
)(SearchArtistReleasesItem) as typeof SearchArtistReleasesItem;
