import React, {FC} from 'react';
import { connect } from 'react-redux';
import { Table } from "react-bootstrap";
import IMusicBrainzRelease from "../../core/store/search/musicbrainz/types/MusicBrainzReleasesResults";
import ReleaseItem from '../ReleaseItem';
import { mapStateToProps } from "./container";


interface IProps {
  releases?: IMusicBrainzRelease[];
  isLoading?: boolean;
}


const ReleasesTable: FC<IProps> = (props) => {
  const { releases, isLoading } = props;

  const tableLoadingBody = (
    <tr>
      <td colSpan={2}>
        <span>Loading...</span>
      </td>
    </tr>
  );

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
          {isLoading ? (
            tableLoadingBody
          ) : (
            releases.map((release, index) => (
              <ReleaseItem key={index} item={release}/>
            ))
          )}

          </tbody>
        </Table>
      </td>
    </tr>
  )
};

export default connect(
  mapStateToProps,
  null
)(ReleasesTable) as typeof ReleasesTable;