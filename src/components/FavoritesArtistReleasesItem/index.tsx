import React, { FC } from 'react';
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { mapStateToProps, mapDispatchToProps } from './container';
import ReleasesTable from '../ReleasesTable';
import IMusicBrainzRelease from '../../core/store/search/musicbrainz/types/MusicBrainzReleasesResults';
import {IFavoritesArtist} from '../../core/store/favorites/types';


interface IComponentProps {
  item: IFavoritesArtist;
  releases?: IMusicBrainzRelease[];
  showReleases?: string[];
}

interface IContainerProps {
  removeFromFavorites?: (artist: IFavoritesArtist) => void;
  showFavoritesReleases?: (artistId: string) => void;
  hideFavoritesReleases?: (artistId: string) => void;
}

type IProps = IComponentProps & IContainerProps;


const FavoritesArtistReleasesItem: FC<IProps> = (props) => {
  const {
    item,
    releases,
    showReleases,
    removeFromFavorites,
    showFavoritesReleases,
    hideFavoritesReleases
  } = props;

  const { name, mbid } = item;

  let artistReleases = [];

  if (releases) {
    artistReleases = releases.filter(item => {
      return item['artist-credit'][0].artist.name === name
    })
  }

  const displayReleases = showReleases && showReleases.includes(mbid);

  const handleToggleReleases = async (event) => {
    if (displayReleases) {
      hideFavoritesReleases(mbid)

    } else {
      showFavoritesReleases(mbid);
    }
  };

  const handleRemoveArtist = (event) => {
    removeFromFavorites(item);
  };

  return (
    <>
      <tr>
        <td className='table-start-button'>
          <FontAwesomeIcon icon={faMinusCircle} onClick={handleRemoveArtist}/>
        </td>

        <td>{name}</td>
        <td className='d-flex justify-content-end'>
          <Button onClick={handleToggleReleases}>
            {displayReleases ? 'Hide Releases' : 'Show Releases'}
          </Button>
        </td>
      </tr>

      {displayReleases && (
        <ReleasesTable
          releases={artistReleases}
          artistId={mbid}
        />
      )
      }
    </>
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesArtistReleasesItem) as typeof FavoritesArtistReleasesItem;
