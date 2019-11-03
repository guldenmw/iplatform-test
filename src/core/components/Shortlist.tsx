import React, {FC} from 'react';
import {Col, Row, Table} from "react-bootstrap";
import {ShortlistArtist, ShortlistType} from "../types";
import EmptyTable from "./EmptyTable";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeartBroken, faStar} from '@fortawesome/free-solid-svg-icons';

interface ShortlistItemType {
  artist: ShortlistArtist;
}

const ShortlistItem: FC<ShortlistItemType> = ({artist}) => (
  <tr>
    <td>
      <FontAwesomeIcon icon={faStar}/>
    </td>
    <td>
      {artist}
    </td>
  </tr>
);

const Shortlist = ({artists}: ShortlistType) => (
  <Row  className="d-flex justify-content-center">
    <Col sm={6}>
      {artists.length < 1 ? (
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
            {artists.map((artist, index) => (
              <ShortlistItem key={index} artist={artist}/>
            ))}
          </tbody>

        </Table>
      )}
    </Col>
  </Row>
);

export default Shortlist