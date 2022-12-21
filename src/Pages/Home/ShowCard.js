import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowCard = ({ show }) => {
  return (
    <Card className="col-12 col-md-6 col-lg-4 p-4" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={show?.show?.image?.medium} />
      <Card.Body>
        <Card.Title>{show.show.name}</Card.Title>
        <Card.Text
          dangerouslySetInnerHTML={{
            __html: show?.show?.summary?.slice(0, 150) + "...",
          }}
        ></Card.Text>
        <Link to={`/showDetails/${show.show.id}`}>
          <Button variant="primary">See Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ShowCard;
