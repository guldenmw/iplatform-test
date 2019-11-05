import React, {FC} from 'react';
import { connect } from 'react-redux';
import {Table} from "react-bootstrap";
import IMusicBrainzRelease from "../../core/store/search/musicbrainz/types/MusicBrainzReleasesResults";
import ReleaseItem from '../ReleaseItem'
import {mapDispatchToProps} from "../ArtistReleasesItem/container";


interface IProps {
  releases: IMusicBrainzRelease[];
}


const ReleasesTable: FC<IProps> = (props) => {
  const { releases } = props;

  return (
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
            {releases.map((release, index) => (
              <ReleaseItem key={index} item={release}/>
            ))}
          </tbody>
        </Table>
      </td>
    </tr>
  )
};

export default connect(
  null,
  mapDispatchToProps
)(ReleasesTable) as typeof ReleasesTable;