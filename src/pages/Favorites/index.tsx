import React, { FC } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from './container';
import { Col, Container, Table } from 'react-bootstrap';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

import EmptyTable from '../../components/EmptyTable';
import FavoritesArtistReleasesItem from '../../components/FavoritesArtistReleasesItem';


interface IProps {
  favoriteArtists?: any[];
}

const Favorites: FC<IProps> = (props) => {
  const {
    favoriteArtists,
  } = props;

  const shouldDisplayEmptyMessage: boolean = !favoriteArtists || favoriteArtists.length < 1;

  return (
    <Container>
      {shouldDisplayEmptyMessage && (
        <EmptyTable message={'You have no favorites yet'} icon={faExclamation}/>
      )}

      {!shouldDisplayEmptyMessage && (
        <Col>
          <h1>Favorites</h1>

          <Table responsive size='md'>
            <thead>
            <tr>
              <th>Artist Name</th>
              <th/>
            </tr>
            </thead>
            {favoriteArtists.map((item, index) => (
              <FavoritesArtistReleasesItem
                key={index}
                item={item}
              />
            ))}
          </Table>
        </Col>
      )}
    </Container>
  )
};

export default connect(
  mapStateToProps,
  null
)(Favorites) as typeof Favorites;
