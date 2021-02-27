import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import  {Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

     <nav>
       
       <Link to ="/"><SidebarOption Icon={HomeIcon} text="Home" /></Link>
       <Link to ="/Profile"><SidebarOption Icon={PermIdentityIcon} text="Profile" /></Link>
       <Link to ="/Login"><SidebarOption Icon={ExitToAppIcon} text="Login" /></Link>
       <Link to ="/Register"><SidebarOption Icon={ExitToAppIcon} text="Register" /></Link>

     </nav>
    </div>
  );
}
export default Sidebar;