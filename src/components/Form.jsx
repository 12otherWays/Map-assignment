import React, { useState } from "react";

import { Button, Select, Card, Space } from "antd";
import Info from "./Info";

import { useDispatch } from "react-redux";
import * as reducers from "../store/reducers";
import {
  countryAction,
  coordinatesAction,
  infoAction,
} from "../store/reducers";

const options = [
  {
    label: "India",
    value: "ind",
  },
  {
    label: "United Kingdom",
    value: "uk",
  },
  {
    label: "United States",
    value: "usa",
  },
];

// components styles
let styleCard = {
  display: "flex",
  flexDirection: "column",
  margin: "0",
  padding: "0",
  background: "rgba(225,225,225,0.6)",
};
let styleSpace = {
  position: "absolute",
  top: "100px",
  right: "20px",
  zIndex: "1000",
};

function Form() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(
    reducers.countryAction.getInitialState()
  );

  const updateCountry = () => {
    dispatch(countryAction.actions.update(selected));
    dispatch(coordinatesAction.actions.update(selected));
    dispatch(infoAction.actions.update(selected));
  };
  return (
    <Space direction="vertical" size={16} style={styleSpace}>
      <Card style={styleCard}>
        <h2 style={{ margin: "0" }}>Search Location</h2>
        <Select
          defaultValue={selected}
          style={{
            width: "12rem",
          }}
          options={options}
          onChange={(value) => setSelected(value)}
        />
        <Button
          type="primary"
          style={{ padding: "2px 12px", marginLeft: "2px" }}
          onClick={updateCountry}
        >
          Load
        </Button>
      </Card>
      <Info />
    </Space>
  );
}

export default Form;
