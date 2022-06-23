import React from "react";
import { Breadcrumb, Layout } from "antd";
import "antd/dist/antd.css";

import Carusel from "./carusel/Carusel";

const { Header } = Layout;

const App = () => {
  return (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Carusel />
        </Header>
      </Layout>
    </>
  );
};

export default App;
