import React from "react";
import { Menu } from "antd";

const AppHeader = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </div>
    </div>
  );
};

export default AppHeader;
