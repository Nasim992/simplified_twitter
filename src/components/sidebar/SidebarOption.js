import React from "react";
import "./SidebarOption.css";

function SidebarOption({text, Icon }) { 
  return (
    <div className="sidebarOption">
     
      <h2> <Icon />{text}</h2>
    </div>
  );
}

export default SidebarOption;