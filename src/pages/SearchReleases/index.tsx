import React, { FC } from 'react';
import { connect } from 'react-redux';

import { Col, Container, Table } from 'react-bootstrap';
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
      <Col className="mt-5">
        <h1>Search Releases</h1>
      </Col>
      <SearchBar
        onClick={handleSearchStart}
        onChange={searchTextChange}
        value={searchText}
      />

      { showEmptyTable && (
        <EmptyTable message={'Try searching for something'} icon={faExclamation}/>
      )}

      {!showEmptyTable && (
        <Col className="mt-5">
          <h2>Search Results:</h2>

          <Table responsive hover size='md'>
            <thead>
              <tr>
                <th>Artist Name</th>
                <th/>
              </tr>
            </thead>
            {isLoading ? (
              tableLoadingBody
            ) : (
              <tbody>
                {results.map((item, index) => (
                  <SearchArtistReleasesItem
                    key={index}
                    item={item}
                  />
                ))}
              </tbody>
            )}
          </Table>
        </Col>
      )}
    </Container>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchReleases) as typeof SearchReleases;