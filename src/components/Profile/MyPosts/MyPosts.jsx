import React from 'react';
import Posts from "./Posts/Posts";
import classes from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div className={classes.myPostsBlock}>
            <h1>My posts</h1>
            <div className={classes.textAreaMessage}><textarea  placeholder='What did you say?'/></div>
                <div className={classes.buttonPosition}>
                    <div>
                        <button className={classes.buttom}>Add Post</button>
                    </div>
                    <div>
                        <button className={classes.buttom}>Remove Post</button>
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