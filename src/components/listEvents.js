import React from "react";
import EventsSingle from "./eventsSingle";

const ListEvents = (props) => {
  const { item } = props;
  return (
    <div className="row">
      {item?.map((datas) => {
        return <EventsSingle datas={datas} key={datas.id} />;
      })}
    </div>
  );
};

export default ListEvents;
