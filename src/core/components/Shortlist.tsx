import React, {FC} from 'react';
import {Col, Row, Table} from "react-bootstrap";
import EmptyTable from "./EmptyTable";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeartBroken, faStar} from '@fortawesome/free-solid-svg-icons';


interface ShortlistType {
  artists: string[];
}

const Shortlist: FC<ShortlistType> = ({artists}) => (
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
              <tr key={index}>
                <td>
                  <FontAwesomeIcon icon={faStar}/>
                </td>
                <td>
                  {artist}
                </td>
              </tr>
            ))}
          </tbody>

        </Table>
      )}
    </Col>
  </Row>
);

export default Shortlist