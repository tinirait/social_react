import React from 'react';
// import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo nam='Tor' birth='20 january' cityes='Alva' education='Degry' webSite='it-camasutra.com'/>
            <MyPosts postData={props.profilePage.postData}
                     newPostText = {props.profilePage.newPostText}
                     updateNewPostText = {props.updateNewPostText}
                     addPost={props.addPost}/>
        </div>

    );
};

export default Profile;