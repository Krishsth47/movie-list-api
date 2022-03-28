import React from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const MovieList = () => {
  return (
    <Row>
      <Col>
        <div className="filter d-flex justify-content-between">
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="info">ALL</Button>
            <Button variant="success">HAPPY</Button>
            <Button variant="secondary">SAD</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="primary">Grid</Button>
            <Button variant="danger">List</Button>
          </ButtonGroup>
        </div>
        <div className="d-flex justify-content-between flex-wrap">
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </div>
      </Col>
    </Row>
  );
};
