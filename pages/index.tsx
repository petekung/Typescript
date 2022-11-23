import { Button, Layout, Menu } from "antd";
import { Image, Row, Col } from "antd";
import React from "react";
import { useEffect, useState } from "react";
import Random from "./Random";
import BMI from "./BMI";
import "antd/dist/antd.css";
import Newfooter from "./footer";
import List from "./component/List";
import From from "./component/From";
import AuthUser from "./Auth";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import { SeriesProps } from "./interfaces/SeriesProps";
export type DataType = {
  id: number;
  itemname: string;
  price: number;
};
export enum EStatus {
  NAME = "Nong Pete",
  PHONE = "098-155-5792",
  WORKPLACE = "1moby",
}

const { Footer } = Layout;
const { Header, Content, Sider } = Layout;
const App: React.FC = () => {
  const [select, setSelect] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const [profile, setProfile] = useState({
    displayName: "",
    userId: "",
    statusMessage: "",
    pictureUrl: "",
  });

  let liff: any;
  // useEffect(() => {
  //   liff = require("@line/liff");
  //   const lineLiff = async () => {
  //     try {
  //       await liff.init({ liffId: `${process.env.NEXT_PUBLIC_LIFF_ID}` });
  //     } catch (error) {
  //       console.error("liff init error");
  //     }
  //     if (!liff.isLoggedIn()) {
  //       liff.login();
  //     }
  //     const lineProflie = await liff.getProfile();
  //     setProfile(lineProflie);
  //   };
  //   lineLiff();

  //   // console.log(process.env.NEXT_PUBLIC_LIFF_ID);
  //   // console.log(profile);
  // }, []);
  // const [items, setItems] = useState<DataType[]>([] as DataType[]);
  const [count, setCount] = useState(0);
  const fakeUser = { username: "PETE123", fullname: " เต้า หมิงซื่อ" };
  const AutContext = React.createContext();
  const [seriesList, setseriesList] = useState<SeriesProps["seriesList"]>([]);
  useEffect(() => {
    console.log("Use Effect ");
  }, []);
  useEffect(() => {
    console.log("Use Effect count : " + count);
  }, [count]);
  return (
    <Layout style={{ minHeight: "200vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",

              label: profile.displayName,
            },
            {
              key: "2",

              label: profile.userId,
            },
            {
              key: "3",

              label: profile.statusMessage,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />

        <Content style={{ margin: "0 16px" }}>
          <Row>
            <Col span={8}>
              <h1 style={{ fontSize: 30 }}> Line Profile </h1>

              <div>
                {profile.pictureUrl && (
                  <Image
                    src={profile.pictureUrl}
                    alt={profile.displayName}
                    width={300}
                    height={300}
                  />
                )}

                <Random />
                <Newfooter select={select} setSelect={setSelect} />
                <br></br>
                <br></br>
                <br></br>
                <AppContext />
                <AppReducer/>
              </div>
            </Col>
            <Col span={14}>
              <BMI /> <h1 style={{ fontSize: 30 }}>Conditional Rendering</h1>
              <AuthUser />
              <br></br>{" "}
              <Button
                type="primary"
                onClick={() => {
                  setCount((prev) => prev + 1);
                }}
              >
                {" "}
                Number Click ={count}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={15}>
              <From seriesList={seriesList} setSeriesList={setseriesList} />
            </Col>
            <br></br>
            <Col span={9}>
              <List seriesList={seriesList} />
            </Col>
          </Row>
        </Content>

        <p style={{ textAlign: "center" }}> </p>
        <Footer style={{ textAlign: "center" }}> Footer : {select}</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
