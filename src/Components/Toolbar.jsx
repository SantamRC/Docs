import React from "react";
import Logo from "../Assets/logo.png";

function Toolbar() {
  return (
    <div>
      <img src={Logo} style={{ width: "3%", margin: 10 }} />
    </div>
  );
}

export default Toolbar;
