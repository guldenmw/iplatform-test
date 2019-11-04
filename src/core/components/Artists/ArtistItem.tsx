import React, {FC} from 'react';
import {Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';


interface ArtistItemType {
  name: string;
  image: string;
  onClick(): void
}


const ArtistItem: FC<ArtistItemType> = ({name, image, onClick}) => (
  <tr>
    <td>
      <Image src={image}/>
    </td>
    <td>{name}</td>
    <td>
      <FontAwesomeIcon icon={faPlusCircle} onClick={onClick} style={{cursor: "pointer"}}/>
    </td>

  </tr>
);

export default ArtistItem