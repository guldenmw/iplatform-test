import React, {FC, useState} from 'react';

import {Button, Col, Container, Table} from "react-bootstrap";
import {faExclamation} from '@fortawesome/free-solid-svg-icons';

import SearchBar from "./SearchBar";
import SearchReleasesResults from "../containers/SearchReleasesResults";
import ShowShortlist from '../containers/ShowShortlist'
import EmptyTable from "./EmptyTable";


const formatReleases = (releases, favorites) => {
  const newReleases = releases.map((release) => {

    let favorite = false;

    favorite = favorites.some((art) => {
      return art.releases.findIndex((rel) => {
        return  rel.title === release.title;
      }) > -1;
    });
    console.log("favorite: ", favorite);

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
      favorite: favorite
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
      <SearchReleasesResults key={index} artist={artist}/>
    ))
  )

};

const SearchReleases = ({favorites}) => {
  const [artists, setArtists] = useState(Array());
  const [loading, setLoading] = useState(false);
  const [showReleases, setReleasesVisible] = useState(false);

  async function fetchUrl(title) {
    setLoading(true);
    const url = `http://musicbrainz.org/ws/2/release/?query=artist:${title}&fmt=json`;

    const response = await fetch(url);
    const json = await response.json();

    const artists = formatReleases(json.releases, favorites);

    setArtists(artists);
    setLoading(false);
  }

  return (
    <Container>
      <SearchBar type={'Releases'} onClick={fetchUrl}/>
      <Col className="d-flex justify-content-end">
        <Button onClick={() => setReleasesVisible(!showReleases)}>{
          showReleases ? "Hide Releases" : "Show Releases"}
        </Button>
      </Col>

      {showReleases && <ShowShortlist/>}

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