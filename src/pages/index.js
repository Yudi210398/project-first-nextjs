import React from "react";
import { getAllEvents, getFeaturedEvents } from "../../data-dummy";
import ListEvents from "@/components/listEvents";
import { useRouter } from "next/router";
import FormTanggal from "@/components/formTanggal";

const HomePage = () => {
  const datas = useRouter();
  const getDataAllEvent = getAllEvents();
  const eventMendatang = getFeaturedEvents();
  const hasilEvent =
    datas.asPath === "/eventlive" ? eventMendatang : getDataAllEvent;

  const getFilterData = (bulan, tahun) => {
    console.log(tahun, bulan);

    const fullPath = `/events/${bulan}/${tahun}`;

    datas.push(fullPath);
  };

  return (
    <div className="container">
      <br />
      <FormTanggal getHandlerDate={getFilterData} />
      <br />
      <ListEvents item={hasilEvent} />
    </div>
  );
};

export default HomePage;
