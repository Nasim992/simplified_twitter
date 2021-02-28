import React, { useEffect, useState } from 'react';
import './Tweet.css';
import { Avatar,Button, } from "@material-ui/core";
import { useForm} from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const Tweet = (props) => { 
    const {register,handleSubmit } = useForm();
    const history = useHistory();
    const [profile,setProfile] = useState([]); 

    useEffect(()=>{ 
        fetch('http://localhost:5000/Registerdata')
        .then (res=>res.json())
        .then(data=>
            setProfile(data) 
            ) 
    },[])
    const newID = profile.filter(fl=>fl._id==props.userid);
    const onSubmit = (data)=>{
        const NewData = {
            ...data,
            username:newID[0].username,
            fullname:newID[0].fullname
        }
            fetch(`http://localhost:5000/tweet/${props.userid}`,{
                method: 'POST',
                body: JSON.stringify(NewData),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(res => res.json())
            .then(data => console.log(NewData)
            )
            alert("Tweet posted successfully");
            history.push(`/Home/${props.userid}`);
    }
    return (

        <div className="tweet">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="tweet__input">
                        <Avatar></Avatar>
                        <input type="text"
                              name="tweet_text"
                              placeholder="What's Happening?"
                              ref={register}
                              required
                             />
                      <button
                        type="submit"
                        className="tweet__tweetButton"
                        name="submit"
                       >
                        Tweet
                    </button>
                    </div>
                </form>
        </div>
    );
};

export default Tweet;