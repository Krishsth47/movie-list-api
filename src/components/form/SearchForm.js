import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const SearchForm = () => {
  return (
    <>
      <Form>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control placeholder="Search ..." />
          </Col>
          <Col>
            <Button variant="warning" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col className="d-flex justify-content-center">
          <CustomCard />
        </Col>
      </Row>
    </>
  );
};
