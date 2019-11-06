import React, { FC } from 'react';
import { connect } from 'react-redux';

import { Col, Container, Row, Table } from "react-bootstrap";
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

import SearchBar from "../../components/SearchBar";
import EmptyTable from "../../components/EmptyTable";
import IMusicBrainzArtist from "../../core/store/search/musicbrainz/types/MusicBrainzArtistsResults";
import { mapDispatchToProps, mapStateToProps } from "./container";
import SearchArtistReleasesItem from "../../components/SearchArtistReleasesItem";


interface IProps {
  isLoading?: boolean;
  results?: IMusicBrainzArtist[];
  searchText?: string;
  searchTextChange?: (...args) => void;
  startSearch?: (searchText: string) => void;
}

const SearchReleases: FC<IProps> = (props) => {
  const {
    isLoading,
    results,
    searchText,
    searchTextChange,
    startSearch
  } = props;

  const handleSearchStart = (event?: any) => {
    startSearch(searchText);
  };

  const tableLoadingBody = (
    <tbody>
    <tr>
      <td colSpan={2}>
        <span>Loading...</span>
      </td>
    </tr>
    </tbody>
  );

  const showEmptyTable = !results || (results.length < 1 && !isLoading);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Search Releases</h2>
        </Col>
      </Row>
      <SearchBar
        onClick={handleSearchStart}
        onChange={searchTextChange}
        value={searchText}
      />

      { showEmptyTable && (
        <EmptyTable message={'Try searching for something'} icon={faExclamation}/>
      )}

      {!showEmptyTable && (
        <Col>
          <h1>Search Results:</h1>

          <Table responsive size='md'>
            <thead>
              <tr>
                <th>Artist Name</th>
                <th/>
              </tr>
            </thead>
            {isLoading ? (
              tableLoadingBody
            ) : (
              results.map((item, index) => (
                <SearchArtistReleasesItem
                  key={index}
                  item={item}
                />
              ))
            )}
          </Table>
        </Col>
      )}
    </Container>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchReleases) as typeof SearchReleases;