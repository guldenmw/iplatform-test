import React, {FC, useState} from 'react';
import { connect } from 'react-redux';
import { Artist } from "../../core/store/favorites/types";
import { Col, Container, Table} from "react-bootstrap";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../../components/SearchBar";
import EmptyTable from "../../components/EmptyTable";
import ArtistReleasesItemContainer from "../../core/containers/ArtistReleasesItemContainer";
import {mapDispatchToProps, mapStateToProps} from "./container";


interface IProps {
  handleRemoveArtist?: (name: string) => void;
  favorites?: any[]; // TODO: Type these
}

const ArtistReleases = (artists) => {
  return (
    artists.artists.map((artist, index) => (
      <ArtistReleasesItemContainer key={index} artist={artist} context={"Favorites"}/>
    ))
  )
};

const Favorites: FC<IProps> = ({favorites}) => {
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <SearchBar onClick={() => {}} onChange={() => {}} value={''}/>

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites) as typeof Favorites;