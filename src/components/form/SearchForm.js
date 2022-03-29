import React, { useState } from "react";
import { Button, Col, Form, Row, Alert } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";
import { fetchMovie } from "../../helper/axiosHelper";

export const SearchForm = ({ handleOnAddToList, getMovie }) => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    getMovie(search);
    setSearch("");
  };
  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control
              placeholder="Search ..."
              onChange={handleOnChange}
              value={search}
              required
            />
          </Col>
          <Col>
            <Button variant="warning" type="submit" value="search">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
