import React, {useState} from 'react';
import {Row, Col, FormControl, InputGroup} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  type: string;
  onClick(title: string): void;
}

const SearchBar = ({type, onClick}: SearchBarProps) => {
  const [title, setTitle] = useState('');

  return (
    <Row>
      <Row>
        <h2>Search {type}</h2>
      </Row>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Artist Name"
              aria-label="Artist Name"
              aria-describedby="basic-addon2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2">
                <FontAwesomeIcon icon={faSearch} onClick={(e) => {e.preventDefault(); onClick(title)}}/>
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Row>
  )
};

export default SearchBar