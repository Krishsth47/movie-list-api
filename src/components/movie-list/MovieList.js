import React from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const MovieList = ({ movieList, handleOnDelete, handleOnSelect }) => {
  return (
    <Row>
      <Col>
        <div className="filter d-flex justify-content-between">
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="info" onClick={() => handleOnSelect()}>
              ALL
            </Button>
            <Button variant="success" onClick={() => handleOnSelect("happy")}>
              HAPPY
            </Button>
            <Button variant="secondary" onClick={() => handleOnSelect("lazy")}>
              LAZY
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="primary">Grid</Button>
            <Button variant="danger">List</Button>
          </ButtonGroup>
        </div>
        <div className="d-flex justify-content-between flex-wrap">
          {movieList.map((movie, i) => (
            <CustomCard
              key={i}
              movie={movie}
              btnDelete={true}
              fun={handleOnDelete}
            />
          ))}
        </div>
      </Col>
    </Row>
  );
};
