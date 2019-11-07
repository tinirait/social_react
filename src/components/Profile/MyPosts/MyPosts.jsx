import React from 'react';
import Posts from "./Posts/Posts";
import classes from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div className={classes.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div className={classes.buttonPosition}>
                    <div>
                        <button>Add Post</button>
                    </div>
                    <div>
                        <button>Remove</button>
                    </div>
                </div>
            </div>

            <div className={classes.posts}>
                <Posts/>
                <Posts/>
            </div>
        </div>
    );
};

export default MyPosts;