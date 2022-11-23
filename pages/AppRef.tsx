import React from "react";
import { Layout } from "antd";
import { useState, useRef } from "react";
import { Button, Alert } from "antd";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
const AppRef = () => {
  
  const [file, setFile] = useState(null);
  const fileRef = useRef(null);
  const textareaRef = useRef(null);
  function onAlltextClick() {
    textareaRef.current.select();
  }
  function Alart() {}
  function onUploadClick() {
    const myFile = fileRef.current.files[0];

    if (!myFile) {
      alert("You haven't selected a file yet.");
      return;
    }
    console.log(myFile);
  }
  console.log("Rander Component ");
  return (
    <>
      <Layout style={{ minHeight: "200vh" }}>
        <h1 style={{ textAlign: "center" }}>Learn Basic useRef </h1>
        <Row>
          <Col span={12} style={{ textAlign: "center" }}>
            <p style={{ fontSize: 30 }}>useState</p>
            <input
              type="file"
              onChange={(event) => setFile(event.target.files[0])}
            />{" "}
          </Col>
          <Col span={12} style={{ textAlign: "center" }}>
            <p style={{ fontSize: 30 }}>useRef</p>
            <input type="file" ref={fileRef} />
          </Col>
        </Row>
        <h1 style={{ textAlign: "center" }}>
          <Button type="primary" onClick={onUploadClick}>
            Upload File{" "}
          </Button>
        </h1>
        <textarea
         cols={50}
          rows={4}
          placeholder="Test"
          ref={textareaRef}
        ></textarea>
        <h1 style={{ textAlign: "center" }}>
          <Button type="primary" onClick={onAlltextClick}>
            Copy Text All{" "}
          </Button>
        </h1>
      


      </Layout>
    </>
  );
};

export default AppRef;
