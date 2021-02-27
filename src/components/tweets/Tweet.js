import React from 'react';
import './Tweet.css';
import { Avatar,Button, } from "@material-ui/core";
const Tweet = () => {
    return (
        <div className="tweet">
                <form>
                <div className="tweet__input">
                        <Avatar></Avatar>
                        <input type="text"
                              name="tweet_text"
                              placeholder="What's Happening?" />
                      <Button
                        type="submit"
                        className="tweet__tweetButton"
                        name="submit"
                       >
                        Tweet
                    </Button>
                    </div>
                </form>
        </div>
    );
};

export default Tweet;