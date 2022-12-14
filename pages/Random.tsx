import Head from "next/head";
import { Button, Typography } from "antd";
import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
const items = [
  {
    label: "Submit and continue",
    key: "1",
  },
];

export default function RGB() {
  // useState
  const [loadings, setLoadings] = useState([]);
  const [RGB, setRGB] = useState([0, 0, 0]);
  const { Text } = Typography;
  const enterLoading = (index) => {
    setLoadings((state) => {
      const newLoadings = [...state];
      newLoadings[index] = true;
     
      return newLoadings;
    });
  };
  setTimeout(() => {
    setLoadings((state) => {
      const newLoadings = [...state];
      //newLoadings[index] = false;
      return newLoadings;
    });
  }, 2000);

  return (
    <div>
      <Head>
        <title>1moby</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <h1
        className="RGB"
        style={{ color: `RGB(${RGB.join(",")})`, fontSize: 50 }}
      >
        RGB
      </h1>

      <h2> CodeRGB : {RGB.join(", ")}</h2>

      <div>
        <Button
          style={{ color: `RGB(${RGB.join(",")})` }}
          type="succes"
          value="large"
          onClick={() => {
            setRGB(
              RGB.map(() => {
                return Math.floor(Math.random() * 256);
              })
            );
          }}
        >
          {" "}
          Random{" "}
        </Button>
        <Button
          loading={loadings[1]}
         
          onClick={() => enterLoading(1)}
        >
          Loading . . .
        </Button>
      </div>
      <br></br>
    </div>
  );
}
