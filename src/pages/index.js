import React from "react";
import { getAllEvents } from "../../data-dummy";
import ListEvents from "@/components/listEvents";

const HomePage = () => {
  const getDataAllEvent = getAllEvents();
  return (
    <>
      <br />
      <ListEvents item={getDataAllEvent} />
    </>
  );
};

export default HomePage;
