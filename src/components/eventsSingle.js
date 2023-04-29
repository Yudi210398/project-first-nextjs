import React from "react";
import Link from "next/link";
import { Card } from "react-bootstrap";
import Button from "./button/button";
const EventsSingle = ({ datas }) => {
  const { image, description, title, date, id } = datas;
  const tanggal = new Date(date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  console.log(image);
  return (
    <div className="col d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{ height: "150px" }} variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <br />
          <Card.Text>{tanggal}</Card.Text>
          {/* 
          <Link className="btn btn-primary" href={`/events/${id}`}>
            Link Detail
          </Link> */}
          <br />
          <Button link={`/events/${id}`}> Link Detail</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EventsSingle;
