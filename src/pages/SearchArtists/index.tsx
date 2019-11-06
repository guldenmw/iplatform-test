import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './container';

import { Button, Col, Container, Table } from 'react-bootstrap';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

import SearchBar from "../../components/SearchBar";
import ArtistItem from '../../components/ArtistItem'
import EmptyTable from "../../components/EmptyTable";
import Shortlist from "../../components/Shortlist";

import ILastFMArtist from '../../core/store/search/lastfm/types/LastFMArtistsResults';


interface IProps {
  isLoading?: boolean;
  results?: ILastFMArtist[];
  shortlist?: ILastFMArtist[];
  searchText?: string;
  searchTextChange?: (...args) => void;
  startSearch?: (searchText: string) => void;
}

const SearchArtists: FC<IProps> = (props) => {
  const {
    isLoading,
    results,
    shortlist,
    searchText,
    searchTextChange,
    startSearch
  } = props;

  const [showShortlist, setShortlistVisible] = useState(false);
  const shortlistEmpty = shortlist.length < 1;

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

  const handleToggleShortlist = (event) => {
    setShortlistVisible(!showShortlist)
  };

  const shortlistButtonValue = () => {
    if (shortlistEmpty) {
      return 'Shortlist Empty'

    } else if(showShortlist) {
      return 'Hide Shortlist'

    } else {
      return 'Show Shortlist'
    }
  };

  console.log(shortlistButtonValue());

  return (
    <Container>
      <Col className="mt-5">
        <h1>Search Artists</h1>
      </Col>

      <SearchBar
        onClick={handleSearchStart}
        onChange={searchTextChange}
        value={searchText}
      />

      <Col className="d-flex justify-content-end">
        <Button
          onClick={handleToggleShortlist}
          disabled={shortlistEmpty}
        >
          {shortlistButtonValue()}
        </Button>
      </Col>

      {showShortlist && (
        <Shortlist />
      )}

      { showEmptyTable && (
        <EmptyTable message={'Try searching for something'} icon={faExclamation}/>
      )}

      {!showEmptyTable && (
        <Col>
          <h2>Search Results:</h2>

          <Table responsive hover size='md'>
            <thead>
              <tr>
                <th className='table-button-header'/>
                <th>Artist Name</th>
                <th/>
              </tr>
            </thead>
            {isLoading ? (tableLoadingBody) : (
              <tbody>
                {results.map((item, index) => (
                  <ArtistItem
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchArtists) as typeof SearchArtists;
