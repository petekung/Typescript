import React, { FC } from "react";
import { SeriesProps } from "../interfaces/SeriesProps";
import { Image } from "antd";
import { Col, Row } from "antd";
const List: FC<SeriesProps> = ({ seriesList }) => (
  <>
    <Row>
      <Col span={11}></Col>
      <Col span={13}>
        {" "}
        {seriesList.map((series, index) => (
          <div key={index} className="series-item">
            <Image
              src={series.cover}
              alt="series-cover"
              width={200}
              height={200}
            />
            <p>
            Movie type : <b>{series.name}</b>
            </p>
            <p>
            Movie type : <b>{series.genre}</b>
            </p>
            <p>Sector : <b>{series.seasons}</b></p>
          </div>
        ))}
      </Col>
    </Row>
  </>
);

export default List;
