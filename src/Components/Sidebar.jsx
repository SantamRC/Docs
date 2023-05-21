import React from "react";

import Calendar from "../Assets/calendar.png";
import Keep from "../Assets/keep.png";
import Tasks from "../Assets/tasks.png";
import Maps from "../Assets/maps.png";
import User from "../Assets/user.png";

function Sidebar() {
  return (
    <div
      style={{
        height: 200,
        width: 50,
        gap: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img src={Calendar} style={{ width: "2.5rem", marginTop: 70 }} />
      <img src={Keep} style={{ width: "2rem" }} />
      <img src={Tasks} style={{ width: "2rem" }} />
      <img src={User} style={{ width: "1.5rem", marginLeft: 5 }} />
      <img src={Maps} style={{ width: "1rem", marginLeft: 8 }} />
    </div>
  );
}

export default Sidebar;
