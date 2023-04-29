import React from "react";
import EventsSingle from "./eventsSingle";

const ListEvents = (props) => {
  const { item } = props;
  console.log(item);
  return (
    <div className="row">
      {item?.map((datas) => {
        console.log(datas.id);
        return <EventsSingle datas={datas} key={datas.id} />;
      })}
    </div>
  );
};

export default ListEvents;
