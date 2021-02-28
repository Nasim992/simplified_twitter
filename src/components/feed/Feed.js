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
    const [profile,setProfile] = useState([]); 
    useEffect(()=>{
        fetch('http://localhost:5000/tweetdata') 
        .then (res=>res.json()) 
        .then(data=>
            setTweets(data)
            )
    },[])
    useEffect(()=>{ 
        fetch('http://localhost:5000/Registerdata')
        .then (res=>res.json())
        .then(data=>
            setProfile(data) 
            ) 
    },[])
    return ( 
        <div className="feed">
            <div className="feed__header">
                 <h5>Home</h5> 
            </div>
            <Tweet userid={props.userid}/>
            { 
            tweets.map(tw=>

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