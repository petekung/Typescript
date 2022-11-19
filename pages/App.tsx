import React from "react";
import { SeriesProps } from "./interfaces/SeriesProps";
import From from "./component/From";
import "antd/dist/antd.css";
import {  useState } from "react";
export const Apps = () => {
  const [seriesList, setseriesList] = useState<SeriesProps["seriesList"]>([]);
  return (
    <div>
        <h1>My Favourite TV series </h1>
      <From seriesList={seriesList} setSeriesList={setseriesList} />
      {/* <List seriesList={seriesList}/> */}
    </div>
  );
};

export default Apps;
