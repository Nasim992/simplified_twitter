import React, { useEffect, useState } from "react";
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
import { Button } from "@material-ui/core";

function Sidebar(props) {

  const [profile,setProfile] = useState([]); 

  useEffect(()=>{ 
    fetch('http://localhost:5000/Registerdata')
    .then (res=>res.json())
    .then(data=>
        setProfile(data) 
        ) 
},[])

  const loggedInUser = profile.filter(fl=>fl._id==props.userid);
   
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
       <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>

      <div className="sidebar__loggedinUser">
      {
          loggedInUser.map(user=>
            <p>
              Welcome back,<br/> Mr.{user.fullname}<br/>
              <small>@{user.username}</small>
            
            
            </p>
            
            )
        }
      </div>
       

    </div>
  );
}
export default Sidebar;