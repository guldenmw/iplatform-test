import React, { FC } from 'react';
import { connect } from 'react-redux';
import {
  mapStateToProps,
  mapDispatchToProps,
} from './container';

import { Button, Col, Table } from 'react-bootstrap';
import ILastFMArtist from "../../core/store/search/lastfm/types/LastFMArtistsResults";

interface IProps {
  shortlist?: ILastFMArtist[];
  favoriteArtists?: ILastFMArtist[];
  addArtistToFavorites?: (artist: ILastFMArtist) => void;
  removeArtistFromFavorites?: (artist: ILastFMArtist) => void;
}

const Shortlist: FC<IProps> = (props) => {
  const {
    shortlist,
    favoriteArtists,
    addArtistToFavorites,
    removeArtistFromFavorites
  } = props;

  const isFavorite = (artistId: string) => {
    return favoriteArtists.some(item => item.mbid === artistId);
  };

  const handleUpdateFavorites = (artist: ILastFMArtist) => (event) => {
    if ( isFavorite(artist.mbid) ) {
      removeArtistFromFavorites(artist)

    } else {
      addArtistToFavorites(artist);
    }
  };

  return (
    <Col className="mt-2">
      <h1>Shortlist</h1>

      <Table responsive hover size='md'>
        <thead>
          <tr>
            <th>Artist</th>
            <th/>
          </tr>
        </thead>

        <tbody>
        {shortlist.map((artist, index) => (
          <tr key={index}>
            <td>
              {artist.name}
            </td>

            <td className="d-flex justify-content-end">
              <Button
                onClick={handleUpdateFavorites(artist)}
              >
                {isFavorite(artist.mbid) ? "Remove" : "Add to Favorites"}
              </Button>
            </td>
          </tr>
        ))}
        </tbody>
      </Table>
    </Col>
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shortlist) as typeof Shortlist;
