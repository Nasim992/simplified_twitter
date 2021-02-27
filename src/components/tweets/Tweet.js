import React from 'react';
import './Tweet.css';
import { Avatar,Button, } from "@material-ui/core";
import { useForm} from 'react-hook-form';

const Tweet = (props) => {
    const {register,handleSubmit } = useForm();
 
    const onSubmit = (data)=>{
            fetch(`http://localhost:5000/tweet/${props.userid}`,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(res => res.json())
            .then(data => console.log(data)
            )
            alert("Tweet posted successfully");
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