import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { mapDispatchToProps } from './container';
import IArtistResult from '../../core/store/search/types';

interface IComponentProps {
  item: IArtistResult;
}

interface IContainerProps {
  addToShortlist?: (shortlistItem: IArtistResult) => void;
  removeFromShortlist?: (shortlistItem: IArtistResult) => void;
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
