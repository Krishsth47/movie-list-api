import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomCard = ({ movie }) => {
  return (
    <Card style={{ width: "18rem" }} className="mt-3">
      <Card.Img variant="top" src={movie?.Poster} />
      <Card.Body>
        <Card.Title>{movie?.Title}</Card.Title>
        <Card.Title>Rating: {movie?.imdbRating}</Card.Title>
        <div className="d-flex justify-content-between">
          <Button variant="info">Happy</Button>
          <Button variant="secondary">Lazy</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
