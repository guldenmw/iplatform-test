import React, { FC } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import IMusicBrainzRelease from '../../core/store/search/musicbrainz/types/MusicBrainzReleasesResults';
import { mapStateToProps, mapDispatchToProps } from './container';

interface IComponentProps {
  item: IMusicBrainzRelease;
  isFavorite?: boolean;
}

interface IContainerProps {
  addToFavorites?: (release: IMusicBrainzRelease) => void;
  removeFromFavorites?: (release: IMusicBrainzRelease) => void;
}

type IProps = IComponentProps & IContainerProps;

const ReleaseItem: FC<IProps> = (props) => {
  const {
    item,
    isFavorite,
    addToFavorites,
    removeFromFavorites
  } = props;

  const {
    date,
    title,
    'label-info': labelInfo,
    'track-count': tracks
  } = item;

  let label: string[] = [''];
  if ( labelInfo ) {
    label = labelInfo.map(item => {
      const { label } = item;
      if ( label && label.name ) {
        return label.name
      }
    });
  }

  const handleFavoritesUpdate = (event) => {
    if ( isFavorite ) {
      removeFromFavorites(item);

    } else {
      addToFavorites(item)
    }
  };

  return (
    <tr>
      <td>
        <FontAwesomeIcon icon={faStar} onClick={handleFavoritesUpdate} className={isFavorite ? 'text-primary' : 'text-secondary'}/>
      </td>
      <td>{date}</td>
      <td>{title}</td>
      <td>{label.join(', ')}</td>
      <td>{tracks}</td>
    </tr>
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReleaseItem) as typeof ReleaseItem;