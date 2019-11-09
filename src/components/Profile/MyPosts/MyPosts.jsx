import React from 'react';
import Posts from "./Posts/Posts";
import classes from "./MyPosts.module.css";

const MyPosts = () => {

    let postData = [
        {id:1, message:'Hi, how are you?',likescount:"1"},
        {id:2, message:'It s my first step',likescount:"10"},
        ];

    let posts = postData.map((newPost)=>{
        return <Posts message={newPost.message} id={newPost.id} likescount={newPost.likescount}/>
    });


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
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;