import React from 'react';
import Tweet from '../tweets/Tweet';
import './Feed.css';
const Feed = () => {
    return (
        <div className="feed">
            <div className="feed__header">
                 <h2>Home</h2>
            </div>
            <Tweet/>
            <div className="feed__post">
                <div className="d-flex justify-content-between">
                     <div className="feed__post__username">
                        <h4> Nasim</h4>
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
                <h2>Hellow , guys Awesome things are doing </h2>
              </div>
            </div>

        </div>
    );
};

export default Feed;