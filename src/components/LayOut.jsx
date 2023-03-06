import React, { useState } from "react";

import {
  LeftOutlined,
  RightOutlined,
  HomeOutlined,
  UserOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Dropdown } from "antd";

import icon from "../logo/icon.png";
import text from "../logo/text.png";

import OpenStreetMap from "./OSM";

const { Header, Sider, Content, Footer } = Layout;

function LayOut() {
  const [logIn, setLogIn] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    {
      key: "1",
      label: <span onClick={() => setLogIn(false)}>Log out</span>,
    },
  ];
  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <img
            src={collapsed ? icon : text}
            style={{
              verticalAlign: "baseline",
              height: "32px",
              margin: "16px",
              transition: "color 0.3s",
            }}
            alt="mapup"
          />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: "Home",
              },
              {
                key: "2",
                icon: <InfoCircleOutlined />,
                label: "About",
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              paddingLeft: 20,
              background: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {React.createElement(collapsed ? RightOutlined : LeftOutlined, {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            })}
            {logIn ? (
              <Dropdown menu={{ items }} placement="bottomLeft">
                <Button>
                  <UserOutlined /> User
                </Button>
              </Dropdown>
            ) : (
              <Button onClick={() => setLogIn(true)}>Log in</Button>
            )}
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 2,
              minHeight: 280,
              background: "white",
            }}
          >
            {/* Content */}
            <OpenStreetMap />
          </Content>
          <Footer
            style={{
              background: "none",
              textAlign: "center",
            }}
          >
            ©2023 MapUp
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default LayOut;
