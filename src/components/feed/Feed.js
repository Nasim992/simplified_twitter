import React from 'react';
import Tweet from '../tweets/Tweet';
import { useEffect, useState } from 'react';
import './Feed.css';
import ShowingUserId from '../showingUserId/ShowingUserId';
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
    
    return ( 
        <div className="feed">
            <div className="feed__header">
                 <h2>Home</h2> 
            </div>
            <Tweet userid={props.userid}/>

            {
            tweets.map(tw=>
                
                <div className="feed__post">
                   <div className="feed__post__username">
                   </div>

                  <div className="feed__post__text">
                   <h2>{tw.tweets}</h2>
                  </div>
                </div>

                    // profile.map(fl=>{
                    //     if(tw.userid===fl._id && tw.status===1) {
                    //         console.log(fl.username);
                    //         console.log(fl.fullname);
                    //         // <p>{fl.username}</p>
                    //     }
                    // });
            )
            }
            </div>
       
    );
};

export default Feed;