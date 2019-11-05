import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { mapDispatchToProps } from './container';
import ILastFMArtistResult from '../../core/store/search/lastfm/types/LastFMArtistsResults';

interface IComponentProps {
  item: ILastFMArtistResult;
}

interface IContainerProps {
  addToShortlist?: (shortlistItem: ILastFMArtistResult) => void;
  removeFromShortlist?: (shortlistItem: ILastFMArtistResult) => void;
}

type IProps = IComponentProps & IContainerProps;

const ArtistItem: FC<IProps> = ({ item, addToShortlist }) => {
  const {
    image,
    name,
  } = item;

  const [{ '#text': imageUrl }] = image;

  const handleAddButtonClick = (event) => {
    addToShortlist(item);
  };

  return (
    <tr>
      <td>
        {!!imageUrl && (<Image src={imageUrl}/>)}
      </td>
      <td>{name}</td>
      <td>
        <FontAwesomeIcon
          icon={faPlusCircle}
          onClick={handleAddButtonClick}
          style={{ cursor: 'pointer' }}
        />
      </td>
    </tr>
  )
};

export default connect(
  null,
  mapDispatchToProps
)(ArtistItem) as typeof ArtistItem;
