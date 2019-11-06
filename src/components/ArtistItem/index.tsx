import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Button, Image } from 'react-bootstrap';
import { mapDispatchToProps, mapStateToProps } from './container';
import ILastFMArtist from '../../core/store/search/lastfm/types/LastFMArtistsResults';

interface IComponentProps {
  item: ILastFMArtist;
  shortlist?: ILastFMArtist[];
}

interface IContainerProps {
  addToShortlist?: (shortlistItem: ILastFMArtist) => void;
  removeFromShortlist?: (shortlistItem: ILastFMArtist) => void;
}

type IProps = IComponentProps & IContainerProps;

const ArtistItem: FC<IProps> = (props) => {
  const {
    item,
    shortlist,
    addToShortlist,
    removeFromShortlist
  } = props;

  const {
    image,
    name,
    mbid
  } = item;

  const isInShortlist = shortlist && shortlist.some(item => item.mbid === mbid);

  const [{ '#text': imageUrl }] = image;

  const handleUpdateShortlist = (event) => {
    if ( isInShortlist ) {
      removeFromShortlist(item)

    } else {
      addToShortlist(item);
    }
  };

  return (
    <tr>
      <td>
        {!!imageUrl && (<Image src={imageUrl}/>)}
      </td>
      <td>{name}</td>
      <td className="d-flex justify-content-end">
        <Button
          onClick={handleUpdateShortlist}
        >
          {isInShortlist ? "Remove" : "Add to Shortlist"}
        </Button>
      </td>
    </tr>
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistItem) as typeof ArtistItem;
