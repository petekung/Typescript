import React from "react";
import { Dropdown, Space, Button } from "antd";
import type { MenuProps } from "antd";
import "antd/dist/antd.css";
import { DownOutlined } from "@ant-design/icons";

interface Propstooter {
  NAME: string;
  PHONE: string;
  INTRENSHIP: string;
  setSelect: (visible: string) => void;
  select:string
}
export enum EStatus {
  NAME = "PETEKUNG",
  PHONE = "098-155-5792",
  INTRENSHIP = "1moby",
}

export const Newfooter = ({ NAME, PHONE, INTRENSHIP,setSelect,select}: Propstooter) => {
  //const [Select, setSelect] = useState("");

  const items: MenuProps["items"] = [
    {
      label: EStatus.NAME,
      key: EStatus.NAME,
    },
    {
      label: EStatus.PHONE,
      key: EStatus.PHONE,
    },

    {
      label: EStatus.INTRENSHIP,
      key: EStatus.INTRENSHIP,
    },
  ];
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("Select : ", e);

    setSelect(e.key);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div>
      <h2> {NAME}</h2>
      <h2> {PHONE}</h2>
      <h2> {INTRENSHIP}</h2>

      <Dropdown menu={menuProps} trigger={["click"]}>
        <Button onClick={(e) => e.preventDefault()}>
          <Space>
          Please Select Change Footer <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      
    </div>
  );
};
export default Newfooter;
