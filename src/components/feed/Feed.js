import React from 'react';
import Tweet from '../tweets/Tweet';
import { useEffect, useState } from 'react';
import './Feed.css';
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
    
    // tweets.map (pro=>{
    //     const username= profile.filter(tweet=> tweet.userid == pro._id)
    //     console.log(username);
    // })
    

    return (
        <div className="feed">
            <div className="feed__header">
                 <h2>Home</h2> 
            </div>
            <Tweet userid={props.userid}/>
            {
                tweets.map(tweet => {
                   
            <div className="feed__post">
                <div className="d-flex justify-content-between">
                     <div className="feed__post__username">
                        <h4>{tweets}</h4> 
                     </div>
                     <div className="feed__post__follow">
                        <form>
                            <input 
                            type="hidden"
                            name="follow"
                            />
                            <button type="submit" name="submit__follow" className="btn btn-sm btn-info">Follow</button>
                        </form>
                     </div>
                </div>
              <div className="feed__post__text">
                <h2>{tweet.tweets}</h2>

              </div>
            </div>
         })
            }
        </div>
    );
};

export default Feed;