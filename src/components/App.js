import React from "react";
import { Breadcrumb, Layout } from "antd";
import "antd/dist/antd.css";
import AppHeader from "./AppHeader";
import Carusel from "./carusel/Carusel";

const { Header } = Layout;

const App = () => {
  return (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <AppHeader />
        </Header>
        <Carusel />
      </Layout>
    </>
  );
};

export default App;
