import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './container';
import { Button, Col, Container, Table } from 'react-bootstrap';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

import SearchBar from '../../components/SearchBar';
import EmptyTable from '../../components/EmptyTable';
import ArtistReleasesItem from '../../components/ArtistReleasesItem';


interface IProps {
  handleRemoveArtist?: (name: string) => void;
  favouriteArtists?: any[]; // TODO: Type these
  favouriteReleases?: any[]; // TODO: Type these
}

const ArtistReleases = (artists) => {
  return (
    artists.artists.map((artist, index) => (
      <ArtistReleasesItem
        key={index}
        item={artist}
        canEditArtist={true}
      />
    ))
  )
};

const Favorites: FC<IProps> = ({ favouriteArtists, favouriteReleases }) => {
  const [loading, setLoading] = useState(false);

  const tableLoadingBody = (
    <tbody>
    <tr>
      <td colSpan={2}>
        <span>Loading...</span>
      </td>
    </tr>
    </tbody>
  );

  const shouldDisplayEmptyMessage: boolean = favouriteArtists.length < 1 && !loading;

  return (
    <Container>
      <SearchBar onClick={() => {}} onChange={() => {}} value={''}/>

      {shouldDisplayEmptyMessage && (
        <EmptyTable message={'Try searching for something'} icon={faExclamation}/>
      )}
      {!shouldDisplayEmptyMessage && (
        <Col>
          <h1>Search Results:</h1>

          <Table responsive size='md'>
            <thead>
            <tr>
              <th>Artist Name</th>
              <th/>
            </tr>
            </thead>
            {loading ? (tableLoadingBody) : (
              <ArtistReleases artists={favouriteArtists}/>
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
