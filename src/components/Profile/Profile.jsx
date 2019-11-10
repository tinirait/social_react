import React from 'react';
// import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo nam='Tor' birth='20 january' cityes='Alva' education='Degry' webSite='it-camasutra.com'/>
            <MyPosts postData={props.state.postData} addPost={props.addPost}/>
        </div>

    );
};

export default Profile;