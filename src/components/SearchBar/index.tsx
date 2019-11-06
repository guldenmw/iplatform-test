import React from 'react';
import { Row, Col, FormControl, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  onClick: (title: string) => void;
  onChange: (newText: string) => void;
  value: string;
}

const SearchBar = ({ onClick, onChange, value }: SearchBarProps) => {
  const handleTextChange = (e) => {
    const { target: { value } } = e;
    onChange(value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    onClick(value)
  };

  const handleKeyDown = (e) => {
    console.log(e);
    console.log(e.key);
    if (e.key === 'Enter') {
      onClick(value);
    }
  };

  return (
    <Col>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Artist Name"
              aria-describedby="basic-addon2"
              onChange={handleTextChange}
              onKeyDown={handleKeyDown}
              placeholder="Artist Name"
              value={value}
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2" onClick={handleSearchClick} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faSearch}/>
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Col>
  )
};

export default SearchBar
