import React from "react";
import { Typography, Button, Avatar } from "@mui/material";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import VideocamIcon from "@mui/icons-material/Videocam";
import LockIcon from "@mui/icons-material/Lock";

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
    <div style={{ display: "flex", gap: 5, justifyContent: "space-between" }}>
      <div style={{ display: "flex", gap: 5 }}>
        <img src={Logo} style={{ width: "5%", margin: 10 }} />
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginRight: 10,
        }}
      >
        <InsertCommentIcon fontSize="large" />
        <VideocamIcon fontSize="large" />
        <Button
          variant="contained"
          startIcon={<LockIcon />}
          style={{
            backgroundColor: "#c2e7ff",
            borderRadius: 100,
            color: "black",
            boxShadow: "none",
            fontSize: "0.7rem",
            fontWeight: 500,
            height: 40,
            width: 100,
          }}
        >
          Share
        </Button>
        <Avatar>S</Avatar>
      </div>
    </div>
  );
}

export default Toolbar;
