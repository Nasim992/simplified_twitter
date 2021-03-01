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
import  {Link, useHistory, useParams } from 'react-router-dom';
import { Button } from "@material-ui/core";
import ProfileStatus from "../profileStatus/ProfileStatus";

function Sidebar(props) {

  const [profile,setProfile] = useState([]); 
  const history = useHistory();

  useEffect(()=>{ 
    fetch('http://localhost:5000/Registerdata')
    .then (res=>res.json())
    .then(data=>
        setProfile(data) 
        ) 
    },[])
  const loggedInUser = profile.filter(fl=>fl._id==props.userid);

  const handleClick = () => {

    history.push(`/Home/${loggedInUser[0]._id}`);

  }
   

  return ( 
    <div className="sidebar">
    <TwitterIcon className="sidebar__twitterIcon" />
      {
         loggedInUser.map(user=>    
          
        <div>
            <Link to="#" onClick={handleClick}><SidebarOption Icon={HomeIcon} text="Home" /></Link>
            <Link to="#"><SidebarOption Icon={PermIdentityIcon} text="Profile" /></Link>
            <Link to ="/Login"><SidebarOption Icon={ExitToAppIcon} text="Login" /></Link>
            <Link to ="/Register"><SidebarOption Icon={ExitToAppIcon} text="Register" /></Link>
            <Link to="#"><SidebarOption Icon={NotificationsNoneIcon} text="Notifications" /></Link>
            <Link to="#"><SidebarOption Icon={MailOutlineIcon} text="Messages" /></Link>
            <Link to="#"><SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" /></Link>
            <Button variant="outlined" className="sidebar__tweet" fullWidth>
              Tweet
      </Button>
      
            <div className="sidebar__loggedinUser">
              <p>
              Welcome back,<br/> Mr.{user.fullname}<br/>
              <small>@{user.username}</small>    
              </p>
              <p>Profile Status :{ <ProfileStatus/>   } </p>
            </div>
          </div>
      )
    }
    </div>
  );
}
export default Sidebar;