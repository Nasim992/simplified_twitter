import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import  {Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

  
       <Link to ="/"><SidebarOption Icon={HomeIcon} text="Home" /></Link>
       <Link to ="/Profile"><SidebarOption Icon={PermIdentityIcon} text="Profile" /></Link>
       <Link to ="/Login"><SidebarOption Icon={ExitToAppIcon} text="Login" /></Link>
       <Link to ="/Register"><SidebarOption Icon={ExitToAppIcon} text="Register" /></Link>
       <Link to ="/Login"><SidebarOption Icon={NotificationsNoneIcon} text="Notifications" /></Link>
       <Link to ="/Login"><SidebarOption Icon={MailOutlineIcon} text="Messages" /></Link>
       <Link to ="/Login"><SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" /></Link>

    </div>
  );
}
export default Sidebar;