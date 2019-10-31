import React from 'react';
import {Container, Col, Row} from "react-bootstrap";
import SearchBar from "./SearchBar";


interface MyArtistsProps {
    artists: string[];
    releases: string[];
}

const MyArtists = ({artists, releases}: MyArtistsProps) => (
  <Container>
    {/*<SearchBar title={"My Artists"}/>*/}
    <Container>
      {artists.map((artist) =>
        <div>{artist}</div>
      )}
    </Container>
  </Container>
);

export default MyArtists