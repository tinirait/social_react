import React from 'react';
import Posts from "./Posts/Posts";
import classes from "./MyPosts.module.css";

const MyPosts = () => {

    let postData = [
        {id:1, message:'Hi, how are you?',likescount:"1"},
        {id:2, message:'It s my first step',likescount:"10"},
        ];


    return (
        <div className={classes.myPostsBlock}>
            <h1>My posts</h1>
            <div className={classes.textAreaMessage}><textarea placeholder='What did you say?'/></div>
            <div className={classes.buttonPosition}>
                <div>
                    <button className={classes.buttom}>Add Post</button>
                </div>
                <div>
                    <button className={classes.buttom}>Remove Post</button>
                </div>
            </div>

            <div className={classes.posts}>
                <Posts message={postData[0].message} id={postData[0].id} likescount={postData[0].likescount}/>
                <Posts message={postData[1].message} id={postData[1].id} likescount={postData[1].likescount}/>
            </div>
        </div>
    );
};

export default MyPosts;