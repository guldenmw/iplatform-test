import React from 'react';
import {Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';


interface ArtistItemType {
  name: string;
  image: string;
  onClick(): void
}


const ArtistItem = ({name, image, onClick}: ArtistItemType) => (
  <tr>
    <td>
      <Image src={image}/>
    </td>
    <td>{name}</td>
    <td><FontAwesomeIcon icon={faStar} onClick={onClick}/></td>

  </tr>
);

export default ArtistItem