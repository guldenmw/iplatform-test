import React, {useState} from 'react';

import {Col, Container, Table} from "react-bootstrap";
import {faExclamation} from '@fortawesome/free-solid-svg-icons';

import SearchBar from "../Utility/SearchBar";
import ArtistReleasesItemContainer from "../../containers/ArtistReleasesItemContainer";
import EmptyTable from "../Utility/EmptyTable";


const formatReleases = (releases) => {
  const newReleases = releases.map((release) => {
    let labels = [];
    if ('label-info' in release) {
      labels = release['label-info'].map((info) => {
        if ('label' in info) {
          return info.label.name
        }
      })
    }

    return {
      artist: release['artist-credit'][0].name,
      title: release.title,
      year: release.date,
      labels: labels,
      tracks: release['track-count'],
    }
  });

  let uniqueArtists = Array();
  newReleases.map(release => {
    if (!uniqueArtists.includes(release.artist)) {
      uniqueArtists.push(release.artist)
    }
  });

  return uniqueArtists.map((artist) => {
    const artistReleases = newReleases.filter(rel => {
      return rel.artist === artist
    });

    return {
      name: artist,
      releases: artistReleases
    }
  });
};


const SearchResults = (artists) => {
  return (
    artists.artists.map((artist, index) => (
      <ArtistReleasesItemContainer key={index} artist={artist} context={"Search"}/>
    ))
  )

};

const SearchReleases = () => {
  const [artists, setArtists] = useState(Array());
  const [loading, setLoading] = useState(false);

  async function fetchUrl(title) {
    setLoading(true);
    const url = `http://musicbrainz.org/ws/2/release/?query=artist:${title}&fmt=json`;

    const response = await fetch(url);
    const json = await response.json();

    const artists = formatReleases(json.releases);

    setArtists(artists);
    setLoading(false);
  }

  return (
    <Container>
      <SearchBar type={'Releases'} onClick={fetchUrl}/>

      {artists.length < 1 && !loading ? (
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
              <SearchResults artists={artists}/>
            )}
          </Table>
        </Col>
      )}
    </Container>
  )
};

export default SearchReleases