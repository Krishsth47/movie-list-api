import React, { useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";
import { ListItem } from "../list-item/ListItem";

export const MovieList = ({ movieList, handleOnDelete, setCategory }) => {
  const [display, setDisplay] = useState("grid");

  return (
    <Row>
      <Col>
        <div className="filter d-flex justify-content-between">
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="info" onClick={() => setCategory("")}>
              ALL
            </Button>
            <Button variant="success" onClick={() => setCategory("happy")}>
              HAPPY
            </Button>
            <Button variant="secondary" onClick={() => setCategory("lazy")}>
              LAZY
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example" size="lg">
            <Button variant="primary" onClick={() => setDisplay("grid")}>
              Grid
            </Button>
            <Button variant="danger" onClick={() => setDisplay("list")}>
              List
            </Button>
          </ButtonGroup>
        </div>
        <div className="d-flex justify-content-between flex-wrap">
          {movieList.map((movie, i) =>
            display === "list" ? (
              <ListItem
                key={i}
                movie={movie}
                btnDelete={true}
                fun={handleOnDelete}
              />
            ) : (
              <CustomCard
                key={i}
                movie={movie}
                btnDelete={true}
                fun={handleOnDelete}
              />
            )
          )}
        </div>
      </Col>
    </Row>
  );
};
