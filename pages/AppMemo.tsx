import React, { useState, memo, useMemo } from "react";
import { Button, Layout, Row, Col } from "antd";
import "antd/dist/antd.css";
const {  Content } = Layout;
function AppMemo() {
  const [count, setCount] = useState(35);
  const [count2, setCount2] = useState(0);

  const fibo = (n) => {
    return n <= 0 ? 0 : n === 1 ? 1 : fibo(n - 1) + fibo(n - 2);
  };

  const f = fibo(count)
  // const f = useMemo(() => {
  //   return fibo(count);
  // }, [count]);

  return (
    <>
      <Layout style={{ minHeight: "200vh" }}>
        <Content>
          <Row>
            <Col span={0}></Col>
            <Col span={24} style={{textAlign: "center" }}>
              <h1 style={{textAlign: "center" }}>
                Learn Hook Memo
              </h1>
              <h1 style={{ marginTop: 50 ,textAlign: "center" }} >
                Count = {count} <br></br>
              </h1>
              Fibo Count  = {f}
              <br></br>
              <Button onClick={() => setCount(count + 1)} > Add conut </Button>
              <br></br>
              <h1>
                Count2 = {count2} <br></br>
              </h1>
              <Button onClick={() => setCount2(count2 + 1)}>
                Add conut 2{" "}
              </Button>
              <Child />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}
///  Basic memo ///
const Child = memo(() => {
  console.log("Child Render ");

  return <div>Component Child </div>;
});
export default AppMemo;
