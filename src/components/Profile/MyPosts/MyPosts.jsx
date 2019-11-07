import React from 'react';
import Posts from "./Posts/Posts";
// import classes from "./MyPosts.module.css";
const MyPosts = () => {
    return (
            <div>
                My posts
                <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>
                </div>
              <Posts/>
              <Posts/>
            </div>
    );
};

export default MyPosts;