import React, { FC, useState } from "react";
import { connect } from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import IMusicBrainzRelease from "../../core/store/search/musicbrainz/types/MusicBrainzReleasesResults";
import {mapDispatchToProps} from "../ArtistReleasesItem/container";

interface IComponentProps {
  item: IMusicBrainzRelease;
}

interface IContainerProps {
  removeFromFavorites?: (release: IMusicBrainzRelease) => void;
}

type IProps = IComponentProps & IContainerProps;

const ReleaseItem: FC<IProps> = (props) => {
  const [favorite, toggleFavorite] = useState(false);

  const {
    item,
    removeFromFavorites
  } = props;

  const {
    date,
    title,
    'label-info': labelInfo,
    'track-count': tracks
  } = item;

  const handleRemoveFromFavorites = (event) => {
    removeFromFavorites(item);
    toggleFavorite(!favorite);
  };

  return (
    <tr>
      <td>
        <FontAwesomeIcon icon={faStar} onClick={handleRemoveFromFavorites} className={favorite ? 'text-primary' : 'text-secondary'}/>
      </td>
      <td>{date}</td>
      <td>{title}</td>
      <td>{labelInfo.map(item => item.label)}</td>
      <td>{tracks}</td>
    </tr>
  )
};

export default connect(
  null,
  mapDispatchToProps
)(ReleaseItem) as typeof ReleaseItem;