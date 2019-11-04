import React, {FC, useState} from 'react';

import {Button, Col, Container, Table} from "react-bootstrap";
import {faExclamation} from '@fortawesome/free-solid-svg-icons';

import SearchBar from "./SearchBar";
import AddArtistToShortlist from "../containers/AddArtistToShortlist";
import ShowShortlist from '../containers/ShowShortlist'
import EmptyTable from "./EmptyTable";


const SearchArists: FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showShortlist, setShortlistVisible] = useState(false);

  async function fetchUrl(title) {
    setLoading(true);
    const url = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${title}&api_key=92088617afae9bf475f0df7179d0c311&format=json`;

    const response = await fetch(url);
    const json = await response.json();

    setData(json.results.artistmatches.artist);
    setLoading(false);
  }

  return (
    <Container>
      <SearchBar type={'Artists'} onClick={fetchUrl}/>
      <Col className="d-flex justify-content-end">
        <Button onClick={() => setShortlistVisible(!showShortlist)}>Show Shortlist</Button>
      </Col>

      {showShortlist && <ShowShortlist/>}

      {data.length < 1 && !loading ? (
        <EmptyTable message={"Try searching for something"} icon={faExclamation}/>
      ) : (
        <Col>
          <h1>Search Results:</h1>

          <Table responsive size='md'>
            <thead>
              <tr>
                <th/>
                <th>Artist Name</th>
                <th/>
              </tr>
            </thead>
            {loading ? (
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
                  <AddArtistToShortlist key={name} name={name} image={image[0]['#text']}/>
                ))}
              </tbody>
            )}
          </Table>
        </Col>
      )}
    </Container>
  )
};

export default SearchArists