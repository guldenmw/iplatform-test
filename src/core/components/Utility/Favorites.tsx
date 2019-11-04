import React, {FC, useState} from 'react';
import {Artist} from "../../store/favorites/types";
import {Button, Col, Container, Table} from "react-bootstrap";
import {faExclamation} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import EmptyTable from "./EmptyTable";
import ArtistReleasesItemContainer from "../../containers/ArtistReleasesItemContainer";


interface FavoritesComponentType {
  favorites: Artist[];
  handleRemoveArtist(name: string): void;
}

const ArtistReleases = (artists) => {
  return (
    artists.artists.map((artist, index) => (
      <ArtistReleasesItemContainer key={index} artist={artist} context={"Favorites"}/>
    ))
  )
};

const Favorites: FC<FavoritesComponentType> = ({favorites}) => {
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <SearchBar type={'My Artists'} onClick={() => {}}/>

      {favorites.length < 1 && !loading ? (
        <EmptyTable message={"Try searching for something"} icon={faExclamation}/>
      ) : (
        <Col>
          <h1>Search Results:</h1>

          <Table responsive size='md'>
            <thead>
            <tr>
              <th>Artist Name</th>
              <th/>
            </tr>
            </thead>
            {loading ? (
              <tbody>
              <tr>
                <td colSpan={2}>
                  <span>Loading...</span>
                </td>
              </tr>
              </tbody>
            ) : (
              <ArtistReleases artists={favorites}/>
            )}
          </Table>
        </Col>
      )}
    </Container>
  )
};

export default Favorites