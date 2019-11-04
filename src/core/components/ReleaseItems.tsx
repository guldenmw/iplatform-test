import React, {FC, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle, faStar} from "@fortawesome/free-solid-svg-icons";
import {Table} from "react-bootstrap";
import {Artist, Release} from "../store/favorites/types";


interface ReleaseItemsType {
  artist: Artist;
  canEditArtists: boolean;
  handleRemoveArtist(artist: string): void;
  handleAddRelease(release: Release): void;
  handleRemoveRelease(artist: string, release: string): void;
}


const ReleaseItems: FC<ReleaseItemsType> = (
  {artist, canEditArtists = false, handleRemoveArtist, handleAddRelease, handleRemoveRelease}
  ) => {
  const [showReleases, toggleReleases] = useState(false);

  return (
    <tbody>
      <tr>
        {canEditArtists &&
          <td>
            <FontAwesomeIcon icon={faTimesCircle} onClick={() => handleRemoveArtist(artist.name)}/>
          </td>
        }
        <td>
          <span>{artist.name}</span>
        </td>
        <td onClick={(e) => {e.preventDefault(); toggleReleases(!showReleases)}}>
          {showReleases ? "Hide Releases" : "Show Releases"}
        </td>

      </tr>
      {showReleases &&
        <tr>
          <td colSpan={3}>
            <Table responsive size='md'>
              <thead>
                <tr>
                  <th/>
                  <th>Year</th>
                  <th>Title</th>
                  <th>Release Label</th>
                  <th>Tracks</th>
                </tr>
              </thead>
              <tbody>
                {artist.releases.map((release, index) => (
                  <tr key={index}>
                    <td>
                      <FontAwesomeIcon icon={faStar} onClick={() => {
                        release.favorite ? handleRemoveRelease(release.artist, release.title) : handleAddRelease(release)
                      }}/>
                    </td>
                    <td>{release.year}</td>
                    <td>{release.title}</td>
                    <td>{release.labels}</td>
                    <td>{release.tracks}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </td>
        </tr>
      }
    </tbody>
  )
};

export default ReleaseItems