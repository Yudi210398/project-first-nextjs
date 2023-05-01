import React from "react";
import { Card } from "react-bootstrap";
import Button from "./button/button";
import classes from "../styles/eventSingle.module.css";
export const tanggalWaktu = (date) => {
  const tanggal = new Date(date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return tanggal;
};
const EventsSingle = ({ datas }) => {
  const { image, description, title, date, id } = datas;
  const tanggal = tanggalWaktu(date);
  return (
    <div className="col d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{ height: "150px" }} variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className={classes.desRataTengah}>{description}</Card.Text>
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
