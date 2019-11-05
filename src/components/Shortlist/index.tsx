import React, { FC } from 'react';
import { connect } from 'react-redux';
import {
  mapStateToProps,
  mapDispatchToProps,
} from './container';

import { Col, Row, Table } from 'react-bootstrap';
import EmptyTable from '../EmptyTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken, faStar } from '@fortawesome/free-solid-svg-icons';
import ILastFMArtist from "../../core/store/search/lastfm/types/LastFMArtistsResults";

interface IProps {
  shortlist?: ILastFMArtist[];
  addArtist?: (artist: ILastFMArtist) => void;
}

const Shortlist: FC<IProps> = ({ shortlist, addArtist }) => {
  const handleAddArtist = (artist: ILastFMArtist) => (event) => {
    addArtist(artist);
  };

  return (
    <Row className="d-flex justify-content-center">
      <Col sm={6}>
        {shortlist.length < 1 ? (
          <EmptyTable message="You haven't added any artists to your shortlist." icon={faHeartBroken}/>
        ) : (
          <Table size='sm'>
            <thead>
            <tr>
              <th/>
              <th>Artist</th>
            </tr>
            </thead>
            <tbody>
            {shortlist.map((artist, index) => (
              <tr key={index}>
                <td>
                  <FontAwesomeIcon icon={faStar} onClick={handleAddArtist(artist)} />
                </td>
                <td>
                  {artist.name}
                </td>
              </tr>
            ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shortlist) as typeof Shortlist;
