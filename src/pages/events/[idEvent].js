import { useRouter } from "next/router";
import React from "react";
import { getEventById } from "../../../data-dummy";
import { Card } from "react-bootstrap";
import { tanggalWaktu } from "@/components/eventsSingle";
const IdEvents = () => {
  const data = useRouter();
  const paramsDataId = data.query?.idEvent;
  const getDataID = getEventById(paramsDataId);
  const tanggal = tanggalWaktu(getDataID?.date);

  return (
    <div className="container">
      <br />
      <Card>
        <Card.Img
          style={{ height: "500px" }}
          variant="top"
          src={`/${getDataID?.image}`}
        />
        <Card.Header className="display-4">{getDataID?.title}</Card.Header>
        <Card.Body>
          <Card.Text className="display-5">{getDataID?.description}</Card.Text>
          <br />
          <Card.Text className="display-6">{tanggal}</Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
};

export default IdEvents;
