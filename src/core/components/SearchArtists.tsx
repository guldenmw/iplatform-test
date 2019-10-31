import React, {FC, useState} from 'react';
import {Col, Container, Row, Table} from "react-bootstrap";
import SearchBar from "./SearchBar";
import AddArtistToShortlist from "../containers/AddArtistToShortlist";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamation} from '@fortawesome/free-solid-svg-icons';


const SearchArists: FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchUrl(title) {
    setLoading(true);
    const url = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${title}&api_key=92088617afae9bf475f0df7179d0c311&format=json`;

    const response = await fetch(url);
    const json = await response.json();

    setData(json.results.artistmatches.artist);
    setLoading(false);
  }

  const tableBody = () => {
    if (data.length < 1) {
      return (
        <Col lg={12} className="d-flex justify-content-center">
          <Row>
            <Col sm={12}>
              <FontAwesomeIcon icon={faExclamation}/>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <h4>Try searching for something</h4>
            </Col>
          </Row>
        </Col>
      )

    } else {
      return (
        loading ? (
          <tbody>
          <tr>
            <td/>
            <td>
              <span>Loading...</span>
            </td>
          </tr>
          </tbody>
        ) : (
          <tbody>
          {data.map(({image, name}) => (
            <AddArtistToShortlist key={name} name={name} image={image[1]['#text']}/>
          ))}
          </tbody>
        )
      )
    }
  };

  return (
    <Container>
      <SearchBar type={'Artists'} onClick={fetchUrl}/>
      <Table responsive size='md'>
        <thead>
          <tr>
            <th/>
            <th>Artist Name</th>
            <th/>
          </tr>
        </thead>
        {tableBody()}
      </Table>
    </Container>
  )
};

export default SearchArists