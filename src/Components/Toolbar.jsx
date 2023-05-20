import React from "react";
import { Typography, Button } from "@mui/material";

import Logo from "../Assets/logo.png";

const MyButton = ({ name }) => {
  return (
    <Button
      variant="text"
      style={{
        color: "black",
        fontSize: 13,
        padding: 1,
        margin: 1,
        minWidth: 50,
      }}
    >
      {name}
    </Button>
  );
};

function Toolbar() {
  return (
    <div style={{ display: "flex", gap: 5 }}>
      <img src={Logo} style={{ width: "3%", margin: 10 }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 5,
        }}
      >
        <Typography style={{ marginLeft: 10 }}>Santam Document</Typography>
        <div>
          <MyButton name="File" />
          <MyButton name="Edit" />
          <MyButton name="View" />
          <MyButton name="Insert" />
          <MyButton name="Format" />
          <MyButton name="Tools" />
          <MyButton name="Extensions" />
          <MyButton name="Help" />
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
