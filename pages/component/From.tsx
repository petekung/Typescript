import React, {
  FC,
  ChangeEvent,
  MouseEvent,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import Link from "next/link";
import { Layout } from "antd";
const {  Content } = Layout;
import { SeriesProps } from "../interfaces/SeriesProps";
import { Input, Button } from "antd";

interface Props {
  seriesList: SeriesProps["seriesList"];
  setSeriesList: Dispatch<SetStateAction<SeriesProps["seriesList"]>>;
}
const From: FC<Props> = ({ seriesList, setSeriesList }) => {
  const [name, setName] = useState("");
  const [genre, setgenre] = useState("");
  const [cover, setcover] = useState("");
  const [seasons, setseasons] = useState<SeriesProps | any>(0);
  console.log(name, genre, cover, seasons);
  const setNameinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const setgenreinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setgenre(event.target.value);
  };
  const setcoverinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setcover(event.target.value);
  };

  const setseasonsinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setseasons(event.target.value);
  };
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!name && !genre && !cover && !seasons) {
      alert("Plase Enter Series Info !!! ");
      return;
    }
    const seriesData = { name, genre, cover, seasons };
    setSeriesList([...seriesList, seriesData]);
    setName("");
    setgenre("");
    setcover("");
    setseasons(0);
  };
  return (
    <Layout>
   
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div>
          <div>
            
          <h1
       
        style={{ fontSize: 50 }}
      >
        My Movie
      </h1>
            <p>Movie name</p>

            <Input
              size="large"
              placeholder=" Movie Name"
              name="name"
              value={name}
              onChange={setNameinputHandler}
            />
            <br></br>
            <br></br>
            <p>Movie type</p>

            <Input
              size="large"
              placeholder="Movie Type"
              name="genre"
              value={genre}
              onChange={setgenreinputHandler}
            />
            <br></br>
            <br></br>
            <p>Link Image</p>

            <Input
              size="large"
              placeholder="Link Image movie"
              name="cover"
              value={cover}
              onChange={setcoverinputHandler}
            />
            <br></br>
            <br></br>
            <p>Sector</p>

            <Input
              size="large"
              placeholder="Sector"
              name="seasons"
              type="number"
              value={seasons}
              onChange={setseasonsinputHandler}
            />
          </div>
          <p></p>

          <Button type="primary" htmlType="submit" onClick={handleClick}>
            Add Series
          </Button>
          <Link href="/">
            <Button type="link">Back</Button>
          </Link>
        </div>
      </Content>
    </Layout>
  );
};

export default From;
