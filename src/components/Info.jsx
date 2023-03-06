import { Card, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const Info = () => {
  const country = useSelector((state) => state.country);
  const info = useSelector((state) => state.info);
  return info ? (
    <Space direction="vertical" size={16}>
      <Card
        size="small"
        title={country.toUpperCase()}
        style={{ width: 300, background: "rgba(225,225,225,0.6)" }}
      >
        <div> Currency: {info.currency} </div>
        <div> Symbol: {info.currencySymbol} </div>
        <div> Unit of Speed: {info.unitOfSpeed} </div>
        <div> Distance: {info.distance} </div>
        <div> Volume: {info.volume} </div>
        <div> Time Zones: GMT : {info.timezones.join(", ")} </div>
      </Card>
    </Space>
  ) : null;
};

export default Info;
