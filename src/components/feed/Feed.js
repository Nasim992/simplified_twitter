import React from 'react';
import Tweet from '../tweets/Tweet';
import { useEffect, useState } from 'react';
import './Feed.css';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { Avatar } from '@material-ui/core';
const Feed = (props) => {

    const [tweets,setTweets] = useState([]);
    const [followerdata,setfollowerdata] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/tweetdata') 
        .then (res=>res.json()) 
        .then(data=>
          setTweets(data)
            )
    },[]) 

    useEffect(()=>{ 
      fetch('http://localhost:5000/findfollower')
      .then (res=>res.json())
      .then(data=>
              setfollowerdata(data)    
          )
  },[])

    const loginUser = sessionStorage.getItem("rData");
    
    const UserFollow = followerdata.filter(fol=>fol.usernameMain===loginUser);

    const followerUsername = [];

    for (var i=0;i<UserFollow.length;i++) {
      followerUsername.push(UserFollow[i].followerusername);
    }

   const PublicTweets = [] ;

   for (var i =0 ;i<tweets.length;i++) {
      for(var j=0;j<Math.max(followerUsername.length,1);j++) {
        if(tweets[i].username === followerUsername[j] || tweets[i].username===loginUser) {
          PublicTweets.push(tweets[i]);
        }
      }
   }

   PublicTweets.reverse();

   var notTweet = '';

   if(PublicTweets.length===0) {
    notTweet = "You don't have any tweet yet.Or,You are not following anyone";
  }

    return ( 
        <div className="feed">
            <div className="feed__header">
                 <h5>Home</h5> 
            </div>
            <Tweet userid={props.userid}/>

            <h6 className="mt-3"><b>{notTweet}</b></h6>
            {              
               PublicTweets.map(tw=>
                <div className="post" >
                <div className="post__avatar">
                  <Avatar/>
                </div>
                <div className="post__body">
                  <div className="post__header">
                    <div className="post__headerText">
                      <h3>
                          {tw.fullname}
                        <span className="post__headerSpecial">
                         @{tw.username}
                        </span>
                      </h3>
                    </div>
                    <div className="post__headerDescription">
                    {
                            <p>{tw.tweets}</p>                            
                    }
                    </div>
                  </div>
                  <img src=""alt="" />
                  <div className="post__footer"> 
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                  </div>
                </div>
                     </div>
            )
            }
            </div> 
    );
};

export default Feed;