import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface EmptyTable {
  message: string;
  icon: IconDefinition;
}

const EmptyTable: FC<EmptyTable> = ({message, icon}) => (
  <Col className="d-flex flex-column justify-content-center align-items-center">
    <Row>
      <Col>
        <FontAwesomeIcon icon={icon}/>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>{message}</h4>
      </Col>
    </Row>
  </Col>
);

export default EmptyTable