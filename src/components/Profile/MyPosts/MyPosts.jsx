import React from 'react';
import Posts from "./Posts/Posts";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {


    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);


    };


    let posts = props.postData.map((newPost) => {
        return <Posts message={newPost.message} id={newPost.id} likescount={newPost.likescount}/>
    });

    return (
        <div className={classes.myPostsBlock}>
            <h1>My posts</h1>
            <div className={classes.textAreaMessage}>


                <textarea  onChange={onPostChange} ref={newPostElement} placeholder='What did you say?' value={props.newPostText} /></div>


            <div className={classes.buttonPosition}>
                <div>
                    <button onClick={addPost} className={classes.buttom}>Add Post</button>
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