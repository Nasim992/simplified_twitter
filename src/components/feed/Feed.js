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

//     tweets.map(tw=>{              
//         profile.map(fl=>{
//             if(tw.userid===fl._id && tw.status===1) {
//                 console.log(fl.username);
//                 console.log(fl.fullname);
//                  <p>fl.username</p>
//             }
//         });
//         console.log(tw.tweets);
// })
     const arrayNameandTweets = [] ;

     tweets.map(tw=> {

        const nameProfile = profile.filter(fl=>tw. userid===fl._id);

    }) ;

    return ( 
        <div className="feed">
            <div className="feed__header">
                 <h2>Home</h2> 
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
                     
                        <span className="post__headerSpecial">
                         
                        </span>
                      </h3>
                    </div>
                    <div className="post__headerDescription">
                    {
                            profile.map(fl=>
                            <p>{fl.fullname}@{fl.username} {tw.tweets}</p> 
                            
                            )
                            
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