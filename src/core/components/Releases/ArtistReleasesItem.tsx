import React, {FC, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle, faStar} from "@fortawesome/free-solid-svg-icons";
import {Table} from "react-bootstrap";
import {ReleaseItemType, ArtistReleasesItemType} from "../types";


const ReleaseItem: FC<ReleaseItemType> = ({release, context, handleAddOrRemoveRelease}) => {
  const [favorite, toggleFavorite] = useState(context !== "Search");

  return (
    <tr>
      <td>
        <FontAwesomeIcon icon={faStar} onClick={() => {
          handleAddOrRemoveRelease(release, favorite);
          toggleFavorite(!favorite);
        }} className={favorite ? 'text-primary' : 'text-secondary'}/>
      </td>
      <td>{release.year}</td>
      <td>{release.title}</td>
      <td>{release.labels}</td>
      <td>{release.tracks}</td>
    </tr>
  )
};


const ArtistReleasesItem: FC<ArtistReleasesItemType> = (
  {artist, context, canEditArtists = false, handleRemoveArtist, handleAddOrRemoveRelease}
  ) => {
  const [showReleases, toggleReleases] = useState(false);

  console.log(artist);

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
                  <ReleaseItem key={index} context={context} release={release} handleAddOrRemoveRelease={handleAddOrRemoveRelease}/>
                ))}
              </tbody>
            </Table>
          </td>
        </tr>
      }
    </tbody>
  )
};

export default ArtistReleasesItem